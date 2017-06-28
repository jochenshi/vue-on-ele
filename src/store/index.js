/**
 * Created by Jincheng on 2017/5/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

// 定义一些全局的状态
const state = {
  username: '', // 存储用户名
  userId: 11,  // 用户的ID，用于进行与用户ID有关的操作
  token: '',  // 储存相关的身份的token
  isLogin: true
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
