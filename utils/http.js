import { API_URL, TOKEN_KEY, LOGIN_PATH } from "@/config";
import { getToken } from './auth.js'
import { checkStatusCode } from "./index.js";
import { alert, msgError } from './modal.js'
import store from '../store'

export default function request() {
  uni.$u.http.setConfig(config => {
    config.baseURL = API_URL;
    config.custom = {
      // 是否加入时间戳，避免从缓存中取数据
      joinTime: false,
      // 是否携带token
      withToken: true,
      // 是否转换响应，转换为返回响应中的data，不转换为返回完整响应
      isTransformResponse: true,
      // 是否返回原生响应 比如：需要获取响应头时使用该属性
      isReturnNativeResponse: false,
      // 消息提示类型message | modal，其他值可以取消错误消息提示
      errorMessageMode: 'message'
    };
    return config;
  });

  uni.$u.http.interceptors.request.use(config => {
    config.data = config.data || {};

    const { joinTime, withToken } = config.custom

    // 添加token
    const token = getToken()
    if (token && withToken) {
      config.header = { ...config.header, [TOKEN_KEY]: token }
    }

    // 加入时间戳
    if (joinTime) {
      config.params = { _t: Date.now(), ...(config.params || {}) };
    }
    return config;
  });

  uni.$u.http.interceptors.response.use(
    response => {
      const { isReturnNativeResponse, errorMessageMode, isTransformResponse } = response.config.custom

      const data = response.data;

      // TODO: 根据需求判断code与错误msg
      if (data.code != 0 && data.code != 200) {
        const errMsg = data.msg || data.errMsg
        if (errMsg && errorMessageMode == 'message') {
          msgError(errMsg)
        } else if (errMsg && errorMessageMode == 'modal') {
          alert(errMsg)
        }
        return Promise.reject(data)
      }

      // 定义后返回原始响应
      if (isReturnNativeResponse) {
        return response;
      }
      // 定义后仅返回data
      if (isTransformResponse) {
        return data.data === undefined ? {} : data.data;
      }
      // 未定义返回完整响应
      return data

    },
    errorResponse => {
      // TODO: 根据需求判断错误msg
      const { errMsg, msg } = errorResponse.data || {}
      const message = checkStatusCode(errorResponse.statusCode, msg || errMsg);
      if (message && errorMessageMode == 'message') {
        msgError(message)
      } else if (message && errorMessageMode == 'modal') {
        alert(message)
      }
      if (errorResponse.statusCode === 401) {
        store.dispatch('logout')
        uni.reLaunch({
          url: LOGIN_PATH
        })
      }
      return Promise.reject(errorResponse);
    },
  );
}

export function checkStatus(status, message) {
  let errorMessage

  switch (status) {
    case 400:
      errorMessage = `${message}`
      break
    case 401:
      errorMessage = '登录信息已过期！'
      break
    case 403:
      errorMessage = '当前没有权限访问！'
      break
    case 404:
      errorMessage = '网络请求错误，没有找到该资源！'
      break
    case 405:
      errorMessage = '网络请求错误，请求方法未允许！'
      break
    case 408:
      errorMessage = '网络请求超时！'
      break
    case 500:
    case 501:
    case 503:
      errorMessage = '服务器错误，请稍后再试！'
      break
    case 502:
      errorMessage = '网络错误，请检查您的网络！'
      break
    case 504:
      errorMessage = '网络超时！'
      break
    case 505:
      errorMessage = 'http版本不支持该请求！'
      break
  }

  return errorMessage
}
