<template>
  <view
    class="flex-1 relative overflow-hidden flex border border-5"
    :style="[{height: $u.addUnit(height), backgroundColor: color, borderRadius: $u.addUnit(borderRadius) }, $u.addStyle(customStyle)]"
  >
    <!-- 遮罩层，增加宽度避免与滑块间显示空白 -->
    <view
      class="full"
      :style="{ width: `${maskWidth+halfSliderWidth}px`, backgroundColor: successColor, borderRadius: $u.addUnit(borderRadius) }"
    ></view>

    <!-- 显示文本 -->
    <view class="full text-16 flex items-center justify-center">
      <slot name="text">
        <text :style="{ color: isSuccess ? successTextColor : textColor, fontSize: $u.addUnit(fontSize) }">
          {{ text }}
        </text>
      </slot>
    </view>

    <!-- 滑槽 -->
    <movable-area ref="area" id="area" :style="{ height: $u.addUnit(height), flex: 1 }">
      <!-- 滑块 -->
      <movable-view
        ref="slider"
        id="slider"
        direction="horizontal"
        :disabled="isSuccess || disabled"
        :x="x"
        @change="onChange"
        @touchend="onEnd"
        class="flex justify-center items-center"
        :style="{width: $u.addUnit(sliderWidth || height), height: $u.addUnit(height), backgroundColor: sliderColor, borderRadius: $u.addUnit(borderRadius)}"
      >
        <slot name="icon">
          <u-icon :size="iconSize" :name="getIcon" :color="iconColor"></u-icon>
        </slot>
      </movable-view>
    </movable-area>
  </view>
</template>

<script>
export default {
  mixins: [uni.$u.mpMixin, uni.$u.mixin],
  name: 'SliderVerify',
  emits: ['success'],
  props: {
    /* 是否禁用 */
    disabled: { type: Boolean, default: false },
    /* 高度 */
    height: {
      type: [String, Number],
      default: '80rpx',
    },
    /* 滑块宽度，默认同高度 */
    sliderWidth: String,
    /* 背景颜色 */
    color: {
      type: String,
      default: uni.$u.color.bgColor,
    },
    /* 滑动遮罩层颜色 */
    successColor: {
      type: String,
      default: uni.$u.color.primary,
    },
    /* 滑块颜色 */
    sliderColor: {
      type: String,
      default: uni.$u.color.contentColor,
    },
    /* 显示文字 */
    text: { type: String, default: '' },
    /* 文字颜色 */
    textColor: {
      type: String,
      default: uni.$u.color.contentColor,
    },
    /* 文本大小 */
    fontSize: {
      type: [Number, String],
      default: '16px',
    },
    /* 滑动完成时文字颜色 */
    successTextColor: {
      type: String,
      default: '#ffffff',
    },
    /* 图标颜色 */
    iconColor: {
      type: String,
      default: '#ffffff',
    },
    /* 图标大小 */
    iconSize: {
      type: [Number, String],
      default: 24,
    },
    /* 整体圆角大小 */
    borderRadius: {
      type: [Number, String],
      default: '16rpx',
    },
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
      if (this.isSuccess)
        return 'checkmark-circle'
      if (this.disabled)
        return 'close-circle'
      return 'arrow-right-double'
    },
    halfSliderWidth() {
      const value = this.sliderWidth || this.height
      const width = (Number.parseFloat(value) / 2) || 100
      return Math.min(width, 40)
    },
  },
  methods: {
    onChange(e) {
      this.maskWidth = e.detail.x
    },
    async onEnd(e) {
      if (this.isSuccess)
        return
      const area = await this.getSize('area')
      const slider = await this.getSize('slider')
      const end = Math.floor(area.left + area.width)
      const pos = Math.floor(slider.left + slider.width)
      if (pos >= end) {
        this.isSuccess = true
        this.$emit('success')
      }
      else {
        this.reset()
      }
    },
    getSize(name) {
      return new Promise((resolve, reject) => {
        // #ifdef APP-NVUE
        const dom = weex.requireModule('dom')
        dom.getComponentRect(this.$refs[name], (option) => {
          resolve(option.size)
        })
        // #endif

        // #ifndef APP-NVUE
        uni
          .createSelectorQuery()
          .in(this)
          .select(`#${name}`)
          .boundingClientRect((data) => {
            resolve(data)
          })
          .exec()
        // #endif
      })
    },
    reset() {
      this.isSuccess = false
      this.x = 1
      setTimeout(() => {
        this.x = 0
      }, 50)
    },
  },
}
</script>

<style lang="scss" scoped>
.full {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
