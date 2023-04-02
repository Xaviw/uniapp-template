<script>
import { watchMiniPaymentState, navToFirstPage, watchNetworkState } from '@/utils/helper.js'
import { watchSocketMessage } from '@/utils/socketUtil.js'
import pushy from '@/utils/update.js'

export default {
  onLaunch() {
    // #ifdef APP-PLUS
    navToFirstPage()
    pushy.getUpdate()
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
@import '@/uni_modules/uview-ui/index.scss';
@import '@/style/generate.scss';
@import '@/style/common.scss';

/* #ifndef APP-NVUE */
// APP NVUE页面不支持标签样式，此处定义类样式是可以vue、nvue通用的
// APP NVUE页面默认字号18px，其他默认字号16px
// 除H5外，page标签样式只能写在非scope style中
// pages.json -> globalStyle -> app-plus -> background 应与这里的背景色同步
page {
  // font-size: 28rpx;
  color: $u-content-color;
  background-color: $u-bg-color;
}
/* #endif */
</style>
