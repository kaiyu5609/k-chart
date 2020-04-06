import Chart from '../Chart'
import Konva from 'konva'
import $ from 'jquery'
import MouseLine from '../mouse-line/index'
import { getPinchDis } from '../../core/util'

var uid = 0

class Kline extends Chart {

    constructor(options = {}) {
        super(options)

        const defaults = {
            ctype: 'kline',
            
            left: 0,

            width: 640,
            height: 220,

            figureWidth: 640,
            stateHeight: 20,
            figureHeight: 220,

            maList: ['ma5', 'ma10', 'ma20', 'ma30', 'ma60'],
            maLineType: 'ma',
        }

        options = this.$options = Object.assign(this.$options, defaults, options)

        this.uid = 'kline' + (uid++)

        this.activeMa = {
            'ma5': true,
            'ma10': true,
            'ma20': true,
            'ma30': true,
            'ma60': true
        }

        this._initStage()

        this._initElements()

        this.mouseLine = new MouseLine(this, options)

        this._bindEvents()

        if (options.autoFetchData) {
            this.fetchData({
                uid: this.uid,
                count: -2 * options.count,
                mode: 'init'
            })
        }
    }

    _initStage() {
        var { el, width, height } = this.$options

        var stage = this.stage = new Konva.Stage({
            container: el,
            width,
            height
        })

        var main = this.layers.main = new Konva.Layer()
        stage.add(main)

        var maLine = this.layers.maLine = new Konva.Layer()
        stage.add(maLine)

        var tickLabel = this.layers.tickLabel = new Konva.Layer()
        stage.add(tickLabel)

        var mouseLine = this.layers.mouseLine = new Konva.Layer()
        stage.add(mouseLine)

        stage.container().style.position = 'relative'
    }

    _initElements() {
        var options = this.$options
        var $el = this.$elements.$el = $(options.el)

        var $selList = this.$elements.$selList = this._createSelList()

        $el.append($selList)
    }

    _createSelList() {
        var $selList = $('<ul/>')
        $selList.attr('id', 'sel-list')
        $selList.attr('class', 'sel-list')
        $selList.css({
            position: 'absolute',
            top: 20
        })

        var selItems = [{
            text: '均线',
            type: 'ma',
            ma: 'ma'
        }, {
            text: '关闭',
            type: 'ma',
            ma: null
        }]

        selItems.forEach((item, index) => {
            var $selItem = $('<li/>')
            if (index === 0) {
                $selItem.addClass('active')
            }
            $selItem.data('type', item.type)
            $selItem.data('ma', item.ma)
            $selItem.text(item.text)
            $selList.append($selItem)
        })

        return $selList
    }

    _bindEvents() {
        var self = this
        var options = this.$options
        var { kspan, kwidth, left, figureWidth, figureHeight, stateHeight, mouseLineType, maList } = options

        super._bindEvents()

        function clickHandler(e) {
            var x, y, maIndex, ma
            
            self.scaleing = true

            switch (e.type) {
                case 'touchstart':
                    x = self.stage.getPointerPosition().x - left
                    y = self.stage.getPointerPosition().y
                    break
                case 'click':
                    x = e.evt.offsetX - left
                    y = e.evt.offsetY
                    break
            }

            if (x > 30) {
                if (y <= 20) {
                    maIndex = self.maPosition.findIndex(d => d > x)
                    ma = maList[maIndex]
                    self.activeMa[ma] = !self.activeMa[ma]
                    self.update()
                }
            } else {
                if (y <= 20) {
                    self.$elements.$selList.css({
                        left: left - 20
                    })
                    self.$elements.$selList.toggle()
                }
            }
        }

        function moveHandler(e) {
            self.stage.container().style.cursor = 'pointer'

            var x, y, xData = self.dataSet.getData('xData'), isValidPoint

            var touches = e.evt.touches, pinchDis

            switch (e.type) {
                case 'touchmove':
                    x = self.stage.getPointerPosition().x - left
                    y = self.stage.getPointerPosition().y
                    self._longTouchtimer && clearTimeout(self._longTouchtimer)
                    break
                case 'mousemove':
                    x = e.evt.offsetX - left
                    y = e.evt.offsetY
                    break
            }

            if (y < stateHeight || y > figureHeight) {
                self.removeMouseLine()
                self.emit('remove-mouse-line')
                return
            }

            if (self._isDrag) {
                if (Math.abs(self._mouseX - x) < kspan) {
                    return
                }
                
                var index = Math.round((self._mouseX - x) / kspan)

                if (x >= 0) {
                    self.moveChart(index * 2)
                    self._isDragging = true
                }
            } else if (self._isPinch && touches && touches.length == 2) {
                pinchDis = getPinchDis(self._touches, touches)
                self.scaleChart(Math.sign(pinchDis))
            }
            
            self.mouseIndex = xData.findIndex(v => {
                // return v >= x
                return (v + kwidth) >= x
            })

            // $('#tips-1').text(self._mouseX + ',' + x + ',' + index + ',' + options.startIndex + ',' + options.stopIndex)
            
            self._mouseX = x
            self._mouseY = y

            isValidPoint = self._mouseX >= 0 && self._mouseX <= figureWidth && self._mouseY >= stateHeight && self._mouseY <= figureHeight

            // TODO
            self.addMouseLine({
                emitter: 'self',
                type: mouseLineType,
                mouseIndex: self.mouseIndex,
                isValidPoint: isValidPoint,
                mouseX: self._mouseX,
                mouseY: self._mouseY,
                isDrag: self._isDrag,
                isPinch: self._isPinch,
                isLongTouch: self._isLongTouch
            })

            // TODO
            self.emit('add-mouse-line', {
                emitter: 'other',
                type: mouseLineType,
                mouseIndex: self.mouseIndex,
                isValidPoint: isValidPoint,
                mouseX: self._mouseX,
                mouseY: self._mouseY,
                isDrag: self._isDrag,
                isPinch: self._isPinch,
                isLongTouch: self._isLongTouch
            })
        }

        function maLineSelHandler(e) {
            var $target = $(e.target)
            var type = $target.data('ma')
            var { maLineType } = self.$options

            self.$elements.$selList.hide()

            if (maLineType == type) {
                return
            }

            self.$options.maLineType = type
            $target.siblings().removeClass('active')
            type && $target.addClass('active')
            
            if (kwidth > 0) {
                self.drawMaLine()
            }
        }

        this.stage.on('click', clickHandler)
        this.stage.on('touchstart', clickHandler)

        this.stage.on('mousemove', moveHandler)
        this.stage.on('touchmove', moveHandler)

        this.mouseLine.on('mouseline-move', () => {
            self.drawMaLine()
        })

        this.$elements.$selList.on('click', maLineSelHandler)
    }

    addKline() {
        const { left, kspan, kwidth, stateHeight, figureWidth, figureHeight, sliceType, period, xAxis } = this.$options

        var data = this.dataSet.getKlineData({
            left,
            kspan,
            kwidth,
            stateHeight, 
            figureWidth,
            figureHeight,
            sliceType,
            period,
            $colors: this.$colors,
            xAxis
        })

        data.texts.forEach(opts => {
            var node = new Konva.Text(opts)
            this.groups.main.add(node)
        })

        data.lines.forEach(opts => {
            var node = new Konva.Line(opts)
            this.groups.main.add(node)
        })

        data.rects.forEach(opts => {
            var node = new Konva.Rect(opts)
            this.groups.main.add(node)
        })

        return this
    }

    addExtentTips() {
        const { left, kspan, kwidth, figureWidth } = this.$options

        var data = this.dataSet.getExtentTipData({
            left,
            kspan,
            kwidth,
            figureWidth,
            $colors: this.$colors
        })

        data.lines.forEach(opts => {
            var node = new Konva.Line(opts)
            this.groups.main.add(node)
        })

        data.texts.forEach(opts => {
            var node = new Konva.Text(opts)
            this.groups.main.add(node)
        })

        return this
    }

    drawKline() {
        var { 
            width, 
            height 
        } = this.$options

        if (!this.groups.main) {
            this.groups.main = new Konva.Group({
                x: 0, y: 0, width, height
            })
        } else {
            this.groups.main.destroy()
        }

        this.addGrid()
        .addKline()
        .addExtentTips()
        
        this.layers.main.add(this.groups.main).draw()

        return this
    }

    drawMaLine() {
        const { width, height, left, maList, maLineType, kspan, kwidth, stateHeight, startIndex, stopIndex } = this.$options

        if (!this.groups.maline) {
            this.groups.maline = new Konva.Group({
                x: 0, y: 0, width, height
            })
        } else {
            this.groups.maline.destroy()
        }

        var data = this.dataSet.getMaLineData({
            left,
            maList, 
            maLineType,
            activeMa: this.activeMa,
            $colors: this.$colors,
            kspan,
            kwidth,
            stateHeight,
            startIndex,
            stopIndex,
            currentIndex: this.currentIndex
        })

        this.maPosition = data.maPosition

        data.lines.forEach(opts => {
            var node = new Konva.Line(opts)
            this.groups.maline.add(node)
        })

        data.texts.forEach(opts => {
            var node = new Konva.Text(opts)
            this.groups.maline.add(node)
        })

        this.layers.maLine.add(this.groups.maline).draw()

        return this
    }

    setScale() {
        var { 
            maList, 
            kwidth, 
            startIndex, 
            stopIndex, 
            figureHeight, 
            stateHeight, 
            paddingY, 
            width, 
            height 
        } = this.$options

        // console.log(startIndex, stopIndex)

        var data = this.allDataSet.slice(startIndex, stopIndex)

        this.dataSet.setData(data)

        this.currentIndex = this.currentIndex || data.length - 1

        var extent = this.dataSet.extent({
            maList,
            kwidth,
            activeMa: this.activeMa,
            startIndex,
            stopIndex,
            figureHeight,
            stateHeight,
            paddingY
        })
        // console.log('extent:', extent)
       
        // console.log(extent)

        this.dataSet.setScale({
            domain: extent,
            range: [figureHeight - paddingY, stateHeight + paddingY]
        })

        return this
    }

    update() {
        this.setScale()

        this.drawKline()
            .drawMaLine()
            .drawTickLabel()
    }

    redraw() {
        this.drawKline()
            .drawMaLine()
            .drawTickLabel()
    }

}

export default Kline