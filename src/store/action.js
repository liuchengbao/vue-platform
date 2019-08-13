import {
  SET_USETINFO,
  GET_USERINFO
} from './mutation-types.js'

export default {
  async setUserInfo ({commit, state}) {
    // console.log(data, 'ssssss')
    commit(SET_USETINFO, state)
  },
  async getUserInfo ({commit, state}) {
    console.log(state.amount, 'ssss')
    commit(GET_USERINFO, state.amount + 1)
  }
}
