import EventEmitter from 'events'
import { parseVolume, parseAmount, floor, measureText } from '../core/util/index'

class DataSet extends EventEmitter { 
    constructor(options = {}) {
        super()
        
        var defaults = {}
        
        this.options = Object.assign({}, defaults, options)
        
        this.$state = {}

        this.$scale = {}

        this.allDataSet = this.options.allDataSet
    }

    getState(key) {
        return this.$state[key]
    }

    setState(key, val) {
        this.$state[key] = val
    }

    parseVolume(val = 0, quoteLotSize = 100, quoteType = 11, flag = true) {
        if (null === val) {
            return '--'
        }

        var num = val

        num = [11, 12, 13, 14, 15, 17, 60, 61, 81].indexOf(+quoteType) > -1 
            ? ''.concat(parseVolume(val / quoteLotSize)) 
            : [30, 31, 32, 33, 34, 0, 3, 4, 5, 6, 7, 26, 27, 28, 8, 35].indexOf(+quoteType) > -1 
                ? ''.concat(parseVolume(val), '股') 
                : parseVolume(val)
        
        return flag ? num : parseFloat(num)
    }

    parseAmount(val = 0, quoteLotSize = 100, quoteType = 11, flag = true) {
        if (null === val) {
            return '--'
        }

        var num = val

        num = [11, 12, 13, 14, 15, 17, 60, 61, 81].indexOf(+quoteType) > -1 
            ? ''.concat(parseAmount(val / quoteLotSize)) 
            : parseAmount(val)

        return flag ? num : parseFloat(num)
    }
}

export default DataSet