<<<<<<< HEAD
import Vue from 'vue'
import store from '@/store'
import uView from '@/uni_modules/uview-ui'
import App from './App'
import setUViewConfig from '@/style/setUViewConfig.js'
import '@/utils/routerGuard.js'
import permission from '@/utils/permission.js'
import modal from '@/utils/modal.js'

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then(res => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$permi = permission
Vue.prototype.$modal = modal
Vue.use(uView)

const app = new Vue({
  ...App,
})
app.$mount()

=======
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

>>>>>>> ec2f89ac0053a50731e91f31c47f633c6eaa23b0
setUViewConfig()
request(app)
