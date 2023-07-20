import { amap_mini_key } from '@/config.js'
import amap from '@/libs/amap-wx.js'

export const amapFunc = new amap.AMapWX({ key: amap_mini_key, })
