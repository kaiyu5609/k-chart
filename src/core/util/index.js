export var measureText = (function() {
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')

    return (text, fontSize = 11) => {
        ctx.font = '11px "Helvetica"'
        return ctx.measureText(text)
    }
})()

export function ma(data, ma) {
    if (ma === 0) {
        ma = 5
    }

    var res = []

    data.forEach((item, index) => {
        if (index < ma) {
            res[index] = undefined
        } else {
            for (var i = 0, j = 0; j < ma; j++) {
                i += data[index - j]
            }
            res[index] = i / ma
        }
    })

    return res
}

export function getTimeFormatStr(v) {
    var timeFormatStr = "YYYY-MM"
    
    if (["day", "week", "month", "quarter", "year"].indexOf(v) > -1) {
        timeFormatStr = "YYYY-MM"
    } else if (["15m", "30m", "60m", "120m"].indexOf(v) > -1) {
        timeFormatStr = "MM-DD"
    } else if (["1m", "5m"].indexOf(v) > -1) {
        timeFormatStr = "HH:mm"
    }

    return timeFormatStr
}

export function floor(v) {
    return Math.floor(v) + .5
}

export function parseVolume(val) {
    if (null === val) {
        return '--'
    }

    var num = parseInt(val, 10), _val = val

    if (num < 1e5) {
        return num
    }

    for (var i = 0; _val > 1e4 && i < 3; ) {
        _val /= 1e4
        i += 1
    }

    var n = (num = Math.round(100 * _val) / 100).toString(), r = n.indexOf('.')

    for (r < 0 && (r = n.length, n += '.'); n.length <= r + 2; ) {
        n += '0'
    }

    return num + ['', '万', '亿', '万亿'][i]
}

export function parseAmount(val, toFixed = 2) {
    return null == val || Number.isNaN(val) 
        ? '-' 
        : val / 1e4 > 1 && val / 1e4 < 1e4 
            ? ''.concat((val / 1e4).toFixed(2), '万') 
            : val / 1e4 >= 1e4 
                ? ''.concat((val / 1e8).toFixed(2), '亿') 
                : val.toFixed(toFixed)
}

export function isDifPeriod(timestamp, timestamp0, period) {
    var date = new Date(timestamp), date0 = new Date(timestamp0)

    var periods = ['day', 'week', 'month', 'quarter', 'year']
    var minutes1 = ['15m', '30m', '60m', '120m']
    var minutes2 = ['1m', '5m']

    if (
        periods.indexOf(period) > -1 && date.getMonth() !== date0.getMonth() || 
        minutes1.indexOf(period) > -1 && date.getDay() !== date0.getDay() || 
        minutes2.indexOf(period) > -1 && date.getHours() !== date0.getHours() && 0 === date.getMinutes()
    ) {
        return true
    }

    return false
}
