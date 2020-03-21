import d3 from 'd3'
import moment from 'moment'
import { 
    floor, 
    measureText 
} from '../core/util/index'
import KlineVolumeDataSet from './KlineVolumeDataSet'
import MouseLineDataSet from './MouseLineDataSet'

class VolumeDataSet extends KlineVolumeDataSet {
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
            this._data.volumeData[index] = item[columns.indexOf("volume")]
        })
    }
    
    extent() {
        var volumeData = this.getData('volumeData')

        // console.log(volumeData)

        var maxVal = d3.max(volumeData)
        var minVal = 0

        this._data.extent = {
            max: maxVal,
            min: minVal
        }

        return [minVal, maxVal]
    }

    getGridData(options) {
        return super.getGridData(options, 2)
    }

    getVrectData(options) {
        var columns = this.options.columns

        var { left, kspan, kwidth, stateHeight, figureWidth, figureHeight, sliceType, period, $colors, xAxis } = options

        var scaleLinear = this.getScale()

        return this.getKlineVolumeData(options, (data) => {
            var { item, index, x, open, close, volume } = data

            var result = {}

            var opts = {}
            opts.strokeWidth = 1
            if (open <= close) {
                opts.stroke = $colors.red
            } else if (open > close) {
                opts.stroke = $colors.green
            } 
            if (open == close && data[index - 1]) {
                opts.stroke = close >= data[index - 1][columns.indexOf('close')] ? $colors.red : $colors.green
            }

            // 绘制k线的body
            var rectOpts = {
                x: floor(left + index * kspan),
                y: floor(scaleLinear(volume)),
                width: floor(kwidth),
                height: figureHeight - floor(scaleLinear(volume))
            }

            var rectFill = sliceType 
                ? $colors.red 
                : kwidth <= 0 
                    ? $colors.red 
                    : '#fff'

            if (open <= close) {
                rectOpts.fill = rectFill
            } else {
                rectOpts.fill = $colors.green
            }

            if (open == close && data[index - 1]) {
                rectOpts.fill = close >= data[index - 1][columns.indexOf('close')] ? rectFill : $colors.green
            }

            result.rectOpts = Object.assign({}, opts, rectOpts)

            return result
        })
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

        var span = (figureHeight - stateHeight) / 2

        // 最高刻度值
        var text = this.parseVolume(extent.max)
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

        for (var i = 1; i < 2; i++) {
            text = (extent.max - (span * i) / (figureHeight - stateHeight) * (extent.max - extent.min))
            text = this.parseVolume(text)
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
        text = Number(extent.min).toFixed(2)
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

    getMouseLineData(options) {
        return this.mouseLine.getMouseLineData(options)
    }
}

export default VolumeDataSet