import { login as handleLogin } from '@/api/system.js'

export default {
  state: {
    token: uni.getStorageSync('token'),
    // APP跳转微信小程序支付的订单id
    paymentId: null,
  },

  mutations: {
    setUserState(state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    },
    setPaymentId(state, id) {
      state.paymentId = id
    },
  },

  actions: {
    // 登录
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        handleLogin(data).then(async res => {
          const { token } = res

          commit('setUserState', {
            token: `Bearer ${token}`,
          })
          uni.setStorageSync('token', `Bearer ${token}`)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    logout({ commit }) {
      // 若有退出登录接口则在此处调用，无论接口是否成功，清除状态
      uni.$socket?.disconnect()
      commit('setUserState', {
        token: undefined,
      })
      uni.clearStorageSync()
    },
  },
}
