import {
  GET_USERINFO,
  SET_USETINFO
} from './mutation-types.js'

export default {
  [GET_USERINFO] (state, info) { // 获取用户信息存入vuex
    console.log(info, 'hhhhhh')
    state.amount = info
  },
  [SET_USETINFO] (state, info) { // 获取用户信息存入vuex
    console.log(info, 'jjj')
    state.userInfo = info
  }
}
