import { API_URL } from "@/config";
import { checkStatusCode, getBasicHeader, RequestRetry } from "./helpers";

export default function request(vm) {
  uni.$u.http.setConfig((config) => {
    config.baseURL = API_URL;
    config.custom = {
      // 是否返回原生响应头 比如：需要获取响应头时使用该属性
      isReturnNativeResponse: false,
      // 是否加入时间戳
      joinTime: false,
      // 失败重试
      retryRequest: {
        isOpenRetry: true,
        count: 2,
        waitTime: 1000,
      },
    };
    return config;
  });

  uni.$u.http.interceptors.request.use((config) => {
    config.data = config.data || {};
    config.header = {
      ...getBasicHeader(vm.$store.state.auth),
      ...config.header
    };
    // 加入时间戳，避免从缓存中取数据
    if (config.custom.joinTime) {
      config.params = { _t: Date.now(), ...(config.params || {}) };
    }
    return config;
  });

  uni.$u.http.interceptors.response.use(
    (response) => {
      const data = response.data;

      // if ([40001, 40003, 40009].includes(data.code)) {
      //   vm.$store.commit("exitLogin");
      //   uni.$u.toast("登录信息已过期，请重新登录");
      //   uni.$u.route({
      //     type: "reLaunch",
      //     url: "/pages/account/login/login",
      //   });
      //   return Promise.reject(response);
      // } else if (![0, 200].includes(data.code)) {
      //   uni.$u.toast(data.errorMsg || data.msg);
      //   return Promise.reject(response);
      // }

      // 自定义参数，默认返回response.data.data，定义后返回原始响应
      if (response.config.custom.isReturnNativeResponse) {
        return response;
      }

      return data.data === undefined ? {} : data.data;
    },
    (errorResponse) => {
      checkStatusCode(errorResponse, vm);

      // 添加自动重试机制 保险起见 只针对GET请求
      const retryRequest = new RequestRetry();
      const isOpenRetry =
        errorResponse.config.custom?.retryRequest?.isOpenRetry;

      errorResponse.config.method?.toUpperCase() === "GET" &&
        isOpenRetry &&
        retryRequest.retry(uni.$u.http, errorResponse);

      return Promise.reject(errorResponse);
    }
  );
}
