import Pushy from '@limm/uni-pushy-client'
import { UPDATE_SERVER, UPDATE_ID } from '@/config.js'

export default new Pushy({
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
