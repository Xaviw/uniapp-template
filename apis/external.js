/**
 * @file 如果有请求其他服务器的需求，单独定义请求器实例。可以参照network/request.js进行请求器配置
 */
import Request from '@/uni_modules/uview-ui/libs/luch-request/index.js'
import { AMAP_WEB_KEY } from '@/config.js'

const http = new Request()

// 高德WEB服务，获取行政区方法
export const fetchDistrict = params => http.get('https://restapi.amap.com/v3/config/district', {
  params: { ...params, key: AMAP_WEB_KEY },
})
