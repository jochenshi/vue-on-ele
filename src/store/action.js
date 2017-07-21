/**
 * Created by Jincheng on 2017/5/15.
 */
import * as types from './mutation-types'
import {getIdentity} from '../service/getData'
import {MessageBox} from 'element-ui'

export default {
  recordIdentity ({commit}) {
    getIdentity().then((data) => {
      commit(types.RECORD_IDENTITY, data)
    })
  },
  // 将登陆成功之后返回的信息进行保存
  loginRecord ({commit}, data) {
    return new Promise((resolve, reject) => {
      commit(types.RECORD_IDENTITY, data)
      resolve()
    })
  },
  handleError (data, d) {
    console.log(d)
    MessageBox('登录已超时，请重新登录', '提示').then(() => {
      window.location.hash = '/login'
    })
  }
}
