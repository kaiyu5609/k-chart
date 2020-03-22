import EventEmitter from 'events'
import Konva from 'konva'

class Chart extends EventEmitter {

    constructor(options = {}) {
        super()

        const defaults = {
            ctype: '',
            
            width: 640,
            height: 220,

            left: 0,

            stateHeight: 20,
            figureHeight: 220,
            figureWidth: 640,

            autoFetchData: true,

            sliceType: true,
            mouseLineType: true,

            kwidth: 6,
            kpadding: 1.5,
            period: 'day',

            xAxis: {
                display: true
            },
            tooltips: true
        }

        options = this.$options = Object.assign({}, defaults, options)

        this.allDataSet = options.allDataSet || {}
        this.dataSet = options.dataSet || {}

        this.$colors = {
            'ma5': '#f80',
            'ma10': '#08c',
            'ma20': '#d3a',
            'ma30': '#f45',
            'ma60': '#608',

            'ma5_o': 'rgba(255, 136, 0, 0.2)',
            'ma10_o': 'rgba(0, 136, 204, 0.2)',
            'ma20_o': 'rgba(221, 51, 170, 0.2)',
            'ma30_o': 'rgba(255, 68, 85, 0.2)',
            'ma60_o': 'rgba(102, 0, 136, 0.2)',

            'red': '#e30',
            'green': '#0a0',
            'blue': '#06c',

            'close': '#06c',
            'text': '#333'
        }

        this.mouseIndex = 0
        this.currentIndex = 0
        this.scaleing = false

        this.$elements = {}

        this.layers = {}

        this.groups = {}

        this._initOptions()
    }

    setOptions(key, val) {
        var options = this.$options

        if (typeof key === 'object') {
            val = key
            for (var name in val) {
                options[name] = val[name]
            }
        } else {
            options[key] = val
        }

        return this
    }

    _initOptions() {
        var options = this.$options
        var { width, left, figureHeight, stateHeight, figureWidth, kwidth, kpadding } = options

        left = Math.max(0, left)

        var figureWidth = width - left

        var kspan = kwidth + 2 * kpadding
        var paddingY = 0.03 * (figureHeight - stateHeight)
        var count = Math.floor(figureWidth / kspan)
        var begin = Date.now() + 864e5

        this.setOptions({
            left,
            figureWidth,
            kspan,
            paddingY,
            count,
            startIndex: -count,
            begin
        })
    }

    _initStage() {}

    _initElements() {}

    _bindEvents() {
        var self = this
        var options = this.$options
        var { kwidth, kpadding, left } = options

        this.allDataSet.on('data-changed', (res) => {
            var { uid, mode, data } = res

            if (options.stopIndex === undefined) {
                options.stopIndex = data.length
            } else {
                options.stopIndex += data.length
            }

            if (mode === 'moveChart') {

            } else if (mode === 'scaleChart') {
                options.startIndex = -options.count
            }
            
            self.update()
        })

        function startHandler(e) {
            switch (e.type) {
                case 'touchstart':
                    self._mouseX = self.stage.getPointerPosition().x - left
                    break
                case 'mousedown':
                    self._mouseX = e.evt.offsetX - left
                    break
            }
            self._isDrag = true
        }

        function endHandler(e) {
            self._isDrag = false
        }

        function leaveHandler(e) {
            self._isDrag = false
            self.scaleing = false

            self.removeMouseLine()
            self.emit('remove-mouse-line')
        }

        function wheelHandler(e) {
            var x

            if (self.scaleing) {
                e = e.originalEvent
                e.preventDefault()

                x = e.offsetX - left

                if (x < 0) {
                    return
                }
                
                if (e.deltaX) {
                    var index = Math.round(e.deltaX / (kwidth + 2 * kpadding))
                    self.moveChart(index)
                }

                // if (Math.abs(e.deltaY) < 5 || Math.abs(e.deltaY) > 20) {
                    self.scaleChart(-Math.sign(e.deltaY))
                // }
            }
        }

        this.stage.on('mousedown', startHandler)
        this.stage.on('touchstart', startHandler)

        this.stage.on('mouseup', endHandler)
        this.stage.on('touchend', endHandler)

        this.stage.on('mouseleave', leaveHandler)

        this.$elements.$el.on('mousewheel', wheelHandler)

    }

    fetchData(params) {
        this.stop = true
        return this.allDataSet.fetchKlineData(params).then(() => {
            this.stop = false
        })
    }

    addGrid() {
        const { left, figureWidth, figureHeight, stateHeight } = this.$options

        var data = this.dataSet.getGridData({
            left,
            figureWidth,
            figureHeight,
            stateHeight,
            stroke: 'rgba(225, 225, 225, 1)',
            strokeWidth: 1,
            font: '22px Helvetica',
            $colors: this.$colors
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

    addYTicks() {
        const { left, figureHeight, stateHeight } = this.$options

        var data = this.dataSet.getYTickData({
            left,
            figureHeight,
            stateHeight,
            $colors: this.$colors
        })

        data.texts.forEach(opts => {
            var node = new Konva.Text(opts)
            this.groups.tickLabel.add(node)
        })

        return this
    }

    drawTickLabel() {
        var { 
            width, 
            height 
        } = this.$options

        if (!this.groups.tickLabel) {
            this.groups.tickLabel = new Konva.Group({
                x: 0, y: 0, width, height
            })
        } else {
            this.groups.tickLabel.destroy()
        }

        this.addYTicks()

        this.layers.tickLabel.add(this.groups.tickLabel).draw()

        return this
    }

    addMouseLine(data) {
        this.mouseLine.addMouseLine(data)

        return this
    }

    removeMouseLine() {
        this._mouseX = -999
        this._mouseY = -999

        this.mouseLine.addMouseLine({ type: true, mouseX: this._mouseX, mouseY: this._mouseY })

        return this
    }

    /**
     * 
     * @param {*} index 
     * @param {*} data.flag 为true，外部触发的moveChart
     */
    moveChart(index = 1, data = {}) {
        var options = this.$options
        var { startIndex, stopIndex, count } = options
        var { emitter } = data

        var allKlineData = this.allDataSet.getData()
        var klineData = this.dataSet.getData()

        if (klineData.length !== allKlineData.length) {
            /**
             * 临界点：
             * 1. 向右钻取数据，stopIndex <= allKlineData.length
             * 2. 向左钻取数据，startIndex >= -allKlineData.length
             * 3. this.stop
             */
            if (
                index > 0 && stopIndex >= allKlineData.length || 
                index < 0 && startIndex + allKlineData.length <= 0 || 
                this.stop
            ) {
                return
            }

            options.startIndex = Math.min(-count, startIndex + index)
            options.stopIndex = Math.min(allKlineData.length, stopIndex + index)

            if (
                options.startIndex + allKlineData.length < count / 2 && 
                index < 0 && 
                !this.allDataSet.getState('isAllData') && 
                (!emitter || emitter === this)
            ) {
                this.fetchData({
                    uid: this.uid,
                    count: -2 * count,
                    mode: 'moveChart'
                })
            } else {
                this.update()
            }

            if ((!emitter || emitter === this)) {
                this.emit('move-chart', {
                    index
                })
            }
        }
    }

    moveChartWithMouseLine(index = 1) {
        this.moveChart(index)

        // 左移（<）、右移（>）时，触发 `mouseline`
        this.addMouseLine({ type: false })

        return this
    }

    /**
     * 
     * @param {*} data.flag 为true，外部触发的resetScaleChart
     */
    resetScaleChart(data = {}) {
        var { kwidth } = this.$options
        var { emitter } = data

        if (kwidth !== 6) {
            this.$options.kwidth = 6
            this.scaleChart(0, { reset: true, emitter })

            this.emit('reset-scale-chart')
        }
    }

    /**
     * 
     * @param {*} scale 
     * @param {*} data.flag 为true，外部触发的scaleChart
     */
    scaleChart(scale = 3, data = {}) {
        var options = this.$options

        var { kwidth, kpadding, figureWidth } = options

        var { reset, emitter } = data

        var allKlineData = this.allDataSet.getData()

        options.kwidth = scale > 0 
            ? Math.min(17, kwidth + scale)
            : Math.max(0, kwidth + scale)

        if (options.kwidth !== kwidth || reset == true) {
            this.$elements.$el.attr('kwidth', options.kwidth)

            options.kspan = options.kwidth + 2 * kpadding
            options.count = Math.floor(figureWidth / options.kspan)

            if (options.count > allKlineData.length) {
                this.fetchData({
                    uid: this.uid,
                    count: -options.count,
                    mode: 'scaleChart'
                })
            } else {
                options.startIndex = -options.count - (allKlineData.length - options.stopIndex)
                this.update()
            }

            if (!emitter || emitter === this) {
                this.emit('scale-chart', {
                    scale,
                    reset
                })
            }
        }

        // 缩放图形时，隐藏十字辅助线
        this.removeMouseLine()
        this.emit('remove-mouse-line')
    }

    render() {
        this.update()
    }

    destroy() {
        // TODO
    }

}


export default Chart