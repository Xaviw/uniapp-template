import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import App from './App'
import store from '@/store'
import http from '@/utils/http.js'
import setUViewConfig from '@/utils/setUViewConfig.js'
import modal from '@/utils/modal.js'
import { promiseify } from './utils'
// TODO: 按需开启
// import permission from '@/utils/permission.js'
// import '@/utils/routerGuard.js'

// 统一uni api为Vue3项目promise格式
promiseify()

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$modal = modal
// Vue.prototype.$permi = permission

Vue.use(uView)
// 配置uview
setUViewConfig()

const app = new Vue({
  ...App,
})

// 配置请求器
Vue.use(http, app)

app.$mount()
