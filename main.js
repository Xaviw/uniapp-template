import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import App from '@/App'
import store from '@/store'
import { promiseify } from '@/utils/helper.js'
import setUViewConfig from '@/style/setUViewConfig.js'
import request from '@/network/request.js'

// uni API Promise»¯
promiseify()

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.use(uView)

const app = new Vue({
  ...App,
})
app.$mount()

setUViewConfig()
request(app)
