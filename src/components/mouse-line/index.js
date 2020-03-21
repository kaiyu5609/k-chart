import EventEmitter from 'events'
import ToolTips from '../tooltips/index'

class MouseLine extends EventEmitter {
    constructor(context, options = {}) {
        super()

        const defaults = {}
        options = this.$options = Object.assign({}, defaults, options)
        this.context = context
        this.dataSet = options.dataSet || {}

        this.groups = {}

        this.tooltips = new ToolTips(context, options)
    }

    /**
     * 
     * @param {boolean} type 
     *  type: true，yMouseLine 跟随鼠标自由移动
     *  type: false，yMouseLine 指示到`currentIndex`对应的收盘价位置
     */
    addMouseLine(data) {
        const context = this.context
        const { ctype, width, height, left, figureWidth, figureHeight, stateHeight, period, xAxis, tooltips } = this.$options
        const { type, mouseIndex, isValidPoint, mouseX, mouseY, isDrag, emitter } = data

        var data = {
            lines: [],
            rects: [],
            texts: [],
            circles: []
        }

        // TODO
        if (
            type === false || 
            mouseIndex >= 0 && !isDrag &&
            isValidPoint
        ) {
            data = this.dataSet.getMouseLineData({
                ctype,
                type,
                mouseIndex: mouseIndex,
                mouseY: mouseY,
                left,
                figureWidth,
                figureHeight,
                stateHeight,
                period,
                $colors: context.$colors,
                xAxis,
                emitter
            })

            context.currentIndex = context.mouseIndex

            if (tooltips) {
                this.tooltips.setData(data.item)
            }

            this.emit('mouseline-move')
        } else {
            this.tooltips.setData()
        }
        
        if (!this.groups.main) {
            this.groups.main = new Konva.Group({
                x: 0,
                y: 0,
                width,
                height
            })
        } else {
            this.groups.main.destroy()
        }

        data.lines.forEach(opts => {
            var node = new Konva.Line(opts)
            this.groups.main.add(node)
        })

        data.circles.forEach(opts => {
            var node = new Konva.Circle(opts)
            this.groups.main.add(node)
        })

        data.rects.forEach(opts => {
            var node = new Konva.Rect(opts)
            this.groups.main.add(node)
        })

        data.texts.forEach(opts => {
            var node = new Konva.Text(opts)
            this.groups.main.add(node)
        })

        context.layers.mouseLine.add(this.groups.main).draw()

        return this
    }

}

export default MouseLine