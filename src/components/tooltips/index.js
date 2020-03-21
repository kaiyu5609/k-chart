import $ from 'jquery'
import { parseVolume, parseAmount } from '../../core/util/index'

class ToolTips {
    constructor(context, options = {}) {
        const defaults = {}
        options = this.$options = Object.assign({}, defaults, options)
        this.context = context
        this.$elements = {}

        this._init()
    }
    _init() {
        var options = this.$options
        var $tooltips = this.$elements.$tooltips = this.$elements.$tooltips || $('<div/>')

        $tooltips.attr('id', 'k-tooltips')
        $tooltips.css({
            position: 'absolute',
            top: options.stateHeight
        })

        if (this.context.$elements.$el) {
            this.context.$elements.$el.append($tooltips)
        }
    }

    getColor(val, lastClose, opacity = 1) {
        var $colors = this.context.$colors

        return (val - lastClose) * opacity < 0 
                ? $colors.green 
                : (val - lastClose) * opacity > 0 
                    ? $colors.red 
                    : $colors.text
    }

    parseVolume(val = 0, quoteLotSize = 100, quoteType = 11, flag = true) {
        if (null === val) {
            return '--'
        }

        var num = val

        num = [11, 12, 13, 14, 15, 17, 60, 61, 81].indexOf(+quoteType) > -1 
            ? ''.concat(parseVolume(val / quoteLotSize), '手') 
            : [30, 31, 32, 33, 34, 0, 3, 4, 5, 6, 7, 26, 27, 28, 8, 35].indexOf(+quoteType) > -1 
                ? ''.concat(parseVolume(val), '股') 
                : parseVolume(val)
        
        return flag ? num : parseFloat(num)
    }

    getTooltips(item) {
        if (!item.display) {
            return ''
        }
        return `<ul class="overlay">
            <li>
                <span>时间</span>
                <span>${item.time}</span>
            </li>
            <li>
                <span>开盘价</span>
                <span style="color: ${this.getColor(item.open, item.lastClose)};">${item.open.toFixed(2)}</span>
            </li>
            <li>
                <span>最高价</span>
                <span style="color: ${this.getColor(item.high, item.lastClose)};">${item.high.toFixed(2)}</span>
            </li>
            <li>
                <span>最低价</span>
                <span style="color: ${this.getColor(item.low, item.lastClose)};">${item.low.toFixed(2)}</span>
            
            </li>
            <li>
                <span>收盘价</span>
                <span style="color: ${this.getColor(item.close, item.lastClose)};">${item.close.toFixed(2)}</span>
            </li>
            <li>
                <span>涨跌额</span>
                <span style="color: ${this.getColor(item.close, item.lastClose)};">${item.chg.toFixed(2)}</span>
            </li>
            <li>
                <span>涨跌幅</span>
                <span style="color: ${this.getColor(item.close, item.lastClose)};">${item.percent.toFixed(2)}%</span>
            </li>
            <li>
                <span>成交量</span>
                <span>${this.parseVolume(item.volume)}</span>
            </li>
            <li>
                <span>成交额</span>
                <span>${parseAmount(item.amount)}</span>
            </li>
                <li>
                <span>换手率</span>
                <span>${item.turnoverrate.toFixed(2)}%</span>
            </li>
        </ul>`
    }

    setData(data) {
        if (!data) {
            this.$elements.$tooltips.html('')
            return 
        }

        var tooltips = this.getTooltips(data)
        this.$elements.$tooltips.html(tooltips)

        if (data.left !== null) {
            this.$elements.$tooltips.css('left', data.left)
        } else {
            this.$elements.$tooltips.css('left', '')
        }
        if (data.right !== null) {
            this.$elements.$tooltips.css('right', data.right)
        } else {
            this.$elements.$tooltips.css('right', '')
        }
    }
}

export default ToolTips