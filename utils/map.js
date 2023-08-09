import { AMAP_MINI_KEY } from "@/config.js";
import amapFile from "@/libs/amap-wx.js";
import { checkLatitude, checkLongitude } from "./test.js";

/* Promise化后的amap-wx方法 */
export const amap = useAMap();

/**
 * uni.getLocation Promise化方法
 * @param {Object} [options={}] - 传入参数覆盖默认参数
 */
export function getLocation(options = {}) {
  return uni.getLocation({
    type: "gcj02",
    geocode: true,
    highAccuracyExpireTime: "5000",
    isHighAccuracy: true,
    ...options,
  });
}

/**
 * 通过经纬度获取地址信息
 * @param {string} lnglat - 逗号分隔的经纬度
 * @returns {Object} data - 返回地址信息对象
 * @returns {string} data.name - POI名称
 * @returns {string} data.address - 地址
 * @returns {string} data.adCode - 6位城市编码
 * @returns {string} data.cityCode - 3位城市编码
 */
export function getAddress(lnglat) {
  if (!checkLnglat(lnglat)) throw new Error("getAddress 接收参数错误");
  return new Promise((resolve, reject) => {
    amap
      .getRegeo({ location: lnglat })
      .then(([addressData]) => {
        if (addressData) {
          const name = addressData.regeocodeData.pois[0].name;
          const address = addressData.name;
          const adCode = addressData.regeocodeData.addressComponent.adcode;
          const cityCode = addressData.regeocodeData.addressComponent.citycode;
          resolve({ name, address, adCode, cityCode });
        } else {
          reject("未解析到数据");
        }
      })
      .catch(reject);
  });
}

/**
 * 通过uni.location和amap.getRegeo获取详细地址信息方法
 * @returns {Object} data - 返回地址信息对象
 * @returns {number} data.latitude - 纬度
 * @returns {number} data.longitude - 经度
 * @returns {string} data.lnglat - 经纬度逗号分隔
 * @returns {string} data.name - POI名称
 * @returns {string} data.address - 地址
 * @returns {string} data.adCode - 6位城市编码
 * @returns {string} data.cityCode - 3位城市编码
 */
export async function getLocationInfo() {
  try {
    // 获取定位信息
    const { latitude, longitude } = await getLocation({ geocode: false });

    const lnglat = `${longitude},${latitude}`;

    // 始终通过amap方法获取地址信息，因为非APP端没有address且返回中没有adCode等信息
    const { name, address, adCode, cityCode } = await getAddress(lnglat);

    return { latitude, longitude, lnglat, name, address, adCode, cityCode };
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * 根据经纬度获取polyline
 * @param {Object} options - getDrivingRoute参数，查看https://lbs.amap.com/api/wx/reference/core
 * @returns {{longitude, latitude}[]} - 经纬度数组
 */
export async function getRoutes(options) {
  if (!checkLnglat(options.origin) || !checkLnglat(options.destination)) {
    throw new Error("getRoutes 参数错误");
  }
  return amap.getDrivingRoute(options).then((res) => {
    const polyline = res.paths[0].steps.map((path) => {
      const points = path.polyline.split(";");
      return points.map((point) => {
        const [longitude, latitude] = point.split(",");
        return { longitude, latitude };
      });
    });
    return polyline.flat();
  });
}

/**
 * 判断两个坐标点是否是同一个点（误差足够小）
 * @param {object} a - {longitude: number, latitude: number}
 * @param {object} b - {longitude: number, latitude: number}
 * @return {boolean}
 */
export function isSameLocation(a, b) {
  const lon1 = parseFloat(a.longitude);
  const lon2 = parseFloat(b.longitude);
  const lat1 = parseFloat(a.latitude);
  const lat2 = parseFloat(b.latitude);
  if (!lon1 || !lon2 || !lat1 || !lat2) return false;
  return Math.abs(lon1 - lon2) < 0.00001 && Math.abs(lat1 - lat2) < 0.00001;
}

/**
 * 校验经纬度是否合法
 * @param {string} lnglat
 * @returns {boolean}
 */
function checkLnglat(lnglat) {
  if (typeof lnglat !== "string") return false;
  // 处理逗号错误情况
  if (lnglat.includes("，")) lnglat.replace("，", ",");
  if (!lnglat.includes(",")) return false;
  const [lng, lat] = lnglat.split(",");
  return checkLatitude(lat) && checkLongitude(lng);
}

// amap-wx方法promise化
function useAMap() {
  const amapInstance = new amapFile.AMapWX({ key: AMAP_MINI_KEY });
  let amap = {};
  for (let key in amapInstance) {
    if (typeof amapInstance[key] === "function") {
      const func = function (options) {
        if (typeof options.success === "function") {
          // 传了回调，直接调用原方法，跟未处理效果一致
          amapInstance[key](options);
          return Promise.resolve();
        } else {
          // 未传回调，包装为Promise
          return new Promise((resolve, reject) => {
            amapInstance[key]({
              ...options,
              success: (result) => {
                resolve(result);
              },
              fail: (error) => {
                reject(error);
              },
            });
          });
        }
      };
      amap[key] = func.bind(amapInstance);
    }
  }
  return amap;
}
