import { getToken } from '@/utils/auth'
import { LOGIN_PATH } from '@/config.js'

// TODO：需要定义相关数据，并在main.js中开启引用

// 页面白名单
const whiteList = [
  LOGIN_PATH, '/pages/common/webview',
]

// 检查地址白名单
function checkWhite(url) {
  const path = url.split('?')[0]
  return whiteList.indexOf(path) !== -1
}

// 页面跳转验证拦截器
let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab", ]
list.forEach(item => {
  uni.addInterceptor(item, {
    invoke(to) {
      if (getToken()) {
        if (to.url === loginPage) {
          uni.reLaunch({ url: "/", })
        }
        return true
      } else {
        if (checkWhite(to.url)) {
          return true
        }
        uni.reLaunch({ url: loginPage, })
        return false
      }
    },
    fail(err) {
      console.log(err)
    },
  })
})
