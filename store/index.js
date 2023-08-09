import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import address from "./modules/address.js";
import { set } from "lodash-es";
import createPersistedState from "vuex-persistedstate";
import getters from "./getters.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    address,
  },
  getters,
  mutations: {
    /**
     * @param {Object} payload - 要修改的路径对象
     * @example
     * this.$store.commit('$set', {'a.b.c': 1, 'd': 2})
     */
    $set(state, payload) {
      if (typeof payload !== "object") return;
      for (let key in payload) {
        if (!Object.hasOwnProperty.call(payload, key)) continue;
        set(state, key, payload[key]);
      }
    },
  },
  // TODO: 配置Vuex持久化存储
  plugins: [
    createPersistedState({
      paths: ["user.userInfo"],
      storage: {
        getItem: (key) => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
        removeItem: (key) => uni.removeStorageSync(key),
      },
    }),
  ],
});

export default store;
