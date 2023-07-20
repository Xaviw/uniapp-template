import { checkUpgrade } from '@/api'
import { ios_app_id } from '@/config.js'

export default function checkVersion() {
  function showModal(force) {
    uni.showModal({
      title: '发现新版本',
      content: '前往应用市场更新',
      showCancel: !force,
      success: res => {
        if (res.confirm) {
          plus.runtime.launchApplication({
            action: `itms-apps://itunes.apple.com/cn/app/id${ios_app_id}?mt=8`,
          }, e => {
            console.log(`Open system default browser failed: ${e}`)
            uni.$u.toast(`打开应用市场失败：${e.message}`)
          })
          // 强制更新时，始终保持modal打开
          force && showModal(force)
        }
      },
    })
  }

  plus.runtime.getProperty(plus.runtime.appid, widgetInfo => {
    // api查询最新版本以及是否强制更新
    // checkUpgrade仅是例子，模板中并未定义
    checkUpgrade({ appType: 0, busType: 1, })
      .then(({ code, forceUpdate, }) => {
        if (code > widgetInfo.versionCode) {
          showModal(forceUpdate != 0)
        }
      })
  })
}
