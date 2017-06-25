/**
 * Created by Jincheng on 2017/5/15.
 */
import * as types from './mutation-types'

export default {
  [types.GET_PRODUCT] (state, info) {},

  // 保存用户的一些信息
  [types.RECORD_IDENTITY] (state, info) {
    state.userId = info.id
    state.token = info.token
  }
}
