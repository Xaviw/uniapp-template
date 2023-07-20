<template>
  <view class="track track-normal" id="container">
    <!-- width+10 避免滑块圆角处显示空白 -->
    <view class="area" :style="{ width: maskWidth + 10 + 'px' }"></view>
    <view class="text">
      <text :style="{ color: isSuccess ? '#fff' : '' }">{{ text }}</text>
    </view>
    <movable-area ref="area" id="area" :style="{ height: '88rpx', flex: 1 }">
      <movable-view
        ref="slider"
        id="slider"
        class="slider"
        direction="horizontal"
        :disabled="isSuccess || disabled"
        :x="x"
        @change="onChange"
        @touchend="onEnd"
      >
        <u-icon size="20" :name="getIcon" color="#fff"></u-icon>
      </movable-view>
    </movable-area>
  </view>
</template>

<script>
export default {
  name: 'sliderVerify',
  emits: ['success'],
  props: {
    text: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {
      x: 0, // 滑块x偏移量
      maskWidth: 0, // 滑动遮罩宽度
      isSuccess: false, // 滑动验证完成
    }
  },
  computed: {
    getIcon() {
      if (this.isSuccess) return 'checkmark-circle'
      if (this.disabled) return 'close-circle'
      return 'arrow-right-double'
    },
  },
  methods: {
    onChange(e) {
      this.maskWidth = e.detail.x
    },
    async onEnd(e) {
      if (this.isSuccess) return
      const area = await this.getSize('area')
      const slider = await this.getSize('slider')
      let end = area.left + area.width
      let pos = slider.left + slider.width
      if (pos >= end) {
        this.isSuccess = true
        this.$emit('success')
      } else {
        this.reset()
      }
    },

    reset() {
      this.isSuccess = false
      this.x = 1
      setTimeout(() => {
        this.x = 0
      }, 50)
    },

    getSize(name) {
      return new Promise((resolve, reject) => {
        // #ifdef APP-NVUE
        const dom = weex.requireModule('dom')
        dom.getComponentRect(this.$refs[name], option => {
          resolve(option.size)
        })
        // #endif

        // #ifndef APP-NVUE
        uni
          .createSelectorQuery()
          .in(this)
          .select(`#${name}`)
          .boundingClientRect(data => {
            resolve(data)
          })
          .exec()
        // #endif
      })
    },
  },
}
</script>

<style scoped lang="scss">
.track {
  flex: 1;
  height: 88rpx;
  border-radius: 12rpx;
  position: relative;
  overflow: hidden;
  background-color: #d0d2d5;
  display: flex;
  flex-direction: row;
}

.slider {
  width: 88rpx;
  height: 88rpx;
  background-color: #454b5b;
  border-radius: 12rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-weight: 600;
  font-size: 32rpx;
  color: #454b5b;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.area {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #19be6b;
}
</style>
