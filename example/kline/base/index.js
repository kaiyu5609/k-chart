import kchart from 'kchart'
import 'kchart.css'

console.log('kchart', kchart)

window.KChart = window.KChart || {}

const {
    Kline,
    KlineDataSet,
    RemoteDataSet,
    VolumeDataSet,
    Volume
} = kchart



const CHART_DEFAULT_WIDTH = 640

var $body = $('body')
var $chartContainer = $('.chart-container')
var $toolbar = $('.toolbar')
var $toolbarBtns = $toolbar.find('.btn')
var $btnFullSize = $('#fullsize')

var isMobile = false

var $toolbarStyle1 = {
    top: 2
}

var $toolbarStyle2 = {
    top: 21
}

var $toolbarBtnStyle1 = {
    'background-color': '#eee'
}

var $toolbarBtnStyle2 = {
    'background-color': 'rgba(238, 238, 238, .5)'
}

if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    isMobile = true
    $toolbar.css($toolbarStyle2)
    $toolbarBtns.css($toolbarBtnStyle2)
    $btnFullSize.hide()
}


function createKChart(chartWidth) {
    $chartContainer.width(chartWidth)

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
        width: chartWidth,
        kwidth: isMobile ? 4 : 6,
        // left: 45,
        // mouseLineType: true,
        allDataSet: remoteDataSet,
        dataSet: kDataSet
    })
    
    var volume = new Volume({
        el: '#volume',
        width: chartWidth,
        kwidth: isMobile ? 4 : 6,
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

}


createKChart(isMobile ? 0.95 * innerWidth : CHART_DEFAULT_WIDTH)


$btnFullSize.on('click touchstart', function() {
    var isFullSize = $body.hasClass('full-chart')
    var chartWidth 

    if (isFullSize) {
        chartWidth = CHART_DEFAULT_WIDTH
        $btnFullSize.text('全屏显示')
        $body.removeClass('full-chart')
    } else {
        chartWidth = 0.95 * innerWidth
        $btnFullSize.text('退出全屏')
        $body.addClass('full-chart')
    }

    setTimeout(() => {
        createKChart(chartWidth)
    }, 0)
})


// 监听屏幕方向
window.onorientationchange = function() {
    var chartWidth = 0.95 * innerWidth

    createKChart(chartWidth)

    switch (window.orientation) { 
        case -90: 
        case 90: 
            $toolbar.css($toolbarStyle1)
            $toolbarBtns.css($toolbarBtnStyle1)
            break
        case 0: 
        case 180: 
            $toolbar.css($toolbarStyle2)
            $toolbarBtns.css($toolbarBtnStyle2)
            break
    } 
}