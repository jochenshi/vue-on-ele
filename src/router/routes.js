/**
 * Created by Jincheng on 2017/5/9.
 */
import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'
import Home from '../pages/home.vue'
import Manage from '../pages/userManage/manage.vue'
import Personal from '../pages/personal.vue'
import Recent from '../pages/recent.vue'
import ActivityDetail from '../pages/detailActivity.vue'
import MyApply from '../pages/myApply/myApply.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
