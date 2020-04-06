import DataSet from './DataSet'

import { queryKlineData, resetKlineData } from '../data/index'

class RemoteDataSet extends DataSet {
    constructor(options) {
        super(options)

        var defaults = {}
        this.options = Object.assign(this.options, defaults, options)

        this.$state = {
            fetched: false,
            isAllData: false
        }

        this._data = {
            klineData: [],
            closeData: [],
            highData: [],
            lowData: [],
            chgData: [],
            volumeData: []
        }

        resetKlineData()
    }

    fetchKlineData(options) {
        var self = this
        var { uid, count, mode } = options
        var data

        return new Promise(function(resolve) {
            setTimeout(function() {
                data = queryKlineData(count)
                
                if (data.length < -count) {
                    self.setState('isAllData', true)
                }

                var res = {
                    data, uid, mode
                }

                resolve(res)

                self.setData(data)

                self.emit('data-changed', res)
            })
        })
    }

    slice(startIndex, stopIndex) {
        var data = this._data.klineData.slice(startIndex, stopIndex)
        return data
    }

    setData(data = []) {
        var columns = this.options.columns
        
        this._data.klineData = data.concat(this._data.klineData)

        this._data.klineData.forEach((item, index) => {
            this._data.closeData[index] = item[columns.indexOf("close")]
            this._data.highData[index] = item[columns.indexOf("high")]
            this._data.lowData[index] = item[columns.indexOf("low")]
            this._data.chgData[index] = item[columns.indexOf("chg")]
            this._data.volumeData[index] = item[columns.indexOf("volume")]
        })
    }

    getData(key) {
        return key && this._data[key] ? this._data[key] : this._data.klineData
    }
}

export default RemoteDataSet