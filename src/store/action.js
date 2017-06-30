/**
 * Created by Jincheng on 2017/5/15.
 */
import * as types from './mutation-types'
import {getIdentity} from '../service/getData'

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
  }
}
