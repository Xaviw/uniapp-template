<template>
  <view>
    <canvas :style="{ width: width + 'px', height: height + 'px' }" canvas-id="imgcanvas" @error="canvasIdErrorCallback">
    </canvas>
  </view>
</template>

<script>
export default {
  name: 'Captcha',
  props: {
    width: {
      type: Number,
      default: 70,
    },
    height: {
      type: Number,
      default: 30,
    },
    code: {
      type: String,
      default: '',
    },
    codeLength: {
      type: Number,
      default: 4,
    },
    isRandom: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    code: {
      handler(newCode) {
        if (newCode || this.isRandom)
          this.render()
      },
      immediate: true,
    },
  },
  methods: {
    render() {
      const context = uni.createCanvasContext('imgcanvas', this)
      const w = this.width
      const h = this.height
      const fontSize = 18
      const padding = (w - fontSize * this.codeLength) / (this.codeLength + 1)
      context.setFillStyle('white')
      context.setLineWidth(5)
      context.fillRect(0, 0, w, h)
      const pool = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'I',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'S',
        'Y',
        'Z',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
      ]
      let str = ''
      for (let i = 0; i < this.codeLength; i++) {
        const c = this.isRandom ? pool[this.rn(0, pool.length - 1)] : this.code[i]
        const deg = this.rn(-30, 30)
        context.setFontSize(fontSize)
        context.setTextBaseline('top')
        context.setFillStyle(this.rc(80, 150))
        context.save()
        context.translate(fontSize * i + padding, Number.parseInt(h / 1.5))
        context.rotate((deg * Math.PI) / 180)
        context.fillText(c, 0, -15)
        context.restore()
        str += c
      }
      uni.setStorage({
        key: 'imgcode',
        data: str,
      })
      for (let i = 0; i < this.codeLength * 10; i++) {
        context.beginPath()
        context.arc(this.rn(0, w), this.rn(0, h), 1, 0, 2 * Math.PI)
        context.closePath()
        context.setFillStyle(this.rc(150, 200))
        context.fill()
      }
      context.draw()
    },
    rc(min, max) {
      const r = this.rn(min, max)
      const g = this.rn(min, max)
      const b = this.rn(min, max)
      return `rgb(${r},${g},${b})`
    },
    rn(max, min) {
      return Number.parseInt(Math.random() * (max - min)) + min
    },
    canvasIdErrorCallback(e) {
      console.error(e.detail.errMsg)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
