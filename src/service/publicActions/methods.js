/**
 * Created by Jincheng on 2017/7/3.
 */
var formatTime, formatJobs, getDateDiff, getTimes

formatTime = () => {

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

export {formatTime, formatJobs, getDateDiff, getTimes}
