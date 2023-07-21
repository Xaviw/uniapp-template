import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import App from './App'
import store from '@/store'
import request from '@/utils/http.js'
import setUViewConfig from '@/utils/setUViewConfig.js'
import modal from '@/utils/modal.js'
// TODO: 按需开启
// import permission from '@/utils/permission.js'
// import '@/utils/routerGuard.js'

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
Vue.prototype.$modal = modal
// Vue.prototype.$permi = permission
Vue.use(uView)

const app = new Vue({
  ...App,
})
app.$mount()

setUViewConfig()
request()
