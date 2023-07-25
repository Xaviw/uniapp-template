export default {
  props: {
    // Calendar和Picker不能v-model绑定数据,Picker默认会保存values数组,Calendar默认会保存全部日期数据
    // 可以通过再onConfirm方法中手动保存数据,支持保存`${propName}Text`属性用于展示
    // position为left时rule message会添加labelWidth的margin,如果要去掉这段margin需要设置margin大于0(如0.1),因为源码中使用labelWdith || parent.labelWidth取值
    // rules未设置trigger时会自动设置为['blur','trigger']
    // rule未设置message时,会自动补充
    /* 表单内容
     * @param {string} prop - 字段名
     * @param {string} label - 标签名
     * @param {boolean} borderBootom - 下边框
     * @param {string} labelWidth - 标签宽度，覆盖表单同名参数
     * @param {string} labelPosition - 标签位置，覆盖表单同名参数
     * @param {string} rightIcon - 右侧图标名（仅支持内置）或图片地址
     * @param {string} leftIcon - 左侧图标名（仅支持内置）或图片地址
     * @param {string|Object} leftIconStyle - 左侧自定义字体图标的样式
     * @param {string|Object} required - 是否显示必填"*"号（仅展示，swiper-item展示需设置根节点margin）
     * @param {string} component - 组件类型：Calendar|Picker|DatetimePicker|Rate|NumberBox|Upload|Code|Input|Textarea|Checkbox|Radio|Switch|Slider
     * @param {Object} componentProps - 组件参数
     * @param {Function} onClick - 单击事件
     * @param {boolean|Function} show - 组件是否显示
     * @param {boolean} disabled - 是否禁用
     * @param {boolean|Function} dynamicDisabled - 动态判断是否禁用
     * upload组件插槽使用propNameRef
     * upload组件扩展compress属性,值为quality(压缩质量0-1)和fileType(图片扩展名入png)
     * checkbox组件componentProps为{groupProps: {onChange: ()=>{}}, options: [{label: '', value: '', ...boxProps}]}
     * radio组件componentProps为{groupProps: {onChange: ()=>{}}, options: [{label: '', value: '', onChange:()=>{}, ...boxProps}]}
     */
    schemas: {
      type: Array,
      required: true,
      validator: (schemas) => {
        return schemas.every(item => ['Calendar', 'Picker', 'DatetimePicker', 'Rate', 'NumberBox', 'Upload', 'Code',
          'Input', 'Textarea', 'Checkbox', 'Radio', 'Switch', 'Slider'
        ].includes(item.component))
      }
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
      default: uni.$u.props.form.model
    },
    // 验证规则
    rules: {
      type: [Object, Function, Array],
      default: uni.$u.props.form.rules
    },
    // 有错误时的提示方式，message-提示信息，toast-进行toast提示
    // border-bottom-下边框呈现红色，none-无提示
    errorType: {
      type: String,
      default: uni.$u.props.form.errorType
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: Boolean,
      default: uni.$u.props.form.borderBottom
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: uni.$u.props.form.labelPosition
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: uni.$u.props.form.labelWidth
    },
    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: uni.$u.props.form.labelAlign
    },
    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: uni.$u.props.form.labelStyle
    }
  }
}
