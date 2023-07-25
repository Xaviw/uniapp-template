<template>
  <view>
    <!-- 表单配置 -->
    <u--form
      ref="formRef"
      :model="model"
      :errorType="errorType"
      :borderBottom="borderBottom"
      :labelPosition="labelPosition"
      :labelWidth="labelWidth"
      :labelAlign="labelAlign"
      :labelStyle="labelStyle"
      :rules="rules"
    >
      <!-- 循环表单项 -->
      <u-form-item
        v-for="item of items"
        :key="getName(item)"
        :label="item.label"
        :prop="item.prop"
        :borderBottom="item.borderBottom"
        :labelWidth="item.labelWidth"
        :labelPosition="item.labelPosition"
        :rightIcon="item.rightIcon"
        :leftIcon="item.leftIcon"
        :leftIconStyle="item.leftIconStyle"
        :required="item.required"
        @click="showItem(item, item.onClick)"
      >
        <!-- 请选择 -->
        <template v-if="['Calendar', 'Picker', 'DatetimePicker'].includes(item.component)">
          <u--input
            :value="getShownValue(item)"
            :placeholder="item.componentProps.placeholder"
            border="none"
            disabled
            disabledColor="#ffffff"
          />
          <u-icon slot="right" name="arrow-right" />
        </template>

        <!-- Calendar、Picker、DatetimePicker中： -->
        <!-- flex:0避免占input的位置， -->
        <!-- @click.native.stop避免点击背景隐藏时冒泡到form-item的点击事件 -->
        <!-- Calendar、Picker没有v-model -->

        <!-- Calendar -->
        <template v-if="item.component === 'Calendar'">
          <u-calendar
            style="flex: 0"
            closeOnClickOverlay
            v-bind="item.componentProps"
            :show="item.visible"
            :ref="`${getName(item)}Ref`"
            :disabled="isDisabled(item)"
            @confirm="(...e) => closeItem(item, set.bind(null, model, item.prop, e[0]), item.componentProps.onConfirm, ...e)"
            @close="(...e) => closeItem(item, null, item.componentProps.onClose, ...e)"
            @click.native.stop
          />
        </template>

        <!-- Picker -->
        <template v-else-if="item.component === 'Picker'">
          <u-picker
            style="flex: 0"
            closeOnClickOverlay
            :columns="item.componentProps.options"
            :keyName="item.componentProps.labelField || 'label'"
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :show="item.visible"
            :disabled="isDisabled(item)"
            @confirm="onPickerConfirm(item, $event)"
            @close="(...e) => closeItem(item, null, item.componentProps.onClose, ...e)"
            @cancel="(...e) => closeItem(item, null, item.componentProps.onCancel, ...e)"
            @change="onPickerChange($event, `${getName(item)}Ref`, item.componentProps.onChange)"
            @click.native.stop
          />
        </template>

        <!-- DatetimePicker -->
        <template v-else-if="item.component === 'DatetimePicker'">
          <u-datetime-picker
            style="flex: 0"
            closeOnClickOverlay
            v-bind="item.componentProps"
            :value="get(model, item.prop)"
            :show="item.visible"
            :ref="`${getName(item)}Ref`"
            :disabled="isDisabled(item)"
            @confirm="onDatetimeConfirm(item, $event)"
            @close="(...e) => closeItem(item, null, item.componentProps.onClose, ...e)"
            @cancel="(...e) => closeItem(item, null, item.componentProps.onCancel, ...e)"
            @change="(...e) => onMethod(null, item.componentProps.onChange, ...e)"
            @click.native.stop
          />
        </template>

        <!-- Rate -->
        <template v-else-if="item.component === 'Rate'">
          <u-rate
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @change="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onChange, ...e)"
          />
        </template>

        <!-- NumberBox -->
        <template v-else-if="item.component === 'NumberBox'">
          <u-number-box
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @focus="(...e) => onMethod(null, item.componentProps.onFocus, ...e)"
            @blur="(...e) => onMethod(null, item.componentProps.onBlur, ...e)"
            @change="(...e) => onMethod(set.bind(null, model, item.prop, e[0].value), item.componentProps.onChange, ...e)"
            @overlimit="(...e) => onMethod(null, item.componentProps.onOverlimit, ...e)"
          >
            <slot :name="`${getName(item)}Minus`"></slot>
            <slot :name="`${getName(item)}Input`"></slot>
            <slot :name="`${getName(item)}Plus`"></slot>
          </u-number-box>
        </template>

        <!-- Upload -->
        <template v-else-if="item.component === 'Upload'">
          <u-upload
            v-bind="item.componentProps"
            :fileList="item.fileList"
            :name="getName(item)"
            :disabled="isDisabled(item)"
            :ref="`${getName(item)}Ref`"
            @afterRead="afterRead(item, $event)"
            @delete="deleteFile(item, $event)"
            @beforeRead="(...e) => onMethod(null, item.componentProps.beforeRead, ...e)"
            @oversize="(...e) => onMethod(null, item.componentProps.oversize, ...e)"
            @clickPreview="(...e) => onMethod(null, item.componentProps.clickPreview, ...e)"
          >
            <slot :name="getName(item)"></slot>
          </u-upload>
        </template>

        <!-- Code -->
        <template v-else-if="item.component === 'Code'">
          <u--input
            :value="get(model, item.prop)"
            @change="set.bind(null, model, item.prop, $event)"
            border="none"
            :placeholder="item.componentProps.placeholder"
            :disabled="isDisabled(item)"
          ></u--input>
          <!-- 按钮类型 -->
          <u-button
            v-if="item.componentProps.type === 'button'"
            slot="right"
            @click="getCode(item)"
            :text="item.tips"
            :type="item.componentProps.buttonType || 'primary'"
            :size="item.componentProps.buttonSize || 'mini'"
            :disabled="isDisabled(item) || item.buttonDisabled"
          />
          <!-- 文本类型 -->
          <text
            v-else-if="item.componentProps.type === 'text'"
            slot="right"
            class="text-link"
            :style="item.componentProps.textStyle"
            @click="getCode(item, isDisabled(item))"
          >
            {{ item.tips }}
          </text>

          <u-code
            :ref="`${getName(item)}Ref`"
            v-bind="item.componentProps"
            :uniqueKey="getName(item)"
            @change="(...e) => onMethod(null, item.componentProps.onChange, ...e)"
            @start="onCodeStart(item)"
            @end="onCodeEnd(item)"
          />
        </template>

        <!-- Input -->
        <template v-else-if="item.component === 'Input' && isNVUE">
          <u--input
            border="none"
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @blur="(...e) => onMethod(null, item.componentProps.onBlur, ...e)"
            @focus="(...e) => onMethod(null, item.componentProps.onFocus, ...e)"
            @confirm="(...e) => onMethod(null, item.componentProps.onConfirm, ...e)"
            @keyboardheightchange="(...e) => onMethod(null, item.componentProps.onKeyboardheightchange, ...e)"
            @input="(...e) => onMethod(null, item.componentProps.onInput, ...e)"
            @change="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onChange, ...e)"
            @clear="(...e) => onMethod(null, item.componentProps.onClear, ...e)"
          >
            <slot :name="`${getName(item)}Prefix`"></slot>
            <slot :name="`${getName(item)}suffix`"></slot>
          </u--input>
        </template>
        <template v-else-if="item.component === 'Input' && !isNVUE">
          <u-input
            border="none"
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @blur="(...e) => onMethod(null, item.componentProps.onBlur, ...e)"
            @focus="(...e) => onMethod(null, item.componentProps.onFocus, ...e)"
            @confirm="(...e) => onMethod(null, item.componentProps.onConfirm, ...e)"
            @keyboardheightchange="(...e) => onMethod(null, item.componentProps.onKeyboardheightchange, ...e)"
            @input="(...e) => onMethod(null, item.componentProps.onInput, ...e)"
            @change="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onChange, ...e)"
            @clear="(...e) => onMethod(null, item.componentProps.onClear, ...e)"
          >
            <slot :name="`${getName(item)}Prefix`"></slot>
            <slot :name="`${getName(item)}suffix`"></slot>
          </u-input>
        </template>

        <!-- Textarea -->
        <template v-else-if="item.component === 'Textarea'">
          <u--textarea
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @blur="(...e) => onMethod(null, item.componentProps.onBlur, ...e)"
            @focus="(...e) => onMethod(null, item.componentProps.onFocus, ...e)"
            @confirm="(...e) => onMethod(null, item.componentProps.onConfirm, ...e)"
            @keyboardheightchange="(...e) => onMethod(null, item.componentProps.onKeyboardheightchange, ...e)"
            @input="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onInput, ...e)"
            @linechange="(...e) => onMethod(null, item.componentProps.onLinechange, ...e)"
          />
        </template>

        <!-- Checkbox -->
        <template v-else-if="item.component === 'Checkbox'">
          <u-checkbox-group
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @change="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onChange, ...e)"
          >
            <u-checkbox
              v-for="(option, index) in item.componentProps.options"
              v-bind="option"
              :key="index"
              :label="item.componentProps.labelField ? option[item.componentProps.labelField] : option.label"
              :name="item.componentProps.valueField ? options[item.componentProps.valueField] : option.value"
            />
          </u-checkbox-group>
        </template>

        <!-- Radio -->
        <template v-else-if="item.component === 'Radio'">
          <u-radio-group
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @change="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onChange, ...e)"
          >
            <u-radio
              v-for="(option, index) in item.componentProps.options"
              v-bind="option"
              :key="index"
              :label="item.componentProps.labelField ? option[item.componentProps.labelField] : option.label"
              :name="item.componentProps.valueField ? options[item.componentProps.valueField] : option.value"
              @change="(...e) => onMethod(null, option.onChange, ...e)"
            >
            </u-radio>
          </u-radio-group>
        </template>

        <!-- Switch -->
        <template v-else-if="item.component === 'Switch'">
          <u-switch
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @change="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onChange, ...e)"
            @input="(...e) => onMethod(null, item.componentProps.onInput, ...e)"
          />
        </template>

        <!-- Slider -->
        <template v-else-if="item.component === 'Slider'">
          <u-slider
            v-bind="item.componentProps"
            :ref="`${getName(item)}Ref`"
            :value="get(model, item.prop)"
            :disabled="isDisabled(item)"
            @change="(...e) => onMethod(null, item.componentProps.onChange, ...e)"
            @input="(...e) => onMethod(set.bind(null, model, item.prop, e[0]), item.componentProps.onInput, ...e)"
            @changing="(...e) => onMethod(null, item.componentProps.onChanging, ...e)"
          />
        </template>
      </u-form-item>
    </u--form>

    <ImageCompress ref="imageCompressRef" />
  </view>
</template>

<script>
import { cloneDeep, set, get } from 'lodash-es'
import dayjs from '@/uni_modules/uview-ui/libs/util/dayjs.js'
import { uploadFile } from '@/apis'
import props from './props.js'

export default {
  name: 'BasicForm',
  mixins: [props],
  mounted() {
    // 通过setRules注入rules兼容微信小程序
    // 自动填充trigger与message
    if (this.$refs.formRef && this.rules) {
      const ruleMap = cloneDeep(this.rules)
      if (typeof ruleMap == 'object') {
        for (let prop in ruleMap) {
          const rules = ruleMap[prop]
          const { label, component } = this.items.find((item) => item.prop === prop)
          let prefix = '请输入'
          if (['Calender', 'Picker', 'DatetimePicker', 'Rate', 'Checkbox', 'Radio', 'Switch', 'Slider'].includes(component)) {
            prefix = '请选择'
          } else if (component === 'Upload') {
            prefix = '请上传'
          }
          this.fillRuleMessage(rules, label, prefix)
        }
      }
      this.$refs.formRef.setRules(ruleMap)
    }
  },
  data() {
    return { }
  },
  computed: {
    items() {
      if (!this.schemas?.length) return []
      const data = cloneDeep(this.schemas)
      const result = data.map((item) => {
        if (!item.componentProps) item.componentProps = {}
        if (!item.componentProps.placeholder && this.autoSetPlaceholder) {
          if (['Calendar', 'Picker', 'DatetimePicker'].includes(item.component)) {
            item.componentProps.placeholder = `请选择${item.label || ''}`
          } else if (['Code', 'Input', 'Textarea'].includes(item.component)) {
            item.componentProps.placeholder = `请输入${item.label || ''}`
          }
        }

        if(item.component === 'DatetimePicker' && !item.componentProps.format) {
          item.componentProps.format = true
        }

        if(item.component === 'Code' && !item.componentProps.type) {
          item.componentProps.type = 'button'
        }

        if (['Calendar', 'Textarea', 'DatetimePicker'].includes(item.component) && typeof item.componentProps.formatter === 'function') {
          if(!this.$refs[`${this.getName(item)}Ref`]?.[0]) {
            this.$nextTick(() => {
          this.$refs[`${this.getName(item)}Ref`][0].setFormatter(item.componentProps.formatter)
            })
          }
        }
        return {
          label: item.label || uni.$u.props.formItem.label,
          prop: item.prop || uni.$u.props.formItem.prop,
          borderBottom: item.borderBottom || uni.$u.props.formItem.borderBottom,
          labelPosition: item.labelPosition || uni.$u.props.formItem.labelPosition,
          labelWidth: item.labelWidth || uni.$u.props.formItem.labelWidth,
          rightIcon: item.rightIcon || uni.$u.props.formItem.rightIcon,
          leftIcon: item.leftIcon || uni.$u.props.formItem.leftIcon,
          leftIconStyle: item.leftIconStyle || uni.$u.props.formItem.leftIconStyle,
          required: item.required || uni.$u.props.formItem.required,
          component: item.component,
          componentProps: item.componentProps,
          show: item.show || true,
          disabled: item.disabled || false,
          dynamicDisabled: item.dynamicDisabled || false,
          onClick: item.onClick,
          visible: ['Calendar', 'Picker', 'DatetimePicker'].includes(item.component) ? false : undefined,
          fileList: item.component == 'Upload' ? [] : undefined,
          buttonDisabled: item.component == 'Code' ? false : undefined,
          tips: item.component == 'Code' ? item.tips || '获取验证码' : undefined,
          groupProps: ['Checkbox', 'Radio'].includes(item.component) ? item.componentProps.groupProps || {} : undefined,
          options: ['Checkbox', 'Radio'].includes(item.component) ? item.componentProps.options || [] : undefined,
        }
      })
      return result
    },
  },
  methods: {
    get,
    set,
    // 实现Form方法,方便直接通过组件ref调用
    validate() {
      this.$refs.formRef.validate()
    },
    setRules() {
      this.$refs.formRef.setRules()
    },
    validateField() {
      this.$refs.formRef.validateField()
    },
    resetFields() {
      this.$refs.formRef.resetFields()
    },
    clearValidate() {
      this.$refs.formRef.clearValidate()
    },
    // 补充rule message
    fillRuleMessage(rules, label, prefix) {
      if (Array.isArray(rules)) {
        for (let rule of rules) {
          this.fillRuleMessage(rule, label, prefix)
        }
      } else if (typeof rules === 'object' && !rules.message) {
        if (!rules.trigger) rules.trigger = ['blur', 'change']
        if (rules.required) {
          rules.message = prefix + label
        } else if (rules.type) {
          rules.message = '输入类型错误'
        } else if (rules.len) {
          rules.message = `输入长度要求${rules.len}位`
        } else {
          rules.message = '校验不通过'
        }
      }
    },
    // HACK:解决HbuilderX编译报错
    toJSON() {},
    // 绑定事件
    onMethod(func1, func2, ...e) {
      func1?.()
      func2?.(...e)
    },
    // 获取Calendar|Picker|DatetimePicker值
    getShownValue(item) {
      const value = get(this.model, `${item.prop}Text`) || get(this.model, item.prop)
      if (typeof value === 'string') return value
      if (value === undefined || value === null) return ''
      return value?.toString()
    },
    // 获取表单项key，处理prop可能带"."的情况
    getName(item) {
      if (item.prop.includes('.')) {
        const names = item.prop.split('.').map((name, index) => {
          if (index == 0) return name.toLowerCase()
          return name[0].toUpperCase() + name.slice(1).toLowerCase()
        })
        return names.join('')
      }
      return item.prop
    },
    // 判断是否应该禁用
    isDisabled(item) {
      const commonDisabled = !!this.disabled
      const itemDisabled = !!item.disabled
      let dynamicDisabled = false
      if (typeof item.dynamicDisabled == 'boolean') {
        dynamicDisabled = item.dynamicDisabled
      } else if (typeof item.dynamicDisabled == 'function') {
        dynamicDisabled = item.dynamicDisabled({
          schema: item,
          model: this.model,
          prop: item.prop,
        })
      }
      return commonDisabled || itemDisabled || dynamicDisabled
    },
    // 'Calendar', 'Picker', 'DatetimePicker'的打开操作
    showItem(item, func, ...e) {
      item.visible = true
      func?.(...e)
      uni.hideKeyboard()
      this.$forceUpdate()
    },
    // 'Calendar', 'Picker', 'DatetimePicker'的关闭操作
    closeItem(item, func1, func2, ...e) {
      item.visible = false
      func1?.()
      func2?.(...e)
      this.$forceUpdate()
    },
    // Picker切换事件,可以动态设置多列联动
    onPickerChange(e, refName, func) {
      // 微信小程序无法将picker实例传出来，只能通过ref操作
      e.picker = this.$refs[refName]
      func?.(e)
    },
    // Picker没有v-model,需要手动保存数据
    // e为{indexs: number[], value: any[], values: object[][]}
    onPickerConfirm(item, e) {
      const valueField = item.componentProps.valueField || 'value'
      const labelField = item.componentProps.labelField || 'label'
      const actualValue = e.value.map((value) => value[valueField])
      const labels = e.value.map((value) => value[labelField])
      this.model[item.prop] = e.value.length === 1 ? actualValue[0] : actualValue
      this.model[`${item.prop}Text`] = e.value.length === 1 ? labels[0] : labels
      this.closeItem(item, null, item.componentProps.onConfirm, { ...e, actualValue, labels })
    },
    onDatetimeConfirm(item, e){
      let value = dayjs(e.value).format('YYYY-MM-DD HH:mm')
      if(e.mode === 'date') {
        value = dayjs(e.value).format('YYYY-MM-DD')
      } else if (e.mode === 'time') {
        value = dayjs(e.value).format('HH:mm')
      } else if (e.mode === 'year-month') {
        value = dayjs(e.value).format('YYYY-MM')
      }
      if(item.componentProps.format) {
        set(this.model, item.prop, value)
      } else {
        set(this.model, item.prop, e.value)
      }
      this.closeItem(item, null, item.componentProps.onConfirm, e)
    },
    // Upload删除文件
    deleteFile(item, e) {
      item.fileList.splice(e.index, 1)
      if (item.componentProps.multiple) {
        const data = get(this.model, item.prop)
        data.splice(e.index, 1)
      } else {
        set(this.model, item.prop, undefined)
      }
    },
    // Upload新增文件
    async afterRead(item, e) {
      // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式,统一为数组处理
      const lists = [].concat(e.file)
      let fileListLen = item.fileList.length
      lists.map((item) => {
        item.fileList.push({
          ...item,
          status: 'uploading',
          message: '上传中',
        })
      })
      for (let i = 0; i < lists.length; i++) {
        let url = lists[i].url
        if (item.componentProps.compress && lists[i].type.startsWith('image')) {
          try {
            url = await this.$refs.imageCompressRef.compress({
              src: url,
              ...item.componentProps.compress,
            })
          } catch (e) {
            console.log('压缩失败', e)
          }
        }
        const result = await this.uploadFilePromise(url)
        if (item.componentProps.multiple) {
          const data = get(this.model, item.prop)
          data.push(result)
        } else {
          set(this.model, item.prop, result)
        }
        const file = item.fileList[fileListLen]
        this.splice(
          fileListLen,
          1,
          Object.assign(file, {
            status: 'success',
            message: '',
            url: result,
          })
        )
        fileListLen++
      }
    },
    // TODO: Upload上传方法,可能需要修改参数
    uploadFilePromise(url) {
      return uploadFile({
        filePath: url,
        name: 'file',
        formData: {
          bizType: 'driver',
        },
      })
    },
    // 验证码组件获取验证码
    getCode(item, disabled) {
      if (disabled) return
      if (this.$refs[`${this.getName(item)}Ref`].canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: '正在获取验证码',
        })
        setTimeout(() => {
          uni.hideLoading()
          // 这里此提示会被this.start()方法中的提示覆盖
          uni.$u.toast('验证码已发送')
          // 通知验证码组件内部开始倒计时
          this.$refs[`${this.getName(item)}Ref`].start()
        }, 2000)
      } else {
        uni.$u.toast('请倒计时结束后再发送')
      }
    },
    // 验证码开始倒计时回调
    onCodeStart(item) {
      item.buttonDisabled = true
      item.componentProps.onStart?.()
    },
    // 验证码结束倒计时回调
    onCodeEnd(item) {
      item.buttonDisabled = false
      item.componentProps.onEnd?.()
    },
  },
}
</script>
