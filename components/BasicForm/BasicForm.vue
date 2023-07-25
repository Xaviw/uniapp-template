<template>
  <view>
    <!-- 表单配置 -->
    <u--form ref="formRef" :model="model" :errorType="errorType" :borderBottom="borderBottom"
      :labelPosition="labelPosition" :labelWidth="labelWidth" :labelAlign="labelAlign" :labelStyle="labelStyle"
      :rules="rules">
      <!-- 循环表单项 -->
      <u-form-item v-for="(item, i) of items" :key="i" :label="item.label" :prop="item.prop"
        :borderBottom="item.borderBottom" :labelWidth="item.labelWidth" :labelPosition="item.labelPosition"
        :rightIcon="item.rightIcon" :leftIcon="item.leftIcon" :leftIconStyle="item.leftIconStyle"
        :required="item.requierd" @click="showItem(item, item.onClick)">
        <!-- 请选择 -->
        <template v-if="['Calendar', 'Picker', 'DatetimePicker'].includes(item.component)">
          <u--input :value="getSelectedValue(item)" :placeholder="item.componentProps.placeholder" border="none"
            disabled disabledColor="#ffffff" />
          <u-icon slot="right" name="arrow-right" />
        </template>

        <!-- Calendar -->
        <template v-if="item.component === 'Calendar'">
          <u-calendar style="flex: 0;" v-model="model[item.prop]" :show="item.visible" closeOnClickOverlay
            :ref="`${getName(item)}Ref`" v-bind="item.componentProps" :disabled="isDisabled(item)"
            @confirm="(...e) => onCalendarConfirm(item, ...e)"
            @close="(...e) => closeItem(item, item.componentProps.onClose, ...e)" @click.native.stop />
        </template>

        <!-- Picker -->
        <template v-else-if="item.component === 'Picker'">
          <u-picker style="flex: 0;" :show="item.visible" closeOnClickOverlay :ref="`${getName(item)}Ref`"
            v-bind="item.componentProps" :disabled="isDisabled(item)" @confirm="onPickerConfirm(item, $event)"
            @close="(...e) => closeItem(item, item.componentProps.onClose, ...e)"
            @cancel="(...e) => closeItem( item, item.componentProps.onCancel, ...e)"
            @change="onPickerChange($event, `${getName(item)}Ref`, item.componentProps.onChange)" @click.native.stop />
        </template>

        <!-- DatetimePicker -->
        <template v-else-if="item.component === 'DatetimePicker'">
          <u-datetime-picker style="flex: 0;" v-model="model[item.prop]" :show="item.visible" closeOnClickOverlay
            :ref="`${getName(item)}Ref`" v-bind="item.componentProps" :disabled="isDisabled(item)"
            @confirm="(...e) => closeItem(item, item.componentProps.onConfirm, ...e)"
            @close="(...e) => closeItem(item, item.componentProps.onClose, ...e)"
            @cancel="(...e) => closeItem( item, item.componentProps.onCancel, ...e)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)" @click.native.stop />
        </template>

        <!-- Rate -->
        <template v-else-if="item.component === 'Rate'">
          <u-rate v-model="model[item.prop]" v-bind="item.componentProps" :disabled="isDisabled(item)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)" />
        </template>

        <!-- NumberBox -->
        <template v-else-if="item.component === 'NumberBox'">
          <u-number-box v-model="model[item.prop]" v-bind="item.componentProps" :disabled="isDisabled(item)"
            @focus="(...e) => onMethod(item.componentProps.onFocus, ...e)"
            @blur="(...e) => onMethod(item.componentProps.onBlur, ...e)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)"
            @overlimit="(...e) => onMethod(item.componentProps.onOverLimit, ...e)" />
        </template>

        <!-- Upload -->
        <template v-else-if="item.component === 'Upload'">
          <u-upload v-bind="item.componentProps" :fileList="item.fileList" :name="getName(item)"
            :disabled="isDisabled(item)" :ref="`${getName(item)}Ref`" @afterRead="afterRead(item, $event)"
            @delete="deleteFile(item, $event)" @beforeRead="(...e) => onMethod(item.componentProps.beforeRead, ...e)"
            @oversize="(...e) => onMethod(item.componentProps.oversize, ...e)"
            @clickPreview="(...e) => onMethod(item.componentProps.clickPreview, ...e)">
            <slot :name="getName(item)"></slot>
          </u-upload>
        </template>

        <!-- Code -->
        <template v-else-if="item.component === 'Code'">
          <u--input v-model="model[item.prop]" border="none" :placeholder="item.componentProps.placeholder"
            :disabled="isDisabled(item)"></u--input>
          <!-- 按钮类型 -->
          <u-button v-if="item.componentProps.type==='button'" slot="right" @click="getCode(item)" :text="item.tips"
            :type="item.componentProps.buttonType || 'primary'" :size="item.componentProps.size || 'mini'"
            :disabled="isDisabled(item) || item.buttonDisabled" />
          <!-- 文本类型 -->
          <text v-else-if="item.componentProps.type==='text'" slot="right" class="text-link"
            :style="item.componentProps.textStyle" @click="getCode(item, isDisabled(item))">{{item.tips}}</text>

          <u-code :ref="`${getName(item)}Ref`" v-bind="item.componentProps" :uniqueKey="getName(item)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)" @start="onCodeStart(item)"
            @end="onCodeEnd(item)" />
        </template>

        <!-- Input -->
        <template v-else-if="item.component === 'Input'">
          <u--input v-model="model[item.prop]" border="none" v-bind="item.componentProps" :disabled="isDisabled(item)"
            @blur="(...e) => onMethod(item.componentProps.onBlur, ...e)"
            @focus="(...e) => onMethod(item.componentProps.onFocus, ...e)"
            @confirm="(...e) => onMethod(item.componentProps.onConfirm, ...e)"
            @keyboardheightchange="(...e) => onMethod(item.componentProps.onKeyboardheightchange, ...e)"
            @input="(...e) => onMethod(item.componentProps.onInput, ...e)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)"
            @clear="(...e) => onMethod(item.componentProps.onClear, ...e)" />
        </template>

        <!-- Textarea -->
        <template v-else-if="item.component === 'Textarea'">
          <u--textarea v-model="model[item.prop]" border="none" v-bind="item.componentProps"
            :disabled="isDisabled(item)" @blur="(...e) => onMethod(item.componentProps.onBlur, ...e)"
            @focus="(...e) => onMethod(item.componentProps.onFocus, ...e)"
            @confirm="(...e) => onMethod(item.componentProps.onConfirm, ...e)"
            @keyboardheightchange="(...e) => onMethod(item.componentProps.onKeyboardheightchange, ...e)"
            @input="(...e) => onMethod(item.componentProps.onInput, ...e)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)"
            @linechange="(...e) => onMethod(item.componentProps.onLinechange, ...e)" />
        </template>

        <!-- Checkbox -->
        <template v-else-if="item.component === 'Checkbox'">
          <u-checkbox-group v-model="model[item.prop]" v-bind="(...e) => onMethod(item.componentProps.groupProps, ...e)"
            :disabled="isDisabled(item)" @change="(...e) => onMethod(item.componentProps.groupProps.onChange, ...e)">
            <u-checkbox v-for="(option, index) in item.componentProps.options" v-bind="option" :key="index"
              :label="option.label" :name="option.value">
            </u-checkbox>
          </u-checkbox-group>
        </template>

        <!-- Radio -->
        <template v-else-if="item.component === 'Radio'">
          <u-radio-group v-model="model[item.prop]" v-bind="item.componentProps.groupProps" :disabled="isDisabled(item)"
            @change="(...e) => onMethod(item.componentProps.groupProps.onChange, ...e)">
            <u-radio v-for="(option, index) in item.componentProps.options" v-bind="option" :key="index"
              :label="option.label" :name="option.value" @change="(...e) => onMethod(option.onChange, ...e)">
            </u-radio>
          </u-radio-group>
        </template>

        <!-- Switch -->
        <template v-else-if="item.component === 'Switch'">
          <u-switch v-model="model[item.prop]" v-bind="item.componentProps" :disabled="isDisabled(item)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)"
            @input="(...e) => onMethod(item.componentProps.onInput, ...e)" />
        </template>

        <!-- Slider -->
        <template v-else-if="item.component === 'Slider'">
          <u-slider v-model="model[item.prop]" v-bind="item.componentProps" :disabled="isDisabled(item)"
            @change="(...e) => onMethod(item.componentProps.onChange, ...e)"
            @input="(...e) => onMethod(item.componentProps.onInput, ...e)"
            @changing="(...e) => onMethod(item.componentProps.onChanging, ...e)" />
        </template>
      </u-form-item>
    </u--form>

    <ImageCompress ref="imageCompressRef" />
  </view>

</template>

<script>
  import { cloneDeep, set, get } from "lodash-es";
  import { uploadFile } from '@/apis'
  import props from "./props.js";

  export default {
    name: "BasicForm",
    mixins: [props],
    mounted() {
      // 通过setRules注入rules兼容微信小程序
      // 自动填充trigger与message
      if (this.$refs.formRef && this.rules) {
        const ruleMap = cloneDeep(this.rules)
        if (typeof ruleMap == 'object') {
          for (let prop in ruleMap) {
            const rules = ruleMap[prop]
            const { label, component } = this.items.find(item => item.prop === prop)
            let prefix = '请输入'
            if (['Calender', 'Picker', 'DatetimePicker', 'Rate', 'Checkbox', 'Radio', 'Switch', 'Slider'].includes(
                component)) {
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
      return {};
    },
    computed: {
      items() {
        if (!this.schemas?.length) return []
        const data = cloneDeep(this.schemas)
        const result = data.map(item => {
          if (!item.componentProps) item.componentProps = {}
          if (!item.componentProps.placeholder && this.autoSetPlaceholder) {
            if (['Calendar', 'Picker', 'DatetimePicker'].includes(item.component)) {
              item.componentProps.placeholder = `请选择${item.label || ''}`
            } else if (['Code', 'Input', 'Textarea'].includes(item.component)) {
              item.componentProps.placeholder = `请输入${item.label || ''}`
            }
          }
          if (item.component === 'Calendar' && typeof item.componentProps.formatter === 'function') {
            this.$refs[`${getName(item)}Ref`].setFormatter(item.componentProps.formatter)
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
            tips: item.component == 'Code' ? '' : undefined,
            groupProps: ['Checkbox', 'Radio'].includes(item.component) ? item.componentProps.groupProps || {} :
              undefined,
            options: ['Checkbox', 'Radio'].includes(item.component) ? item.componentProps.options || [] : undefined,
          }
        })
        return result
      }
    },
    methods: {
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
      onMethod(func, ...e) {
        func?.(...e)
      },
      // 获取Calendar|Picker|DatetimePicker值
      getSelectedValue(item) {
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
        let dynamicDisabled = false;
        if (typeof item.dynamicDisabled == 'boolean') {
          dynamicDisabled = item.dynamicDisabled
        } else if (typeof item.dynamicDisabled == 'function') {
          dynamicDisabled = item.dynamicDisabled({
            schema: item,
            model: this.model,
            prop: item.prop
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
      closeItem(item, func, ...e) {
        item.visible = false
        func?.(...e)
        this.$forceUpdate()
      },
      // 日历没有v-model,需要手动保存数据
      // 数据为日期数组,默认字符串
      onCalendarConfirm(item, ...e) {
        this.model[item.prop] = e
        this.closeItem(item, item.componentProps.onConfirm, ...e)
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
        this.model[item.prop] = e.value
        this.closeItem(item, item.componentProps.onConfirm, e)
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
          let url = lists[i].url;
          if (item.componentProps.compress && lists[i].type.startsWith('image')) {
            try {
              url = await this.$refs.imageCompressRef.compress({
                src: url,
                ...item.componentProps.compress
              })
            } catch (e) {
              console.log('压缩失败', e);
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
            }),
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
            bizType: 'driver'
          }
        })
      },
      // 验证码组件获取验证码
      getCode(item, disabled) {
        if (disabled) return
        if (this.$refs[`${this.getName(item)}Ref`].canGetCode) {
          // 模拟向后端请求验证码
          uni.showLoading({
            title: '正在获取验证码'
          })
          setTimeout(() => {
            uni.hideLoading();
            // 这里此提示会被this.start()方法中的提示覆盖
            uni.$u.toast('验证码已发送');
            // 通知验证码组件内部开始倒计时
            this.$refs[`${this.getName(item)}Ref`].start();
          }, 2000);
        } else {
          uni.$u.toast('请倒计时结束后再发送');
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
    }
  }

</script>
