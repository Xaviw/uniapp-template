<template>
  <view class="text-center px-24 bg-white">
    <text class="text-24 font-bold text-primary">HELLO</text>
    <BasicForm :model="model" :schemas="schemas" labelWidth="auto"></BasicForm>
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      schemas: [
        {
          prop: 'a.calendar',
          label: '日历',
          component: 'Calendar'
        },
        {
          prop: 'picker',
          label: '选择器',
          component: 'Picker',
          componentProps: {
            options: [[
              {label: 'A', value: 1},
              {label: 'B', value: 2},
            ], [
              {label: 'A1', value: 11},
              {label: 'A2', value: 22},
            ]]
          }
        },
        {
          prop: 'datetimePicker',
          label: '日期时间选择器',
          component: 'DatetimePicker',
          componentProps: {
            mode: 'datetime'
          }
        },
        {
          prop: 'rate',
          label: '评分',
          component: 'Rate'
        },
        {
          prop: 'numberBox',
          label: '步进器',
          component: 'NumberBox'
        },
        {
          prop: 'upload',
          label: '上传',
          component: 'Upload',
        },
        {
          prop: 'code',
          label: '验证码输入框',
          component: 'Code'
        },
        {
          prop: 'input',
          label: '输入框',
          component: 'Input'
        },
        {
          prop: 'textarea',
          label: '文本域',
          component: 'Textarea'
        },
        {
          prop: 'checkbox',
          label: '复选框',
          component: 'Checkbox',
          componentProps: {
            options: [
              {label: 'A', value: 1},
              {label: 'B', value: 2},
            ]
          }
        },
        {
          prop: 'radio',
          label: '单选框',
          component: 'Radio',
          componentProps: {
            options: [
              {label: 'A', value: 1},
              {label: 'B', value: 2},
            ]
          }
        },
        {
          prop: 'switch',
          label: '开关选择器',
          component: 'Switch'
        },
        {
          prop: 'slider',
          label: '滑动选择器',
          component: 'Slider'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped></style>
