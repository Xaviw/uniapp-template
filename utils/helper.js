import { fetchSocketServer, fetchPaymentStatus } from '@/api/system.js'
import { useSocket } from '@/network/socket.js'
import { MINI_ORIGINAL_ID, MINI_PAYMENT_PATH, HOME_PATH } from '@/config.js'
import { socketLogin } from '@/utils/socketUtil.js'
import { getToken } from './auth.js'
import {
  divide as uviewDivide,
  minus as uviewMinus,
  plus as uviewPlus,
  times as uviewTimes,
} from '@/uni_modules/uview-ui/libs/function/digit.js'

/**
 * @desc 统一Vue2 Promise化API返回格式
 */
export function promiseify() {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    )
  }

  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res
      }
      return new Promise((resolve, reject) => {
        res.then(res => {
          if (res[0]) {
            reject(res[0])
          } else {
            resolve(res[1])
          }
        })
      })
    },
  })
}

/**
 * @desc socket连接
 */
export function connectSocket() {
  // TODO:获取socket地址
  return fetchSocketServer().then(res => {
    const url = `wss://${res.domain}:${res.sslPort}`
    uni.$socket = useSocket(url, {
      autoReconnect: true,
      onConnected: socketLogin,
      onClosed: () => {
        uni.$socket = null
      },
      onMessage: (_, message) => {
        uni.$emit("socketMessage", message)
      }
    })
  })
}

/**
 * @desc 跳转微信支付封装方法，FIX:需要针对修改params中id对应的属性
 * @param {object} params={} - 跳转参数
 * @param {number} [type=0] - 微信小程序版本类型： 0-正式版； 1-测试版； 2-体验版
 */
export function wxPayment(params = {}, type = 0) {
  return new Promise((resolve, reject) => {
    plus.share.getServices(res => {
      const wx = res.find(item => item.id == 'weixin')
      if (wx.nativeClient) {
        const launchOption = {
          id: MINI_ORIGINAL_ID, // 微信小程序原始ID（"g_"开头的字符串）
          type,
          path: `${MINI_PAYMENT_PATH}${uni.$u.queryParams(params)}`,
        }
        wx.launchMiniProgram(launchOption, () => {
          // 存储支付订单id供返回APP时检查支付状态
          this.$store.commit('setPaymentId', params.id)
          // 监听检查支付状态的结果
          uni.$once('paymentResult', (id, state) => {
            if (id !== params.id) return
            if (state) {
              uni.$u.toast('支付成功！')
              resolve()
            } else {
              uni.$u.toast('支付失败，请重新支付！')
              reject()
            }
          })
        })
      } else {
        uni.$u.toast('请先安装微信')
        reject()
      }
    })
  })
}

/**
 * @desc App.vue onShow方法中监听跳转小程序支付状态
 */
export function watchMiniPaymentState() {
  const paymentId = this.$store.state.user.paymentId
  if (paymentId) {
    uni.showLoading({ title: '获取支付状态中' })
    // 调用检查支付状态的api
    // TODO: 检查支付状态
    fetchPaymentStatus({ id: paymentId })
      .then(state => {
        // 发射支付检查结果
        uni.$emit('paymentResult', paymentId, state)
      })
      .catch(() => {
        uni.$u.toast('网络错误，请刷新后查看支付结果')
        uni.$emit('paymentResult', paymentId, false)
      })
      .finally(() => {
        // 检查完毕清空存储的支付Id
        this.$store.commit('setPaymentId', null)
        uni.hideLoading()
      })
  }
}

/**
 * @desc 检查登录状态跳转并关闭启动图
 */
export function navToFirstPage() {
  const token = getToken()
  if (token) {
    uni.reLaunch({
      url: HOME_PATH,
      success: () => {
        plus.navigator.closeSplashscreen()
      },
    })
  } else {
    plus.navigator.closeSplashscreen()
  }
}

/**
 * @desc 监听网络状态并跳转无网络页面
 */
export function watchNetworkState() {
  uni.onNetworkStatusChange(({ isConnected }) => {
    const currentlyIsNoNetworkPage = uni.$u.page() == '/pages/common/noNetwork/noNetwork'
    if (currentlyIsNoNetworkPage && isConnected) {
      uni.navigateBack()
    } else if (!isConnected && !currentlyIsNoNetworkPage) {
      uni.navigateTo({
        url: '/pages/common/noNetwork/noNetwork',
      })
    }
  })
}

/**
 * 计算方法参数标准化，将无法识别的参数看作0
 * @private
 * @param {...*} nums 计算参数
 * @return {...number}
 */
function calcNormalize(...nums) {
  return nums.map(item => parseFloat(item) || 0)
}

/**
 * 高精度加法，无法识别为数字的参数会看作0
 * plus函数名与H5+ API plus冲突，不应该使用plus作为函数名
 * @param {...*} nums 计算参数
 * @returns {number}
 */
export function add(...nums) {
  return uviewPlus(calcNormalize(nums))
}

/**
 * 高精度减法，无法识别为数字的参数会看作0
 * @param {...*} nums 计算参数
 * @returns {number}
 */
export function minus(...nums) {
  return uviewMinus(calcNormalize(nums))
}

/**
 * 高精度乘法，无法识别为数字的参数会看作0
 * @param {...*} nums 计算参数
 * @returns {number}
 */
export function multiply(...nums) {
  return uviewTimes(calcNormalize(nums))
}

/**
 * 高精度除法，无法识别为数字的参数会看作0
 * @param {...*} nums 计算参数
 * @returns {number}
 */
export function divide(...nums) {
  return uviewDivide(calcNormalize(nums))
}
