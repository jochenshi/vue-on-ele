/**
 * Created by Jincheng on 2017/5/12.
 */
// 自行封装的请求
const baseUrl = ''
export default (type = 'GET', url = '', data = {}) => {
  type = type.toUpperCase()
  url = baseUrl + url

  if (type === 'GET') {
    // 拼接GET请求的参数，如果有的情况下
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }
  let requestObj
  if (window.XMLHttpRequest) {
    requestObj = new XMLHttpRequest()
  } else {
    alert('Sorry, your browser does not support this request!')
    return false
  }
  let sendData
  if (type === 'POST') {
    sendData = JSON.stringify(data)
  }
  let promise = new Promise((resolve, reject) => {
    requestObj.open(type, url, true)
    requestObj.send(sendData)
    // requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          let obj = requestObj.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj)
            console.log('This is from fetch', obj)
          }
          resolve(obj)
        } else {
          reject(new Error(requestObj))
        }
      }
    }
  })
  return promise
}
