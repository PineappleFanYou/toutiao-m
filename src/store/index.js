import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem, removeItem } from '@/utils/storage'

Vue.use(Vuex)

const USER_KEY = 'toutiao-user'

export default new Vuex.Store({
  state: {
    userToken: getItem(USER_KEY),
  },
  mutations: {
    setUserToken(state, data) {
      state.userToken = data;
      // 存到本地
      setItem(USER_KEY, state.userToken)
    }
  },
  actions: {
  },
  modules: {
  }
})
