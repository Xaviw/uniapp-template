import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    userInfo: {}
  },

  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info
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

export default user
