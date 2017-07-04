/**
 * Created by Jincheng on 2017/7/3.
 */
var formatTime, formatJobs

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

export {formatTime, formatJobs}
