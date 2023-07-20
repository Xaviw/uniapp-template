<<<<<<< HEAD
import { amap_mini_key } from '@/config.js'
import amap from '@/libs/amap-wx.js'

export const amapFunc = new amap.AMapWX({ key: amap_mini_key, })
=======
import { AMAP_MINI_KEY } from '@/config.js'
import amap from '@/libs/amap-wx.js'

export const amapFunc = new amap.AMapWX({ key: AMAP_MINI_KEY })

export function getLocation() {
  return uni.getLocation({
    type: 'gcj02',
    geocode: true,
    highAccuracyExpireTime: '5000',
    isHighAccuracy: true,
  })
}

/**
 * 判断两个坐标点是否是同一个点（误差足够小）
 * @param {object} a - {longitude: number, latitude: number}
 * @param {object} b - {longitude: number, latitude: number}
 * @return {boolean}
 */
export function isSameLocation(a, b) {
  const lon1 = parseFloat(a.longitude)
  const lon2 = parseFloat(b.longitude)
  const lat1 = parseFloat(a.latitude)
  const lat2 = parseFloat(b.latitude)
  if (!lon1 || !lon2 || !lat1 || !lat2) return false
  return Math.abs(lon1 - lon2) < 0.00001 && Math.abs(lat1 - lat2) < 0.00001
}
>>>>>>> ec2f89ac0053a50731e91f31c47f633c6eaa23b0
