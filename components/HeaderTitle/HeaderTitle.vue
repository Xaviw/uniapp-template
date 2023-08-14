<template>
  <view class="pb-30 flex flex-col" :style="{ paddingTop}">
    <text class="tracking-2 text-black text-24">{{title}}</text>
    <text class="mt-8" v-if="subTitle">{{subTitle}}</text>
  </view>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: String,
    hasNavbar: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    paddingTop() {
      if (this.hasNavbar) return '30px'
      const navbarHeight = uni.$u.getPx(uni.$u.props.navbar.height)
      const statusBarHeight = uni.$u.sys().statusBarHeight
      return uni.$u.addUnit(navbarHeight + statusBarHeight + 30, 'px')
    }
  }
}
</script>

<style lang="scss" scoped></style>
