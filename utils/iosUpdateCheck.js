import { checkUpgrade } from '@/api/system.js'
import { IOS_APP_ID } from '@/config'

export default function checkVersion() {
  plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
    checkUpgrade({
        appType: 0,
        busType: 1,
      })
      .then(({ code, forceUpdate }) => {
        if (code > widgetInfo.versionCode)
          showModal(forceUpdate != 0)
      })
  })

  function showModal(force) {
    uni.showModal({
      title: '发现新版本',
      content: '前往应用市场更新',
      showCancel: !force,
      success: (res) => {
        if (res.confirm) {
          plus.runtime.launchApplication({
            action: `itms-apps://itunes.apple.com/cn/app/id${APP_STORE_ID}?mt=8`,
          }, (e) => {
            console.log(`Open system default browser failed: ${e}`)
            uni.$u.toast(`打开应用市场失败：${e.message}`)
          })
          // 强制更新时，始终保持modal打开
          force && showModal(force)
        }
      },
    })
  }
};
