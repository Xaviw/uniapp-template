import Pushy from '@limm/uni-pushy-client'
import { UPDATE_SERVER, UPDATE_ID } from '@/config.js'

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
})

/**
 * APP检查更新方法
 * @param {boolean} [manual=false] 是否为手动检查更新（会有相关提示）
 */
export default function checkUpdate(manual = false) {
  manual && uni.showLoading()
  pushy.getUpdate().then(res => {
    if (manual) {
      let msg
      switch (res.statusCode) {
      case 253:
      case 254:
        msg = '已经是最新版本了'
        break
      case 473:
        msg = '正在检查更新'
        break
      case 474:
        msg = '正在静默更新'
        break
      case 475:
        msg = '更新完成，请重启应用'
        break
      case 476:
        msg = '正在更新中...'
        break
      case 500:
      case 505:
        msg = '服务器错误，请稍后再试'
        break
      }
      msg && uni.$u.toast(msg)
    }
  }).finally(() => {
    manual && uni.hideLoading()
  })
}
