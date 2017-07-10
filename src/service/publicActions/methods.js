/**
 * Created by Jincheng on 2017/7/3.
 */
var formatTime, fillZero, formatJobs, getDateDiff, getTimes, getContact

formatTime = (date, format) => {
  let tagArr = 'YYYY-MM-DD-hh-mm-ss'.split('-')
  date = date ? new Date(date) : new Date()
  format = format || 'YYYY年MM月DD日 hh:mm:ss'
  let year = date.getFullYear()
  let month = fillZero(date.getMonth() + 1)
  let day = fillZero(date.getDate())
  let hour = fillZero(date.getHours())
  let minute = fillZero(date.getMinutes())
  let second = fillZero(date.getSeconds())
  let param = [year, month, day, hour, minute, second]
  return param.reduce(function (accumate, val, index) {
    return accumate.split(tagArr[index]).join(val)
  }, format)
}

fillZero = (val) => {
  var temp = Number(val), res
  if (isNaN(temp)) {
    throw Error('error: value type is not number')
  } else {
    if (temp < 10) {
      res = '0' + temp
    } else {
      res = temp.toString()
    }
  }
  return res
}

// 根据英文的职位转换为相应的中文的数组
formatJobs = (arr) => {
  let jobList = {
    'singer': '歌手',
    'dancer': '舞蹈',
    'host': '主持',
    'violinist': '小提琴手',
    'guitarist': '吉他手',
    'drummer': '鼓手'
  }
  let returnArr = []
  arr.forEach((val, index) => {
    if (jobList[val]) {
      returnArr.push(jobList[val])
    }
  })
  return returnArr
}

// 获取指定时区的时间戳
getTimes = (timeZone) => {
  let nowZone = new Date().getTimezoneOffset() / 60
  let zoneDiff = -(-timeZone - nowZone)
  let nowTime = +new Date()
  let finalTime = +new Date(nowTime + zoneDiff * 60 * 60 * 1000)
  return finalTime
}

// 将时间转换为多少之前，传入的参数为时间戳格式的数据
getDateDiff = (time) => {
  let minute = 60 * 1000
  let hour = minute * 60
  let day = hour * 24
  let week = day * 7
  let month = day * 30
  let year = month * 12
  let diffValue = getTimes(8) - time
  let cYear = parseInt(diffValue / year)
  let cMonth = parseInt(diffValue / month)
  let cWeek = parseInt(diffValue / week)
  let cDay = parseInt(diffValue / day)
  let cHour = parseInt(diffValue / hour)
  let cMinute = parseInt(diffValue / minute)
  let result = ''
  if (cYear > 0) {
    result = cYear + '年前'
  } else if (cMonth > 0) {
    result = cMonth + '月前'
  } else if (cWeek > 0) {
    result = cWeek + '周前'
  } else if (cDay > 0) {
    result = cDay + '天前'
  } else if (cHour > 0) {
    result = cHour + '小时前'
  } else if (cMinute > 0) {
    result = cMinute + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

// 在展示联系方式时，将对应的英文转换为中文
getContact = (text) => {
  let list = {
    'phone': '手机',
    'wechat': '微信'
  }
  if (!text) {
    console.log('getContact do not get params')
    return
  }
  if (list[text]) {
    return list[text]
  } else {
    return 'Can not translate this to chinese'
  }
}

export {formatTime, fillZero, formatJobs, getDateDiff, getTimes, getContact}
