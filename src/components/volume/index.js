import Chart from '../Chart'
import Konva from 'konva'
import $ from 'jquery'
import MouseLine from '../mouse-line/index'
import { getPinchDis } from '../../core/util'

var uid = 0

class Volume extends Chart {
    constructor(options = {}) {
        super(options)

        const defaults = {
            ctype: 'volume',
            
            left: 0,

            width: 640,
            height: 90,

            figureWidth: 640,
            stateHeight: 20,
            figureHeight: 70,
        }

        options = this.$options = Object.assign(this.$options, defaults, options)

        this.uid = 'volume' + (uid++)

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
    }

    _bindEvents() {
        var self = this
        var options = this.$options
        var { kspan, kwidth, left, figureWidth, figureHeight, stateHeight, mouseLineType } = options

        super._bindEvents()

        function clickHandler(e) {
            self.scaleing = true
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

            if (self._isDrag) {
                if (Math.abs(self._mouseX - x) < kspan) {
                    return
                }
                
                var index = Math.round((self._mouseX - x) / kspan)
                
                if (x >= 0) {
                    self.moveChart(index)
                }
            }

            if (self._isPinch && touches && touches.length == 2) {
                pinchDis = getPinchDis(self._touches, touches)
                self.scaleChart(Math.sign(pinchDis))
            }
            
            self.mouseIndex = xData.findIndex(v => {
                // return v >= x
                return (v + kwidth) >= x
            })
            
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

            })

            // TODO
            self.emit('add-mouse-line', {
                emitter: 'other',
                type: mouseLineType,
                mouseIndex: self.mouseIndex,
                isValidPoint: isValidPoint,
                mouseX: self._mouseX,
                mouseY: self._mouseY,
                isDrag: self._isDrag
            })
        }

        this.stage.on('click', clickHandler)

        this.stage.on('mousemove', moveHandler)
        this.stage.on('touchmove', moveHandler)
    }

    addVrect() {
        const { left, kspan, kwidth, stateHeight, figureWidth, figureHeight, sliceType, period, xAxis } = this.$options

        var data = this.dataSet.getVrectData({
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

    addFillRect() {
        const { left, stateHeight, figureWidth } = this.$options

        var data = this.dataSet.getFillRectData({
            left,
            stateHeight, 
            figureWidth
        })

        data.rects.forEach(opts => {
            var node = new Konva.Rect(opts)
            this.groups.main.add(node)
        })

        return this
    }

    drawVolume() {
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
            .addVrect()
            .addFillRect()
        
        this.layers.main.add(this.groups.main).draw()

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

        var extent = this.dataSet.extent()
        // console.log('extent:', extent)

        this.dataSet.setScale({
            domain: extent,
            range: [figureHeight, stateHeight]
        })

        return this
    }

    update() {
        this.setScale()

        this.drawVolume()
            .drawTickLabel()
    }

    redraw() {
        this.drawVolume()
            .drawTickLabel()
    }

}

export default Volume