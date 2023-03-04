import { merge } from 'lodash-es'

export function getBasicsHeader(header) {
  const defaultHeader = {
    authorization: "c2NfdHJhZmZpY19wdF93ZWI6c2NfdHJhZmZpY193ZWJfcHRfc2VjcmV0",
    applicationId: 1,
    tenantId: 1,
    token: "test",
  };
  return merge(defaultHeader, header);
}

export function checkStatusCode(response, vm) {
  let errMsg;

  if (response.errMsg.startsWith("request:fail")) {
    errMsg = "请检查网络是否正常";
  }

  if (response.statusCode) {
    switch (response.statusCode) {
      case 401:
        vm.$store.commit("exitLogin");
        errMsg = "登录信息已过期，请重新登录！";
        uni.$u.route({
          type: "reLaunch",
          url: "/pages/account/login/login",
        });
        break;
      case 403:
        errMsg = "禁止访问！";
        break;
      case 404:
        errMsg = "网络请求错误，未找到该资源！";
        break;
      case 405:
        errMsg = "网络请求错误，请求方法为允许！";
        break;
      case 408:
        errMsg = "网络请求超时！";
        break;
      case 500:
        errMsg = "服务器错误，请稍后再试！";
        break;
      case 502:
        errMsg = "网络错误，请检查您的网络！";
        break;
      case 503:
        errMsg = "服务器暂时过载或维护，请稍后再试！";
        break;
      case 504:
        errMsg = "网络超时！";
        break;
      default:
    }
  }
  // 扩展cancelOrResetToast属性，能在请求catch中取消默认或重设toast内容
  let timer;
  new Promise((resolve, _) => {
      response.cancelOrResetToast = resolve;
      timer = setTimeout(() => {
        uni.$u.toast(errMsg);
      }, 100);
    })
    .then((newToastMsg) => {
      clearTimeout(timer);
      newToastMsg && uni.$u.toast(newToastMsg);
    });

  return response;
}

export class RequestRetry {
  retry(instance, error) {
    const { config } = error;
    const { waitTime, count } = config?.custom?.retryRequest;
    config.custom.retryRequest.__retryCount = config.custom.retryRequest
      .__retryCount || 0;
    if (config.custom.retryRequest.__retryCount >= count) {
      return Promise.reject(error);
    }
    config.custom.retryRequest.__retryCount += 1;
    return this.delay(waitTime)
      .then(() => instance(config));
  }

  delay(waitTime) {
    return new Promise((resolve) => setTimeout(resolve, waitTime));
  }
}
