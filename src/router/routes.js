/**
 * Created by Jincheng on 2017/5/9.
 */
import Vue from 'vue'
import Router from 'vue-router'

// import store from '../store'

import App from '../App.vue'
import Home from '../pages/home/home.vue'
import Manage from '../pages/userManage/manage.vue'
import Personal from '../pages/personal.vue'
import Recent from '../pages/recent.vue'
import ActivityDetail from '../pages/detailActivity.vue'
import MyApply from '../pages/myApply/myApply.vue'
import GoingActivity from '../pages/goingActivity/goingActivity.vue'
import FinishedActivity from '../pages/finishedActivity/finishedActivity.vue'
import PersonalInfo from '../pages/personalInfo/personalInfo.vue'
import MyMessage from '../pages/myMessage/myMessage.vue'
import MyFocus from '../pages/myFocus/myFocus.vue'
import ReceicedJudge from '../pages/judge/receivedJudge.vue'
import GivingJudge from '../pages/judge/givingJudge.vue'
import MySetting from '../pages/setting/mySetting.vue'
import Login from '../pages/login/login.vue'
import Map from '../pages/map/map.vue'
import ReviewActivity from '../pages/reviewActivity/reviewActivity.vue'
import FinishedDetail from '../pages/finishedActivity/finishedDetail/finishedDetail.vue'
import Account from '../pages/myAccount/account.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: '/home',
          component: Home,
          name: 'home'
        },
        {
          path: '/manage',
          component: Manage,
          children: [
            {
              path: '',
              redirect: 'personalInfo'
            },
            {
              path: 'applying',
              component: MyApply,
              name: 'applying'
            },
            {
              path: 'going',
              component: GoingActivity,
              name: 'going'
            },
            {
              path: 'finished',
              component: FinishedActivity,
              name: 'finished'
            },
            {
              path: 'finishedDetail/:id',
              component: FinishedDetail
            },
            {
              path: 'personalInfo',
              component: PersonalInfo,
              name: 'personalInfo'
            },
            {
              path: 'account',
              component: Account
            },
            {
              path: 'myMessage',
              component: MyMessage,
              name: 'myManage'
            },
            {
              path: 'myFocus',
              component: MyFocus,
              name: 'myFocus'
            },
            {
              path: 'receivedJudge',
              component: ReceicedJudge,
              name: 'receivedJudge'
            },
            {
              path: 'givingJudge',
              component: GivingJudge,
              name: 'givingJudge'
            },
            {
              path: 'mySetting',
              component: MySetting,
              name: 'muSetting'
            }
          ]
        },
        {
          path: '/personal',
          component: Personal
        },
        {
          path: 'recent',
          component: Recent,
          name: 'recent'
        },
        {
          path: '/detailActivity/:id',
          component: ActivityDetail
        },
        {
          path: '/add',
          component: Map
        },
        {
          path: '/map',
          component: Map
        },
        {
          path: '/reviewActivity',
          component: ReviewActivity
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
    /* {
      path: '',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/manage',
      component: Manage,
      children: [
        {
          path: '',
          redirect: 'personalInfo'
        },
        {
          path: 'applying',
          component: MyApply
        },
        {
          path: 'going',
          component: GoingActivity
        },
        {
          path: 'finished',
          component: FinishedActivity
        },
        {
          path: 'personalInfo',
          component: PersonalInfo
        },
        {
          path: 'myMessage',
          component: MyMessage
        },
        {
          path: 'myFocus',
          component: MyFocus
        },
        {
          path: 'receivedJudge',
          component: ReceicedJudge
        },
        {
          path: 'givingJudge',
          component: GivingJudge
        },
        {
          path: 'mySetting',
          component: MySetting
        }
      ]
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: 'recent',
      component: Recent
    },
    {
      path: '/detailActivity/:id',
      component: ActivityDetail
    } */
  ]
})
/* router.beforeEach((to, from, next) => {
  /!* console.log('to', to)
  console.log('from', from) *!/
  if (store.state.isLogin) {
    // 增加判断，以防重复进入beforeEach，从而进入循环
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({path: '/login'})
    }
  }
}) */
export default router
