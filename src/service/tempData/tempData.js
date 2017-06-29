/**
 * Created by Jincheng on 2017/6/15.
 */
var applyingData = [
  { id: 1,
    activity_name: '10.18号，新街口春饼店开业，需要鼓手歌手各3名。',
    release_time: '8小时前',
    lasting_time: '10.18-10.19',
    event_location: '新街口商区',
    jobs: '主持',
    price: '800',
    unit: 'person',
    step: 1},
  { id: 2,
    activity_name: '10.19号，钟灵街店庆活动，需要主持、歌手各3名。',
    release_time: '9小时前',
    lasting_time: '10.18-10.19',
    event_location: '钟灵街商区',
    jobs: '歌手',
    price: '900',
    unit: 'person',
    step: 2},
  { id: 3,
    activity_name: '10.20号，下马坊促销活动，需要主持1名，演员2名。',
    release_time: '10小时前',
    lasting_time: '10.18-10.19',
    event_location: '下马坊商区',
    jobs: '主持',
    price: '750',
    unit: 'group',
    step: 3},
  { id: 4,
    activity_name: '10.21号，湖南路活动，需要鼓手歌手各3名。',
    release_time: '11小时前',
    lasting_time: '10.18-10.19',
    event_location: '湖南路商区',
    jobs: '歌手',
    price: '700',
    unit: 'group',
    step: 1},
  { id: 5,
    activity_name: '10.22号，上海路活动，需要鼓手歌手各3名。',
    release_time: '12小时前',
    lasting_time: '10.18-10.19',
    event_location: '上海路商区',
    jobs: '歌手',
    price: '850',
    unit: 'person',
    step: 3},
  { id: 6,
    activity_name: '10.23号，，鼓楼区活动，需要鼓手歌手各3名。',
    release_time: '13小时前',
    lasting_time: '10.18-10.19',
    event_location: '鼓楼区',
    jobs: '歌手',
    price: '1000',
    unit: 'group',
    step: 1}
]

var detailActivity = {
  id: 1,
  acivity_name: '10.23号，，鼓楼区活动，需要鼓手歌手各3名。',
  release_time: '2017-06-01 16:36:10',
  sponsor: 'xxx活动发布者',
  certificate: true,
  start_time: '2017.01.01',
  end_time: '2017.01.03',
  gather_time: ' 2017.01.01',
  gather_location: '新街口德基广场一楼大厅',
  activity_detail: '新街口春饼店开业活动，招募女主持23，民族唱法歌手3名，于2016.10.20 10:00在 新街口德基广场1楼集合，不得迟到。',
  contact: '12222222222',
  subscribe_status: 'successful',
  isSubscribed: true,
  occupations: [
    {
      id: 1,
      occupation: '歌手',
      sex: 'male',
      height: '180+',
      total_number: 3,
      remain_number: 2,
      price: '600',
      unit: 'person',
      requirement: '有实际的演唱经验，有较多的活动的经历，能自带乐器的'
    },
    {
      id: 2,
      occupation: '主持',
      sex: 'female',
      height: '170+',
      total_number: 3,
      remain_number: 2,
      price: '800',
      unit: 'person',
      requirement: '有较多的实际的主持的经验，能应对场上可能发生的各种的意外情况。'
    }
  ]
}

var activities = {data: [
  { id: 1,
    title: '新街口酒吧开业需要歌手',
    release_date: '2017-06-01',
    start_date: '',
    end_date: '',
    sponsor: 'xxx活动发布人1',
    certificate: true,
    price: '700',
    description: ''
  },
  { id: 1,
    title: '湖南路餐厅活动',
    release_date: '2017-06-01',
    start_date: '',
    end_date: '',
    sponsor: 'xxx活动发布人2',
    certificate: false,
    price: '800',
    description: ''
  },
  { id: 1,
    title: '夫子庙活动',
    release_date: '2017-06-01',
    start_date: '',
    end_date: '',
    sponsor: 'xxx活动发布人3',
    certificate: false,
    price: '600',
    description: ''
  }
]}

var identity = {id: '1', token: 'asdasdasdasdtoke='}

export {applyingData, detailActivity, activities, identity}
