<template>
  <view v-if="params.url">
    <web-view :webview-styles="webviewStyles" :src="`${params.url}`" :updateTitle="updateTitle"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      params: {},
      webviewStyles: {
        progress: {
          color: uni.$u.color.primary,
        },
      },
    }
  },
  props: {
    src: {
      type: [String],
      default: null,
    },
    updateTitle: {
      type: [Boolean],
      default: false,
    },
  },
  onLoad(event) {
    this.params = event
    if (event.title) {
      uni.setNavigationBarTitle({
        title: event.title,
      })
    }
  },
}
</script>
