<<<<<<< HEAD
import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: uni.getStorageSync('name'),
    phone: uni.getStorageSync('phone'),
    avatar: uni.getStorageSync('avatar'),
    roles: uni.getStorageSync('roles'),
    permissions: uni.getStorageSync('permissions'),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_NAME: (state, name) => {
      state.name = name
      uni.setStorageSync('name', name)
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
      uni.setStorageSync('phone', phone)
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
      uni.setStorageSync('avatar', avatar)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
      uni.setStorageSync('roles', roles)
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
      uni.setStorageSync('permissions', permissions)
    },
  },

  actions: {
    // 登录
    Login({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(res => {
          commit('SET_TOKEN', res.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_NAME', '')
          commit('SET_PHONE', '')
          commit('SET_AVATAR', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          removeToken()
          uni.clearStorage()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}

export default user
=======
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
>>>>>>> ec2f89ac0053a50731e91f31c47f633c6eaa23b0
