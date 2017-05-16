/**
 * Created by Jincheng on 2017/5/9.
 */
import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'
import Home from '../pages/home.vue'
import Manage from '../pages/manage.vue'
import Personal from '../pages/personal.vue'
import Recent from '../pages/recent.vue'

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
          component: Manage
        },
        {
          path: '/personal',
          component: Personal
        },
        {
          path: 'recent',
          component: Recent
        }
      ]
    }
  ]
})
