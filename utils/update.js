import Pushy from '@limm/uni-pushy-client'
import { UPDATE_SERVER, UPDATE_ID } from '@/config.js'
import { checkUpgrade } from '@/apis'

// #ifdef APP-PLUS
const pushy = new Pushy({
  // 项目id
  projectId: UPDATE_ID,
  // 更新地址
  updateUrl: UPDATE_SERVER,
  // 更新按钮主题色
  mainColor: uni.$u.color.primary,
  // logo
  logo: '/static/images/update.png',
  // 是否打开检查更新
  update: true,
  // 是否强制更新
  // forceUpdate: true
})

/**
 * APP检查更新方法
 * @param {boolean} [manual=false] 是否为手动检查更新（会有相关提示）
 */
export default async function checkUpdate(manual = false) {
  try {
    manual && uni.showLoading()
    const { forceUpdate } = await checkUpgrade()
    pushy._config.forceUpdate = !!forceUpdate
    await pushy.getUpdate()
  } finally {
    manual && uni.hideLoading()
  }
}
// #endif
