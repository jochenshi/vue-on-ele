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
var getProduct, getUser, getActivity, getApplying, getDetailActivity, getIdentity, login, getReviews, getInfo, setInfo,
  handleSign, confirmApply, getGoingActivity, getFinishedActivity, getCertainActivity, getMessage

if (!isLocal) {
  getProduct = () => fetch('GET', '', {})

  getUser = () => fetch('GET', '/v1/user/', {})

  getActivity = () => fetch('GET', '/v1/activity/', {})

  getInfo = () => fetch('GET', '/v1/personalInfo', {})

  setInfo = (data) => fetch('POST', '/v1/personalInfo', data)

  handleSign = (data) => fetch('POST', '/v1/sign', data)

  confirmApply = (data) => fetch('POST', '/v1/confirmApply', data)

  getGoingActivity = () => setPromise(localData.applyingData)

  getFinishedActivity = () => setPromise(localData.applyingData)
} else {
  getProduct = () => fetch('GET', '', {})

  getUser = () => fetch('GET', '/v1/user/', {})

  getActivity = () => setPromise(localData.activities)

  getApplying = () => setPromise(localData.applyingData)

  getDetailActivity = () => setPromise(localData.detailActivity)

  getIdentity = () => setPromise(localData.identity)

  login = (data) => fetch('POST', '/v1/login', data)

  getReviews = () => setPromise(localData.reviewActivity)

  getInfo = () => fetch('GET', '/v1/personalInfo', {})

  setInfo = (data) => fetch('POST', '/v1/personalInfo', data)

  handleSign = (data) => fetch('POST', '/v1/sign', data)

  confirmApply = (data) => fetch('POST', '/v1/confirmApply', data)

  getGoingActivity = () => setPromise(localData.applyingData)

  getFinishedActivity = () => setPromise(localData.applyingData)

  getCertainActivity = () => setPromise(localData.certainGoActivity)

  getMessage = (useId, pageId) => setPromise(localData.myMessage)
}

export {getProduct, getUser, getActivity, getApplying, getDetailActivity, getIdentity, login, getReviews, getInfo, setInfo, handleSign, confirmApply,
getGoingActivity, getFinishedActivity, getCertainActivity, getMessage}
