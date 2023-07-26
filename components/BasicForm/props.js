// 查看 README.md BasicForm 介绍
export default {
  props: {
    isNVUE: {
      type: Boolean,
      default: false,
    },
    schemas: {
      type: Array,
      required: true,
      validator: schemas => {
        return schemas.every(item => {
          // 验证组件名
          const componentCorrect = ['Calendar', 'Picker', 'DatetimePicker', 'Rate', 'NumberBox', 'Upload', 'Code',
            'Input', 'Textarea', 'Checkbox', 'Radio', 'Switch', 'Slider',
          ].includes(item.component)
          // 验证选项组件options
          let optionsCorrect = true
          if (['Checkbox', 'radio'].includes(item.component)) {
            optionsCorrect = !!item.componentProps?.options?.length
          }
          if (item.component === 'Picker') {
            optionsCorrect = !!item.componentProps?.options?.length || !!item.componentProps?.columns?.length
          }
          // 验证验证码组件发送验证码方法
          let codeCorrect = true
          if (!uni.$u.props.BasicForm.Code.api && item.component === 'Code') {
            codeCorrect = typeof item.componentProps.api === 'function'
          }
          return componentCorrect && optionsCorrect && codeCorrect
        })
      },
    },
    // 是否整体禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 自动设置placeholder
    autoSetPlaceholder: {
      type: Boolean,
      default: true,
    },
    // 验证规则
    rules: {
      type: [Object, Function, Array],
      default: uni.$u.props.form.rules,
    },
    // 有错误时的提示方式，message-提示信息，toast-进行toast提示
    // border-bottom-下边框呈现红色，none-无提示
    errorType: {
      type: String,
      default: uni.$u.props.form.errorType,
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: Boolean,
      default: uni.$u.props.form.borderBottom,
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: uni.$u.props.form.labelPosition,
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: uni.$u.props.form.labelWidth,
    },
    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: uni.$u.props.form.labelAlign,
    },
    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: uni.$u.props.form.labelStyle,
    },
  },
}
