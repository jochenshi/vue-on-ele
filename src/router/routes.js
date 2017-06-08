/**
 * Created by Jincheng on 2017/5/9.
 */
import Vue from 'vue'
import Router from 'vue-router'

// import App from '../App.vue'
import Home from '../pages/home.vue'
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

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      component: App,
      children: [
        {
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
              redirect: 'applying'
            },
            {
              path: 'applying',
              component: MyApply
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
        }
      ]
    } */
    {
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
          redirect: 'applying'
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
    }
  ]
})
