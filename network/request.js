import { API_URL, API_PREFIX, LOGIN_PATH } from "@/config.js";
import { merge } from 'lodash-es'

export default function request(vm) {
  uni.$u.http.setConfig(config => {
    config.baseURL = API_URL + API_PREFIX;
    config.custom = {
      // 是否返回原始响应数据 比如：需要获取响应头时使用该属性
      isReturnNativeResponse: false,
      // 请求是否加入时间戳
      joinTime: false,
      // GET请求失败重试
      retryRequest: {
        isOpenRetry: true,
        count: 2,
        waitTime: 1000,
      },
    };
    return config;
  });

  uni.$u.http.interceptors.request.use(config => {
    config.data = config.data || {};
    config.header = {
      ...getBasicHeader({ token: vm.$store.state.user.token }),
      ...config.header,
    };
    // 加入时间戳，避免从缓存中取数据
    if (config.custom.joinTime) {
      config.params = { _t: Date.now(), ...(config.params || {}) };
    }
    return config;
  });

  uni.$u.http.interceptors.response.use(
    response => {
      const { code, data, msg, errorMsg } = response.data;

      // FIX:修改正确的code与对应msg属性
      if (![0, 200].includes(code) && (msg || errorMsg)) {
        toastController(response, msg || errorMsg)
        return Promise.reject(response.data)
      }

      // 自定义参数，默认返回response.data.data，定义后返回原始响应
      if (response.config.custom.isReturnNativeResponse) {
        return response;
      }

      return data === undefined ? {} : data;
    },
    errorResponse => {
      checkStatusCode(errorResponse, vm);

      // 添加自动重试机制 保险起见 只针对GET请求
      const retryRequest = new RequestRetry();
      const isOpenRetry =
        errorResponse.config.custom?.retryRequest?.isOpenRetry;

      errorResponse.config.method?.toUpperCase() === "GET" &&
        isOpenRetry &&
        retryRequest.retry(uni.$u.http, errorResponse);

      return Promise.reject(errorResponse);
    },
  );
}

function getBasicHeader(header) {
  // FIX:默认请求头
  const defaultHeader = {
    authorization: "Basic c2NfdHJhZmZpY193ZWI6c2NfdHJhZmZpY193ZWJfc2VjcmV0",
    tenant: "MDAwMA==",
    token: "Bearer test",
  }
  return merge(defaultHeader, header)
}

function checkStatusCode(response, vm) {
  let errMsg = response.data.msg || response.data.errorMsg

  if (response.errMsg?.startsWith("request:fail")) {
    errMsg = "请检查网络是否正常"
  }

  if (response.statusCode) {
    switch (response.statusCode) {
    case 401:
      errMsg = "登录信息已过期，请重新登录！"
      // 无论调用是否成功，返回登录
      vm.$store.dispatch('Logout').finally(() => {
        uni.$u.route({
          type: "reLaunch",
          url: LOGIN_PATH,
        })
      })
      break
    case 500:
    case 503:
      errMsg = "服务器错误，请稍后再试！"
      break
    case 408:
    case 502:
    case 504:
      errMsg = "网络错误，请检查您的网络！"
      break
    }
  }
  // 扩展cancelOrResetToast属性，能在请求catch中取消默认或重设toast内容
  toastController(response, errMsg)
  return response
}

function toastController(response, errMsg) {
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
}

class RequestRetry {
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
