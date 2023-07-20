import { merge } from 'lodash-es'
import { alert } from '@/utils/modal.js'

export function getBasicsHeader(header) {
  const defaultHeader = {}
  return merge(defaultHeader, header)
}

export function checkStatusCode(response, vm) {
  let errMsg = response.data.msg || response.data.errorMsg

  if (response.errMsg.startsWith("request:fail")) {
    errMsg = "请检查网络是否正常"
  }

  if (response.statusCode) {
    switch (response.statusCode) {
    case 401:
      alert('您的登录信息已过期，请重新登录').then(() => {
        vm.$store.dispatch('LogOut').then(() => {
          uni.reLaunch({ url: '/pages/login' })
        })
      })
      break
    case 500:
    case 503:
      errMsg = "服务器错误，请稍后再试！"
      break
    case 502:
    case 504:
      errMsg = "网络错误，请检查您的网络！"
      break
    }
  }
  // 扩展cancelOrResetToast属性，能在请求catch中取消默认或重设toast内容
  let timer
  new Promise(resolve => {
    response.cancelOrResetToast = resolve
    timer = setTimeout(() => {
      uni.$u.toast(errMsg)
    }, 100)
  })
    .then(newToastMsg => {
      clearTimeout(timer)
      newToastMsg && uni.$u.toast(newToastMsg)
    })

  return response
}

export class RequestRetry {
  retry(instance, error) {
    const { config } = error
    const { waitTime, count } = config?.custom?.retryRequest || {}
    config.custom.retryRequest.__retryCount = config.custom.retryRequest
      .__retryCount || 0
    if (config.custom.retryRequest.__retryCount >= count) {
      return Promise.reject(error)
    }
    config.custom.retryRequest.__retryCount += 1
    return this.delay(waitTime)
      .then(() => instance(config))
  }

  delay(waitTime) {
    return new Promise(resolve => setTimeout(resolve, waitTime))
  }
}
