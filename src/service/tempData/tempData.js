/**
 * Created by Jincheng on 2017/6/15.
 */
var applyingData = [
  { id: 1,
    title: '10.18号，新街口春饼店开业，需要鼓手歌手各3名。',
    release_time: 1499310715273,
    lasting_time: '10.18-10.19',
    activity_place: '新街口商区',
    jobs: '主持',
    price: '800',
    unit: 'person',
    step: 1,
    certificate: true,
    sponsor: 'xxx演艺活动公司'
  },
  { id: 2,
    title: '10.19号，钟灵街店庆活动，需要主持、歌手各3名。',
    release_time: 1499310715273,
    lasting_time: '10.18-10.19',
    activity_place: '钟灵街商区',
    jobs: '歌手',
    price: '900',
    unit: 'person',
    step: 2,
    certificate: false,
    sponsor: 'xxx演艺活动公司'
  },
  { id: 3,
    title: '10.20号，下马坊促销活动，需要主持1名，演员2名。',
    release_time: 1499237307822,
    lasting_time: '10.18-10.19',
    activity_place: '下马坊商区',
    jobs: '主持',
    price: '750',
    unit: 'group',
    step: 3,
    certificate: true,
    sponsor: 'xxx演艺活动公司'
  },
  { id: 4,
    title: '10.21号，湖南路活动，需要鼓手歌手各3名。',
    release_time: 1499237307822,
    lasting_time: '10.18-10.19',
    activity_place: '湖南路商区',
    jobs: '歌手',
    price: '700',
    unit: 'group',
    step: 1,
    certificate: true,
    sponsor: 'xxx演艺活动公司'
  },
  { id: 5,
    title: '10.22号，上海路活动，需要鼓手歌手各3名。',
    release_time: 1499237307822,
    lasting_time: '10.18-10.19',
    activity_place: '上海路商区',
    jobs: '歌手',
    price: '850',
    unit: 'person',
    step: 3,
    certificate: false,
    sponsor: 'xxx演艺活动公司'
  },
  { id: 6,
    title: '10.23号，，鼓楼区活动，需要鼓手歌手各3名。',
    release_time: 1499237307822,
    lasting_time: '10.18-10.19',
    activity_place: '鼓楼区',
    jobs: '歌手',
    price: '1000',
    unit: 'group',
    step: 1,
    certificate: true,
    sponsor: 'xxx演艺活动公司'
  }
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
    release_time: 1499237307822,
    start_date: '',
    end_date: '',
    sponsor: 'xxx活动发布人1',
    certificate: true,
    price: '700',
    price_unit: 'person',
    jobs: ['singer', 'dancer', 'drummer', 'guitarist', 'violinist']
  },
  { id: 1,
    title: '湖南路餐厅活动',
    release_time: 1499237307822,
    start_date: '',
    end_date: '',
    sponsor: 'xxx活动发布人2',
    certificate: false,
    price: '800',
    price_unit: 'person',
    jobs: ['singer', 'dancer', 'drummer', 'guitarist', 'violinist']
  },
  { id: 1,
    title: '夫子庙活动',
    release_time: 1499237307822,
    start_date: '',
    end_date: '',
    sponsor: 'xxx活动发布人3',
    certificate: false,
    price: '600',
    price_unit: 'person',
    jobs: ['singer', 'dancer', 'drummer', 'guitarist', 'violinist']
  }
]}

var identity = {id: '1', token: 'asdasdasdasdtoke='}

var login = {
  id: '1',
  token: 'asdasdasdasdsad22='
}

var reviewActivity = [
  {
    id: 1,
    activity_name: '10.23号，，鼓楼区活动，需要鼓手歌手各3名。',
    sponsor: 'xxx活动发布者1',
    release_time: '2017-06-01 16:36:10',
    activity_detail: '新街口春饼店开业活动，招募女主持23，民族唱法歌手3名，于2016.10.20 10:00在 新街口德基广场1楼集合，不得迟到。'
  }
]

var certainGoActivity = {
  data: {
    title: '10.23号，鼓楼区活动，需要鼓手歌手各3名。',
    release_time: 1499237307822,
    lasting_time: '10.18-10.19',
    activity_place: '上海路商区',
    gather_time: 1499391468283,
    gather_place: '上海路地铁站',
    jobs: ['singer'],
    price: '850',
    unit: 'person',
    certificate: false,
    sponsor: 'xxx演艺活动公司',
    description: '鼓楼区活动，需要歌手3名，希望有实际活动经验的歌手积极报名，报酬丰厚！',
    contact: {phone: 12345678909, wechat: 12345678909}
  },
  mess: '获取成功'
}

var myMessage = {
  data: {
    data: [
      {
        id: 1,
        message: '接收到的测试消息1:asdasdasdasdadasdasdasdasdasdasdas',
        send_time: 1499237307822,
        sender: 'system'
      },
      {
        id: 2,
        message: '接收到的测试消息2',
        send_time: 1499237307822,
        sender: 'system'
      },
      {
        id: 3,
        message: '接收到的测试消息3',
        send_time: 1499237307822,
        sender: 'system'
      },
      {
        id: 4,
        message: '接收到的测试消息4',
        send_time: 1499237307822,
        sender: 'system'
      },
      {
        id: 5,
        message: '接收到的测试消息5',
        send_time: 1499237307822,
        sender: 'system'
      }
    ],
    total_number: 60
  },
  mess: '获取成功'
}

export {applyingData, detailActivity, activities, identity, login, reviewActivity, certainGoActivity, myMessage}
