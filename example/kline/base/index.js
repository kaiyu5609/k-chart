import kchart from 'kchart'
import 'kchart.css'

console.log('kchart', kchart)

const {
    Kline,
    KlineDataSet,
    RemoteDataSet,
    VolumeDataSet,
    Volume
} = kchart


var columns = [
    "timestamp", // 时间
    "open", // 开
    "high", // 高
    "low", // 低
    "close", // 收
    "volume", // 成交量
    "amount", // 成交额
    "chg", // 涨跌额
    "percent", // 涨跌幅
    "turnoverrate", // 换手率
]

var remoteDataSet = new RemoteDataSet({
    columns: columns
})

var kDataSet = new KlineDataSet({
    columns: columns,
    allDataSet: remoteDataSet
})

var vDataSet = new VolumeDataSet({
    columns: columns,
    allDataSet: remoteDataSet
})

var kline = new Kline({
    el: '#chart',
    // left: 45,
    // mouseLineType: true,
    allDataSet: remoteDataSet,
    dataSet: kDataSet
})

var volume = new Volume({
    el: '#volume',
    allDataSet: remoteDataSet,
    dataSet: vDataSet,
    // autoFetchData: false,
    tooltips: false
})

kline.connect(volume)
volume.connect(kline)

console.log('kline', kline)
console.log('volume', volume)


// setTimeout(() => {
setInterval(() => {
    // kline.$options.sliceType = 'fill'
    // kline.update()

    // kline.moveChart(-1)
}, 1000)



var $toolbar = $('.toolbar')
var $btnZoomBack = $('#zoom-back')
var $btnZoomOut = $('#zoom-out')
var $btnZoomIn = $('#zoom-on')
var $btnWalkLeft = $('#walk-left')
var $btnWalkRight = $('#walk-right')
var $btnSliceType = $('#slice-type')

setTimeout(() => {
    $toolbar.show()
})

$btnZoomBack.on('click', function() {
    kline.resetScaleChart()
})
$btnZoomOut.on('click', function() {
    kline.scaleChart(1)
})
$btnZoomIn.on('click', function() {
    kline.scaleChart(-1)
})
$btnWalkLeft.on('click', function() {
    kline.moveChartWithMouseLine(-1)
})
$btnWalkRight.on('click', function() {
    kline.moveChartWithMouseLine(1)
})
$btnSliceType.on('click', function() {
    kline.$options.sliceType = !kline.$options.sliceType
    volume.$options.sliceType = !volume.$options.sliceType

    kline.update()
    volume.update()
})

pressBtn($btnZoomOut, function() {
    kline.scaleChart(5)
})
pressBtn($btnZoomIn, function() {
    kline.scaleChart(-5)
})
pressBtn($btnWalkLeft, function() {
    kline.moveChartWithMouseLine(-5)
})
pressBtn($btnWalkRight, function() {
    kline.moveChartWithMouseLine(5)
})


function pressBtn(el, callback) {
    var timer = 0

    el.on('mousedown touchstart', function() {
        timer = setInterval(callback, 200)
    })

    el.on('mouseup touchend', function() {
        clearInterval(timer)
    })
}