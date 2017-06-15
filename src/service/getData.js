/**
 * Created by Jincheng on 2017/5/12.
 */
import fetch from '../configs/fetch'

import * as localData from './tempData/tempData'

// 创建本地数据，构造假数据
const setPromise = (data) => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
const isLocal = true
var getProduct, getUser, getActivity, getApplying

if (!isLocal) {
  getProduct = () => fetch('GET', '', {})

  getUser = () => fetch('GET', '/v1/user/', {})

  getActivity = () => fetch('GET', 'v1/activity/', {})
} else {
  getProduct = () => fetch('GET', '', {})

  getUser = () => fetch('GET', '/v1/user/', {})

  getActivity = () => fetch('GET', 'v1/activity/', {})

  getApplying = () => setPromise(localData.applyingData)
}

export {getProduct, getUser, getActivity, getApplying}
