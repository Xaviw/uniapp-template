import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.js'
import { set } from 'lodash-es'
import createPersistedState from "vuex-persistedstate";
import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
  },
  getters,
  mutations: {
    $set(state, payload) {
      for (let key in payload) {
        const value = payload[key]
        set(state, key, value)
      }
    }
  },
  // TODO: 配置Vuex持久化存储
  plugins: [createPersistedState({
    paths: ['user.userInfo'],
    storage: {
      getItem: key => uni.getStorageSync(key),
      setItem: (key, value) => uni.setStorageSync(key, value),
      removeItem: key => uni.removeStorageSync(key)
    }
  })]
})

export default store
