<template>
  <view><web-view :src="src" :update-title="false"></web-view></view>
</template>

<script>
import { API_URL } from '@/config.js'

export default {
  /**
   * @param {string} src - 地址
   * @param {string} [title] - 页面标题
   */
  onLoad({ src, title }) {
    this.src = src
    if (title) {
      uni.setNavigationBarTitle({ title })
    }
  },
  data() {
    return {
      src: '',
    }
  },
}
</script>
