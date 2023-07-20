<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
  },
  getters,
})

=======
import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.js'
import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
  },
  getters,
})

>>>>>>> ec2f89ac0053a50731e91f31c47f633c6eaa23b0
export default store
