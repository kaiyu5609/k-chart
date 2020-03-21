import d3 from 'd3'
import moment from 'moment'
import { 
    floor, 
    measureText, 
    getTimeFormatStr, 
    isDifPeriod
} from '../core/util/index'
import DataSet from './DataSet'

class KlineVolumeDataSet extends DataSet {
    constructor(options) {
        super(options)
        
        var defaults = {}
        
        this.options = Object.assign(this.options, defaults, options)

        this.$scale = {}

        this._data = {
            data: [],

            closeData: [],
            highData: [],
            lowData: [],
            volumeData: [],

            extent: {},
            xData: []
        }
    }

    extent(options) {}

    getScale() {
        return this.$scale.linear
    }

    setScale(options) {
        var { domain, range } = options

        var linear = this.$scale.linear = d3.scaleLinear()
        .domain(domain)
        .range(range)

        return linear
    }

    resetData() {
        for (var key in this._data) {
            if (Array.isArray(this._data[key])) {
                this._data[key].length = 0
            }
        }
        this._data.extent = {}
    }

    setData(data = []) {
        this.resetData()
        this._data.data = data
    }

    getData(key) {
        return key && this._data[key] ? this._data[key] : this._data.data
    }

    getGridData(options, nice = 6) {
        var result = {
            lines: [],
            rects: []
        }

        var data = this.getData()

        if (!data.length) {
            return result
        }

        var { left, figureWidth, figureHeight, stateHeight, stroke, strokeWidth, font } = options

        var span = (figureHeight - stateHeight) / nice

        for (var i = 1; i < nice; i++) {
            result.lines.push({
                points: [
                    left, floor(stateHeight + span * i),
                    floor(left + figureWidth), floor(stateHeight + span * i)
                ],
                stroke: stroke,
                strokeWidth: strokeWidth,
                font: font
            })
        }

        result.rects.push({
            x: left, 
            y: stateHeight,
            width: Math.floor(figureWidth),
            height: Math.floor(figureHeight - stateHeight),
            stroke: stroke,
            strokeWidth: strokeWidth
        })

        return result
    }

    getKlineVolumeData(options, callback) {
        var columns = this.options.columns

        var result = {
            lines: [],
            rects: [],
            texts: []
        }

        var data = this.getData()
        
        if (!data.length) {
            return result
        }

        var { left, kspan, kwidth, stateHeight, figureWidth, figureHeight, sliceType, period, $colors, xAxis } = options

        var closeLineOpts = {
            stroke: $colors.close,
            strokeWidth: 1,
            points: []
        }

        var timeFormatStr = getTimeFormatStr(period)
        
        var timestamp0 = data[0][columns.indexOf('timestamp')]
        var time0 = moment(timestamp0).format(timeFormatStr)
        var timeWidth0 = measureText(time0).width * 2

        data.forEach((item, index) => {
            var timestamp = item[columns.indexOf('timestamp')]
            var time = moment(timestamp).format(timeFormatStr)
            var timeWidth = measureText(time).width
            var open = item[columns.indexOf('open')]
            var close = item[columns.indexOf('close')]
            var volume = item[columns.indexOf('volume')]

            var x = floor((left + index * kspan + kwidth / 2))

            this._data.xData.push(x - left)

            // x轴刻度值
            if (x > timeWidth0 && isDifPeriod(timestamp, timestamp0, period)) {
                timestamp0 = timestamp

                // mainTickLine
                var tickOpts = {
                    stroke: 'rgba(225, 225, 225, 1)',
                    strokeWidth: 1,
                    points: [
                        x, stateHeight,
                        x, figureHeight
                    ]
                }
                result.lines.push(tickOpts)

                // mainTickLabel
                var textLeft = Math.max(x, timeWidth / 2)
                textLeft = Math.min(textLeft, left + figureWidth - timeWidth / 2)

                var textOpts = {
                    x: textLeft - timeWidth / 2,// konva 文字无法居中，这里做了hank
                    y: figureHeight + 4,
                    text: time,
                    fill: $colors.text,
                    fontSize: 11,
                    align: 'center',
                    verticalAlign: 'middle'
                }

                if (xAxis.display) {
                    result.texts.push(textOpts)
                }

                timeWidth0 = textLeft + timeWidth * 2
            }

            var { klineOpts, rectOpts, closeLinePoint } = callback({
                item,
                index,
                x,
                open,
                close,
                volume
            })

            if (klineOpts) {
                result.lines.push(klineOpts)
            }

            if (rectOpts) {
                result.rects.push(rectOpts)
            }

            if (closeLinePoint) {
                closeLineOpts.points = closeLineOpts.points.concat(closeLinePoint)
            }
        })
        
        if (kwidth <= 0) {
            result.lines.push(closeLineOpts)
        }

        return result
    }

    getFillRectData(options) {
        var { left, stateHeight, figureWidth } = options
        var result = {
            rects: []
        }

        var rectOpts = {
            x: left,
            y: 0,
            width: figureWidth,
            height: stateHeight,
            fill: '#f9f9f9'
        }

        result.rects.push(rectOpts)

        return result
    }

}

export default KlineVolumeDataSet