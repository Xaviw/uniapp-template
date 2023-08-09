<script>
import { watchMiniPaymentState, navToFirstPage, watchNetworkState } from '@/utils'
import { watchSocketMessage } from '@/utils/socketHandler.js'
import checkUpdate from '@/utils/update.js'

export default {
  onLaunch() {
    // #ifdef APP-PLUS
    navToFirstPage()
    checkUpdate()
    // #endif
    watchNetworkState()
    watchSocketMessage()
  },
  onShow() {
    // #ifndef MP
    watchMiniPaymentState()
    // #endif
  },
}
</script>

<style lang="scss">
// APP NVUE页面不支持标签样式，此处定义类样式是可以vue、nvue通用的
// 除H5外，page标签样式只能写在非scope style中
// APP NVUE页面默认字体大小19px，其余默认16px
@import '@/uni_modules/uview-ui/index.scss';
@import '@/styles/common.scss';

/* #ifndef APP-NVUE */
// APP VUE端需要设置页面背景色透明才能看到app-plus background颜色（页面背景默认白色）
page {
  color: $u-content-color;
  background-color: transparent;
}
/* #endif */
</style>
