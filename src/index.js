import Kline from './components/kline/index'
import Volume from './components/volume/index'

import KlineDataSet from './dataset/KlineDataSet'
import RemoteDataSet from './dataset/RemoteDataSet'
import VolumeDataSet from './dataset/VolumeDataSet'

import './index.scss'

export default {
    version: '__VERSION__',
    Kline,
    Volume,
    
    KlineDataSet,
    RemoteDataSet,
    VolumeDataSet
}