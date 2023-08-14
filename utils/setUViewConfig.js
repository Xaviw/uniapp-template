// uview自定义配置：https://www.uviewui.com/components/setting.html
export default function setConfig() {
  uni.$u.setConfig({
    // 修改$u.config对象的属性
    config: {},
    // 修改$u.props对象的属性
    // uview组件默认props并未关联scss变量或$u.color属性，所以修改主题色后还需要修改组件颜色
    props: {
      formItem: {
        borderBottom: true,
      },
      // 仅对CustomForm内组件生效
      CustomForm: {
        Calendar: {
          closeOnClickOverlay: true,
        },
        Picker: {
          labelField: 'label',
          valueField: 'value',
          closeOnClickOverlay: true,
        },
        DatetimePicker: {
          format: true,
          closeOnClickOverlay: true,
        },
        Upload: {
          // 默认的上传方法，需要返回图片链接字符串
          api: (url) => {
            console.log('url: ', url)
            return Promise.resolve('test')
          },
        },
        Code: {
          type: 'button',
          buttonType: 'primary',
          buttonSize: 'mini',
          textStyle: {},
          // 输入框最大长度
          maxlength: 4,
          // 输入框类型
          inputType: 'number',
          // 可以配置默认发送验证码方法，参数为表单model
          api: (model) => {
            console.log('model: ', model)
            return Promise.resolve('test')
          },
        },
        Checkbox: {
          labelField: 'label',
          valueField: 'value',
        },
        Radio: {
          labelField: 'label',
          valueField: 'value',
        },
        Input: {
          border: 'none',
        },
        Keyboard: {
          safeAreaInsetBottom: true,
          closeOnClickOverlay: true,
          autoChange: true,
        },
      },
    },
    // 扩充未保存的scss变量（应与uview.theme.scss同步）
    color: {
      bgColor: '#f3f4f6',
      disabledColor: '#c8c9cc',
      primaryDark: '#398ade',
      primaryDisabled: '#9acafc',
      primaryLight: '#ecf5ff',
      warningDark: '#f1a532',
      warningDisabled: '#f9d39b',
      warningLight: '#fdf6ec',
      successDark: '#53c21d',
      successDisabled: '#a9e08f',
      successLight: '#f5fff0',
      errorDark: '#e45656',
      errorDisabled: '#f7b2b2',
      errorLight: '#fef0f0',
      infoDark: '#767a82',
      infoDisabled: '#c4c6c9',
      infoLight: '#f4f4f5',
    },
  })
}
