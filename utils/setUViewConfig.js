// uview自定义配置：https://www.uviewui.com/components/setting.html
export default function setConfig() {
  uni.$u.setConfig({
    // 修改$u.config对象的属性
    config: {},
    // 修改$u.props对象的属性
    props: {
      // 仅对BasicForm内组件生效
      BasicForm: {
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
          api: url => {
            return Promise.resolve('test')
          },
        },
        Code: {
          type: 'button',
          buttonType: 'primary',
          buttonSize: 'mini',
          textStyle: {},
          // 可以配置默认发送验证码方法，参数为表单model
          api: model => {
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
      },
      formItem: {
        borderBottom: true,
      },
    },
  })
}
