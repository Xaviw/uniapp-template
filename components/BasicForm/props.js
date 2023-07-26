export default {
  props: {
    // input插槽需要判断是否nvue页面
    isNVUE: {
      type: Boolean,
      default: false,
    },
    // Calendar和Picker不能v-model绑定数据,Picker默认会保存values数组,Calendar默认会保存全部日期数据
    // 可以通过再onConfirm方法中手动保存数据,支持保存`${propName}Text`属性用于展示
    // position为left时rule message会添加labelWidth的margin,labelWidth为auto时message会靠右对齐
    // rules未设置trigger时会自动设置为['blur','trigger']
    // rule未设置message时,会自动补充
    /* 表单内容
     * @param {string} component - 组件类型：Calendar|Picker|DatetimePicker|Rate|NumberBox|Upload|Code|Input|Textarea|Checkbox|Radio|Switch|Slider
     * @param {Object} componentProps - 组件参数
     * @param {Function} onClick - 单击事件
     * @param {boolean|Function} ifShow - 组件是否显示
     * @param {boolean} disabled - 是否禁用
     * @param {boolean|Function} dynamicDisabled - 动态判断是否禁用
     * 组件插槽使用propNameRef
     * 组件默认插槽使用propNameDefault
     * 组件具名插槽使用propNameSlotName
     * upload组件扩展compress属性,值为quality(压缩质量0-1)和fileType(图片扩展名，如png)
     * checkbox组件componentProps为{...groupProps, options: [{label: '', value: '', labelField: 'label', valueField: 'value', ...boxProps}]}
     * radio组件componentProps为{...groupProps, options: [{label: '', value: '', labelField: 'label', valueField: 'value', ...radioProps}]}
     * code组件增加type配置，值为button|text,默认button,以及对应的buttonType、buttonSize、textStyle
     * picker keyName 改为labelField控制默认label;columns也支持写为options，支持单层数组
     * checkbox和radio改为labelField控制label,默认label;valueField控制name,默认value
     * DatetimePicker增加format属性,表示是存储格式化还是时间戳,默认true
     */
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
    // 当前form的需要验证字段的集合
    model: {
      type: Object,
      default: uni.$u.props.form.model,
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
