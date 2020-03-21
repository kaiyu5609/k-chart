import d3 from 'd3'
import moment from 'moment'
import { 
    floor, 
    measureText, 
    ma, 
    parseAmount 
} from '../core/util/index'
import KlineVolumeDataSet from './KlineVolumeDataSet'
import MouseLineDataSet from './MouseLineDataSet'

class KlineDataSet extends KlineVolumeDataSet {
    constructor(options) {
        super(options)

        var defaults = {}

        this.options = Object.assign(this.options, defaults, options)

        this.mouseLine = new MouseLineDataSet(this, this.options)
    }

    setData(data = []) {
        var columns = this.options.columns

        super.setData(data)

        this._data.data.forEach((item, index) => {
            this._data.closeData[index] = item[columns.indexOf("close")]
            this._data.highData[index] = item[columns.indexOf("high")]
            this._data.lowData[index] = item[columns.indexOf("low")]
        })
    }

    extent(options) {
        var self = this
        
        var { maList, activeMa, kwidth, startIndex, stopIndex, figureHeight, stateHeight, paddingY } = options
        
        var closeMaxData = []
        var closeMinData = []

        maList.forEach((maItem) => {
            if (activeMa[maItem]) {
                // `注意`：需要从所有的收盘价中计算均线
                var allCloseData = ma(this.allDataSet.getData('closeData'), Number(maItem.replace(/[^\d]/g, "")))
                var closeData = allCloseData.slice(startIndex, stopIndex)
                closeMaxData.push(d3.max(closeData))
                closeMinData.push(d3.min(closeData))
            }
        })

        var highVal = d3.max(this.getData('highData'))
        var lowVal = d3.min(this.getData('lowData'))

        closeMaxData.push(highVal)
        closeMinData.push(lowVal)

        var maxVal = d3.max(closeMaxData)
        var minVal = d3.min(closeMinData)

        if (maxVal === minVal) {
            minVal = .99 * minVal
        }

        var phigh = maxVal + (maxVal - minVal) / (figureHeight - stateHeight - 2 * paddingY) * paddingY
        var plow = minVal - (maxVal - minVal) / (figureHeight - stateHeight - 2 * paddingY) * paddingY

        this._data.extent = {
            high: highVal,
            low: lowVal,
            max: maxVal,
            min: minVal,
            phigh: phigh,
            plow: plow
        }

        return [minVal, maxVal]
    }
    
    getGridData(options) {
        return super.getGridData(options)
    }

    getKlineData(options) {
        var columns = this.options.columns

        var { left, kspan, kwidth, stateHeight, figureWidth, figureHeight, sliceType, period, $colors, xAxis } = options

        var scaleLinear = this.getScale()

        return this.getKlineVolumeData(options, (data) => {
            var { item, index, x, open, close } = data

            var result = {}

            var opts = {}
            // 绘制k线的中线
            var klineOpts = {}

            if (kwidth > 0) {
                opts.strokeWidth = 1
                if (open <= close) {
                    opts.stroke = $colors.red
                } else if (open > close) {
                    opts.stroke = $colors.green
                } 
                if (open == close && data[index - 1]) {
                    opts.stroke = close >= data[index - 1][columns.indexOf('close')] ? $colors.red : $colors.green
                }

                klineOpts.points = [
                    x, floor(scaleLinear(item[columns.indexOf("high")])),
                    x, floor(scaleLinear(open)),
                    x, floor(scaleLinear(item[columns.indexOf("low")])),
                    x, floor(scaleLinear(close))
                ]
                
                result.klineOpts = Object.assign({}, opts, klineOpts)
            }

            // 绘制k线的body
            var rectOpts = {
                x: floor(left + index * kspan),
                y: floor(scaleLinear(Math.max(open, close))),
                width: floor(kwidth),
                height: floor(Math.abs(scaleLinear(open) - scaleLinear(close)))
            }

            var rectFill = sliceType ? $colors.red : '#fff'

            if (kwidth > 1) {
                if (open <= close) {
                    rectOpts.fill = rectFill
                } else {
                    rectOpts.fill = $colors.green
                }

                if (open == close && data[index - 1]) {
                    rectOpts.fill = close >= data[index - 1][columns.indexOf('close')] ? $colors.red : $colors.green
                }

                result.rectOpts = Object.assign({}, opts, rectOpts)
            }

            if (kwidth <= 0) {
                result.closeLinePoint = [ 
                    x, floor(scaleLinear(item[columns.indexOf("close")]))
                ]
            }

            return result
        })
    }

    getMaLineData(options) {
        var result = {
            lines: [],
            texts: [],
            maPosition: []
        }

        var data = this.getData()
        
        if (!data.length) {
            return result
        }

        var { left, maList, maLineType, activeMa, kspan, kwidth, stateHeight, $colors, startIndex, stopIndex, currentIndex } = options

        var scaleLinear = this.getScale()

        var maLineTypeName = maLineType == null || kwidth <= 0 ? '选择指标' : '均线'
        var maLineTypeNameWidth = measureText(maLineTypeName).width
        var maLineTypeNameLeft = maLineTypeNameWidth + 5

        result.texts.push({
            x: left,
            y: floor((stateHeight - 11) / 2),
            text: maLineTypeName,
            fill: $colors.text,
            fontSize: 11,
            align: 'left',
            verticalAlign: 'middle'
        })

        if (kwidth <= 0 || maLineType == null) {
            return result
        }

        maList.forEach((maItem) => {
            var i = !1
            var maDays = Number(maItem.replace(/[^\d]/g, ''))

            // `注意`：需要从所有的收盘价中计算均线
            var allCloseData = ma(this.allDataSet.getData('closeData'), maDays)
            var closeData = allCloseData.slice(startIndex, stopIndex)

            var maKeyVal = maItem.toLocaleUpperCase() + ':' + parseAmount(closeData[currentIndex])
            var maKeyValWidth = measureText(maKeyVal).width

            if (activeMa[maItem]) {
                var lineOpts = {
                    ma: maDays,
                    stroke: $colors[maItem],
                    strokeWidth: 1,
                    points: []
                }
                closeData.forEach((d, i) => {
                    if (scaleLinear(d)) {
                        lineOpts.points.push(
                            left + i * kspan + kwidth / 2, scaleLinear(d),
                            left + i * kspan + kwidth / 2, scaleLinear(d)
                        )
                    }
                })
                result.lines.push(lineOpts)
            }

            var textOpts = {
                x: left + maLineTypeNameLeft,
                y: floor((stateHeight - 11) / 2),
                text: maKeyVal,
                fill: activeMa[maItem] ? $colors[maItem] : $colors[maItem + '_o'],
                fontSize: 11,
                align: 'left',
                verticalAlign: 'middle'
            }

            result.texts.push(textOpts)

            maLineTypeNameLeft += maKeyValWidth + 5

            result.maPosition.push(maLineTypeNameLeft)
        })

        return result
    }

    getYTickData(options) {
        var result = {
            texts: []
        }

        var data = this.getData()

        if (!data.length) {
            return result
        }

        var { left, figureHeight, stateHeight, $colors } = options

        var extent = this.getData('extent')

        var span = (figureHeight - stateHeight) / 6

        // 最高刻度值
        var text = Number(extent.phigh).toFixed(2)
        var xText = left ? left - measureText(text).width - 2 : 1

        result.texts.push({
            x: xText,
            y: floor(stateHeight),
            text: text,
            fill: $colors.text,
            fontSize: 11,
            align: 'left',
            verticalAlign: 'top'
        })

        for (var i = 1; i < 6; i++) {
            text = Number((extent.phigh - (span * i) / (figureHeight - stateHeight) * (extent.phigh - extent.plow))).toFixed(2)
            xText = left ? left - measureText(text).width - 2 : 1

            result.texts.push({
                x: xText,
                y: floor(stateHeight + span * i) - 5,
                text: text,
                fill: $colors.text,
                fontSize: 11,
                align: 'left',
                verticalAlign: 'middle'
            })
        }

        // 最低刻度值
        text = Number(extent.plow).toFixed(2)
        xText = left ? left - measureText(text).width - 2 : 1

        result.texts.push({
            x: xText,
            y: floor(figureHeight) - 10,
            text: text,
            fill: $colors.text,
            fontSize: 11,
            align: 'left',
            verticalAlign: 'bottom'
        })

        return result
    }

    getExtentTipData(options) {
        var result = {
            lines: [],
            texts: []
        }

        var data = this.getData()
        
        if (!data.length) {
            return result
        }

        var columns = this.options.columns
        
        var scaleLinear = this.getScale()

        var { left, kspan, kwidth, figureWidth, $colors } = options

        if (kwidth <= 0) {
            return result
        }

        var extentList = ['high', 'low']

        extentList.forEach(name => {
            var dataIndex = data.map(item => item[columns.indexOf(name)]).lastIndexOf(this._data.extent[name])

            var x = left + floor(dataIndex * kspan + kwidth / 2)
            var y = scaleLinear(this._data.extent[name])
            var displayReverse = x > figureWidth / 2 

            result.lines.push({
                stroke: $colors.text,
                strokeWidth: 1,
                points: [
                    x, y,
                    x + (displayReverse ? -12 : 16), y
                ]
            })

            result.texts.push({
                x: x + (displayReverse ? -38 : 16),
                y: y - 4,
                text: Number(this._data.extent[name]).toFixed(2),
                fill: $colors.text,
                fontSize: 11,
                align: displayReverse ? 'right' : 'left',
                verticalAlign: 'middle'
            })
        })

        return result
    }

    getMouseLineData(options) {
        return this.mouseLine.getMouseLineData(options)
    }

}

export default KlineDataSet