import { login, logout } from '@/apis/index'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  state: {
    userInfo: {}
  },

  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },

  actions: {
    // 登录
    login({ commit }, data) {
      return login(data).then(res => {
        setToken(res.token)
        commit('setUserInfo', res)
      })
    },

    // 退出系统
    logout({ commit }) {
      const token = getToken()
      logout(token)
      commit('setUserInfo', {})
      removeToken()
    },
  },
}
