import Vue from 'vue'
import store from '@/store'
import uView from '@/uni_modules/uview-ui'
import App from './App'
import setUViewConfig from '@/style/setUViewConfig.js'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.use(uView)

const app = new Vue({
	...App
})
app.$mount()

setUViewConfig()
