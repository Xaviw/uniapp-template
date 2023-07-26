<template>
  <view class="px-24 bg-white">
    <view class="text-24 font-bold text-primary text-center">HELLO</view>
    <BasicForm ref="formRef" :model="model" :schemas="schemas" labelWidth="auto" :rules="rules">
      <view class="border-2 border-dashed border-info text-center p-12" slot="uploadDefault">自定义上传插槽</view>
    </BasicForm>
    <u-button type="primary" @click="onConsole">Console Form</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      rules: {
        'a.calendar': {
          required: true
        }
      },
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
            options: [
              {label: 'A', value: 1},
              {label: 'B', value: 2},
            ]
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
          componentProps: {
            uploadText: '自定义上传',
            maxCount: 1
          }
        },
        {
          prop: 'code',
          label: '验证码输入框',
          component: 'Code',
          componentProps: {
            // buttonDisabled: true,
            type: 'text'
          }
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
              {label: 'A', value: 1, customStyle:'margin-right: 16px'},
              {label: 'B', value: 2, customStyle:'margin-right: 16px'},
              {label: 'C', value: 3, customStyle:'margin-right: 16px'},
              {label: 'D', value: 4, customStyle:'margin-right: 16px'},
              {label: 'E', value: 5, customStyle:'margin-right: 16px'},
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
              {label: 'C', value: 3},
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
  methods: {
    onConsole(){
      console.log(this.$refs.formRef);
      this.$refs.formRef.validate()
    }
  }
}
</script>

<style lang="scss" scoped></style>
