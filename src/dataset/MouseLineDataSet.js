import moment from 'moment'
import { floor, measureText } from '../core/util/index'

import DataSet from './DataSet'

class MouseLineDataSet extends DataSet {
    constructor(context, options = {}) {
        super(options)

        const defaults = {}
        this.options = Object.assign(this.options, defaults, options)
        this.context = context

        this._item = {
            left: null,
            right: null
        }
    }

    getMouseLineData(options) {
        var context = this.context

        var result = {
            lines: [],
            circles: [],
            rects: [],
            texts: [],
            item: {
                display: false
            }
        }

        var data = context.getData()
        
        if (!data.length) {
            return result
        }
        
        var { ctype, 
            type, 
            left, 
            height, 
            mouseIndex, 
            mouseY, 
            figureWidth, 
            figureHeight, 
            stateHeight, 
            period, 
            $colors, 
            xAxis, 
            emitter 
        } = options

        if (!data[mouseIndex]) {
            return result
        }

        var columns = this.options.columns

        var xData = context.getData('xData')

        var extent = context.getData('extent')

        var scaleLinear = context.getScale()

        var cols = ['timestamp', 'open', 'high', 'low', 'close', 'volume', 'amount', 'chg', 'percent', 'turnoverrate'] 

        var values = cols.map(d => {
            return data[mouseIndex] ? data[mouseIndex][columns.indexOf(d)] : 0
        })

        var lastClose = data[mouseIndex - 1] ? data[mouseIndex - 1][columns.indexOf('close')] : null
        
        var item = {
            display: true,
            timestamp: values[0],
            open: values[1],
            high: values[2],
            low: values[3],
            close: values[4],
            volume: values[5],
            amount: values[6],
            chg: values[7],
            percent: values[8],
            turnoverrate: values[9],
            lastClose: lastClose
        }

        // TODO
        var xText = item.time = moment(item.timestamp).format('YYYY-MM-DD')
        var yText = ctype === 'volume' 
            ? (extent.max - (mouseY - stateHeight) / (figureHeight - stateHeight) * (extent.max - extent.min))
            : type 
                ? (extent.phigh - (mouseY - stateHeight) / (figureHeight - stateHeight) * (extent.phigh - extent.plow))
                : item.close

        // TODO
        yText = ctype === 'volume' ? this.parseVolume(yText) : Number(yText).toFixed(2)

        var xTextWidth = measureText(xText).width
        var yTextWidth = measureText(yText).width
        // console.log(item, item.time, xText)

        var xTextLeft = xData[mouseIndex] - xTextWidth / 2

        xTextLeft = Math.max(0, xTextLeft)
        xTextLeft = Math.min(figureWidth - xTextWidth, xTextLeft)

        if (
            xData[mouseIndex] > (figureWidth - 150) || 
            (this._item.left === null && this._item.right === null)
        ) {
            item.left = left ? left : 30
            item.right = null
        } else if (xData[mouseIndex] < 150 + 30) {
            item.left = null
            item.right = 0
        }
        
        this._item.left = item.left
        this._item.right = item.right

        var yTop = type ? mouseY : scaleLinear(item.close)

        var lines
        if (emitter !== 'self') {
            lines = [
                {
                    strokeWidth: 1,
                    stroke: $colors.text,
                    points: [
                        left + xData[mouseIndex], stateHeight, 
                        left + xData[mouseIndex], figureHeight
                    ],
                    dash: [2, 3]
                }
            ]
        } else {
            lines = [
                {
                    strokeWidth: 1,
                    stroke: $colors.text,
                    points: [
                        left, yTop, 
                        left + figureWidth, yTop
                    ],
                    dash: [2, 3]
                }, {
                    strokeWidth: 1,
                    stroke: $colors.text,
                    points: [
                        left + xData[mouseIndex], stateHeight, 
                        left + xData[mouseIndex], figureHeight
                    ],
                    dash: [2, 3]
                }
            ]
        }

        if (type === false) {
            result.circles.push({
                x: left + xData[mouseIndex],
                y: yTop,
                radius: 3,
                fill: '#fff',
                stroke: $colors.blue,
                strokeWidth: 1
            })
        }

        var rects
        if (emitter !== 'self') {
            rects = [
                {
                    x: left + xTextLeft - 3,
                    y: floor(figureHeight),
                    width: xTextWidth + 3,
                    height: 16,
                    fill: '#eaeaea',
                    display: xAxis.display
                }
            ]
        } else {
            rects = [
                {
                    x: left ? left - yTextWidth - 4 : 0,
                    y: floor(yTop - 9),
                    width: left ? yTextWidth + 4 : yTextWidth + 3,
                    height: 16,
                    fill: '#eaeaea'
                }, {
                    x: left + xTextLeft - 3,
                    y: floor(figureHeight),
                    width: xTextWidth + 3,
                    height: 16,
                    fill: '#eaeaea',
                    display: xAxis.display
                }
            ]
        } 

        var texts
        if (emitter !== 'self') {
            texts = [
                {   
                    x: left + xTextLeft,
                    y: figureHeight + 4,
                    text: xText,
                    fill: $colors.blue,
                    fontSize: 11,
                    align: 'center',
                    verticalAlign: 'middle',
                    display: xAxis.display
                }
            ]
        } else {
            texts = [
                {   
                    x: left ? left - yTextWidth - 2 : 1,
                    y: yTop - 5,
                    text: yText,
                    fill: $colors.blue,
                    fontSize: 11,
                    align: 'center',
                    verticalAlign: 'middle'
                }, {   
                    x: left + xTextLeft,
                    y: figureHeight + 4,
                    text: xText,
                    fill: $colors.blue,
                    fontSize: 11,
                    align: 'center',
                    verticalAlign: 'middle',
                    display: xAxis.display
                }
            ]
        }

        lines.forEach((d, i) => {
            result.lines.push(d)
        })

        rects.forEach((d, i) => {
            if (d.display !== false) {
                result.rects.push(d)
            }
        })

        texts.forEach((d, i) => {
            if (d.display !== false) {
                result.texts.push(d)
            }
        })

        result.item = item

        return result
    }

}

export default MouseLineDataSet