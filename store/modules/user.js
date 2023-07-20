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
