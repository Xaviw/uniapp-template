// 查看 README.md BasicForm 介绍
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
      :customClass="customClass"
      :customStyle="customStyle"
    >
      <!-- 循环表单项 -->
      <u-form-item
        v-for="(item, fi) of items"
        :key="fi"
        v-show="item.ifShow"
        :label="item.label"
        :prop="item.prop"
        :borderBottom="item.borderBottom"
        :labelWidth="item.labelWidth"
        :labelPosition="item.labelPosition"
        :rightIcon="item.rightIcon"
        :leftIcon="item.leftIcon"
        :leftIconStyle="item.leftIconStyle"
        :required="item.required"
        :customClass="item.customClass"
        :customStyle="item.customStyle"
        @click="showItem(item, item.onClick)"
      >
        <slot :name="getName(item)">
          <!-- 请选择 -->
          <template
            v-if="
              ['Calendar', 'Picker', 'DatetimePicker'].includes(item.component)
            "
          >
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
          <!-- 微信小程序不支持v-bind语法,只能逐个绑定 -->

          <!-- Calendar -->
          <template v-if="item.component === 'Calendar'">
            <u-calendar
              :ref="`${getName(item)}Ref`"
              @click.native.stop
              style="flex: 0"
              :title="item.componentProps.title"
              :showTitle="item.componentProps.showTitle"
              :showSubtitle="item.componentProps.showSubtitle"
              :mode="item.componentProps.mode"
              :startText="item.componentProps.startText"
              :endText="item.componentProps.endText"
              :customList="item.componentProps.customList"
              :color="item.componentProps.color"
              :minDate="item.componentProps.minDate"
              :maxDate="item.componentProps.maxDate"
              :defaultDate="item.componentProps.defaultDate"
              :maxCount="item.componentProps.maxCount"
              :rowHeight="item.componentProps.rowHeight"
              :formatter="item.componentProps.formatter"
              :showLunar="item.componentProps.showLunar"
              :showMark="item.componentProps.showMark"
              :confirmText="item.componentProps.confirmText"
              :confirmDisabledText="item.componentProps.confirmDisabledText"
              :show="item.show"
              :closeOnClickOverlay="item.componentProps.closeOnClickOverlay"
              :readonly="item.componentProps.readonly"
              :maxRange="item.componentProps.maxRange"
              :rangePrompt="item.componentProps.rangePrompt"
              :showRangePrompt="item.componentProps.showRangePrompt"
              :allowSameDay="item.componentProps.allowSameDay"
              :round="item.componentProps.round"
              :monthNum="item.componentProps.monthNum"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @confirm="onCalendarConfirm(item, $event)"
              @close="
                closeItem(item, null, item.componentProps.onClose, $event)
              "
            />
          </template>

          <!-- Picker -->
          <template v-else-if="item.component === 'Picker'">
            <u-picker
              :ref="`${getName(item)}Ref`"
              @click.native.stop
              style="flex: 0"
              :show="item.show"
              :showToolbar="item.componentProps.showToolbar"
              :title="item.componentProps.title"
              :loading="item.componentProps.loading"
              :itemHeight="item.componentProps.itemHeight"
              :cancelText="item.componentProps.cancelText"
              :confirmText="item.componentProps.confirmText"
              :cancelColor="item.componentProps.cancelColor"
              :confirmColor="item.componentProps.confirmColor"
              :visibleItemCount="item.componentProps.visibleItemCount"
              :closeOnClickOverlay="item.componentProps.closeOnClickOverlay"
              :defaultIndex="item.componentProps.defaultIndex"
              :immediateChange="item.componentProps.immediateChange"
              :keyName="item.componentProps.labelField"
              :columns="item.componentProps.options"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @close="
                closeItem(item, null, item.componentProps.onClose, $event)
              "
              @confirm="onPickerConfirm(item, $event)"
              @change="
                onPickerChange(
                  $event,
                  `${getName(item)}Ref`,
                  item.componentProps.onChange
                )
              "
              @cancel="
                closeItem(item, null, item.componentProps.onCancel, $event)
              "
            />
          </template>

          <!-- DatetimePicker -->
          <template v-else-if="item.component === 'DatetimePicker'">
            <u-datetime-picker
              :ref="`${getName(item)}Ref`"
              @click.native.stop
              style="flex: 0"
              :showToolbar="item.componentProps.showToolbar"
              :title="item.componentProps.title"
              :mode="item.componentProps.mode"
              :maxDate="item.componentProps.maxDate"
              :minDate="item.componentProps.minDate"
              :minHour="item.componentProps.minHour"
              :maxHour="item.componentProps.maxHour"
              :minMinute="item.componentProps.minMinute"
              :maxMinute="item.componentProps.maxMinute"
              :filter="item.componentProps.filter"
              :formatter="item.componentProps.formatter"
              :loading="item.componentProps.loading"
              :itemHeight="item.componentProps.itemHeight"
              :cancelText="item.componentProps.cancelText"
              :confirmText="item.componentProps.confirmText"
              :cancelColor="item.componentProps.cancelColor"
              :confirmColor="item.componentProps.confirmColor"
              :visibleItemCount="item.componentProps.visibleItemCount"
              :closeOnClickOverlay="item.componentProps.closeOnClickOverlay"
              :defaultIndex="item.componentProps.defaultIndex"
              :value="get(model, item.prop)"
              :show="item.show"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @confirm="onDatetimeConfirm(item, $event)"
              @close="
                closeItem(item, null, item.componentProps.onClose, $event)
              "
              @cancel="
                closeItem(item, null, item.componentProps.onCancel, $event)
              "
              @change="onMethod(null, item.componentProps.onChange, $event)"
            />
          </template>

          <!-- Rate -->
          <template v-else-if="item.component === 'Rate'">
            <u-rate
              :ref="`${getName(item)}Ref`"
              :count="item.componentProps.count"
              :size="item.componentProps.size"
              :inactiveColor="item.componentProps.inactiveColor"
              :activeColor="item.componentProps.activeColor"
              :gutter="item.componentProps.gutter"
              :minCount="item.componentProps.minCount"
              :allowHalf="item.componentProps.allowHalf"
              :activeIcon="item.componentProps.activeIcon"
              :inactiveIcon="item.componentProps.inactiveIcon"
              :touchable="item.componentProps.touchable"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @change="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onChange,
                  $event
                )
              "
            />
          </template>

          <!-- NumberBox -->
          <template v-else-if="item.component === 'NumberBox'">
            <u-number-box
              :ref="`${getName(item)}Ref`"
              :name="item.componentProps.name"
              :min="item.componentProps.min"
              :max="item.componentProps.max"
              :step="item.componentProps.step"
              :integer="item.componentProps.integer"
              :disabledInput="item.componentProps.disabledInput"
              :asyncChange="item.componentProps.asyncChange"
              :inputWidth="item.componentProps.inputWidth"
              :showMinus="item.componentProps.showMinus"
              :showPlus="item.componentProps.showPlus"
              :decimalLength="item.componentProps.decimalLength"
              :longPress="item.componentProps.longPress"
              :color="item.componentProps.color"
              :buttonSize="item.componentProps.buttonSize"
              :bgColor="item.componentProps.bgColor"
              :cursorSpacing="item.componentProps.cursorSpacing"
              :disableMinus="item.componentProps.disableMinus"
              :disablePlus="item.componentProps.disablePlus"
              :iconStyle="item.componentProps.iconStyle"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @focus="onMethod(null, item.componentProps.onFocus, $event)"
              @blur="onMethod(null, item.componentProps.onBlur, $event)"
              @change="
                onMethod(
                  set.bind(null, model, item.prop, $event.value),
                  item.componentProps.onChange,
                  $event
                )
              "
              @overlimit="
                onMethod(null, item.componentProps.onOverlimit, $event)
              "
            >
              <slot :name="`${getName(item)}Minus`"></slot>
              <slot :name="`${getName(item)}Input`"></slot>
              <slot :name="`${getName(item)}Plus`"></slot>
            </u-number-box>
          </template>

          <!-- Upload -->
          <template v-else-if="item.component === 'Upload'">
            <u-upload
              :ref="`${getName(item)}Ref`"
              :accept="item.componentProps.accept"
              :capture="item.componentProps.capture"
              :compressed="item.componentProps.compressed"
              :camera="item.componentProps.camera"
              :maxDuration="item.componentProps.maxDuration"
              :uploadIcon="item.componentProps.uploadIcon"
              :uploadIconColor="item.componentProps.uploadIconColor"
              :useBeforeRead="item.componentProps.useBeforeRead"
              :previewFullImage="item.componentProps.previewFullImage"
              :maxCount="item.componentProps.maxCount"
              :imageMode="item.componentProps.imageMode"
              :sizeType="item.componentProps.sizeType"
              :multiple="item.componentProps.multiple"
              :deletable="item.componentProps.deletable"
              :maxSize="item.componentProps.maxSize"
              :uploadText="item.componentProps.uploadText"
              :width="item.componentProps.width"
              :height="item.componentProps.height"
              :previewImage="item.componentProps.previewImage"
              :fileList="item.componentProps.fileList"
              :name="item.componentProps.name || getName(item)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @afterRead="afterRead(item, $event)"
              @delete="deleteFile(item, $event)"
              @beforeRead="
                onMethod(null, item.componentProps.beforeRead, $event)
              "
              @oversize="onMethod(null, item.componentProps.oversize, $event)"
              @clickPreview="
                onMethod(null, item.componentProps.clickPreview, $event)
              "
            >
              <slot :name="`${getName(item)}Default`"></slot>
            </u-upload>
          </template>

          <!-- Code -->
          <template v-else-if="item.component === 'Code'">
            <view class="flex items-center basic-form-code">
              <u--input
                :value="get(model, item.prop)"
                @input="set.bind(null, model, item.prop, $event)"
                border="none"
                :placeholder="item.componentProps.placeholder"
                :disabled="isDisabled(item)"
              ></u--input>

              <u-button
                v-if="item.componentProps.type === 'button'"
                customStyle="width: auto;"
                @click="getCode(item)"
                :text="item.componentProps.tips"
                :type="item.componentProps.buttonType"
                :size="item.componentProps.buttonSize"
                :disabled="
                  isDisabled(item) || item.componentProps.buttonDisabled
                "
              />

              <text
                v-else
                :class="[
                  isDisabled(item) || item.componentProps.buttonDisabled
                    ? 'text-info-disabled'
                    : 'text-link',
                  'pl-6',
                ]"
                :style="item.componentProps.textStyle"
                @click="
                  getCode(
                    item,
                    isDisabled(item) || item.componentProps.buttonDisabled
                  )
                "
              >
                {{ item.componentProps.tips }}
              </text>
            </view>

            <u-code
              :ref="`${getName(item)}Ref`"
              :seconds="item.componentProps.seconds"
              :startText="item.componentProps.startText"
              :changeText="item.componentProps.changeText"
              :endText="item.componentProps.endText"
              :keepRunning="item.componentProps.keepRunning"
              :uniqueKey="item.componentProps.uniqueKey || getName(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @change="
                onMethod(
                  codeChange.bind(null, item, $event),
                  item.componentProps.onChange,
                  $event
                )
              "
              @start="onCodeStart(item)"
              @end="onCodeEnd(item)"
            />
          </template>

          <!-- Input 插槽需要区分NVUE页面 -->
          <!-- NVUE Input -->
          <template v-else-if="item.component === 'Input' && isNVUE">
            <u--input
              :ref="`${getName(item)}Ref`"
              :type="item.componentProps.type"
              :fixed="item.componentProps.fixed"
              :disabledColor="item.componentProps.disabledColor"
              :clearable="item.componentProps.clearable"
              :password="item.componentProps.password"
              :maxlength="item.componentProps.maxlength"
              :placeholder="item.componentProps.placeholder"
              :placeholderClass="item.componentProps.placeholderClass"
              :placeholderStyle="item.componentProps.placeholderStyle"
              :showWordLimit="item.componentProps.showWordLimit"
              :confirmType="item.componentProps.confirmType"
              :confirmHold="item.componentProps.confirmHold"
              :holdKeyboard="item.componentProps.holdKeyboard"
              :focus="item.componentProps.focus"
              :autoBlur="item.componentProps.autoBlur"
              :disableDefaultPadding="item.componentProps.disableDefaultPadding"
              :cursor="item.componentProps.cursor"
              :cursorSpacing="item.componentProps.cursorSpacing"
              :selectionStart="item.componentProps.selectionStart"
              :selectionEnd="item.componentProps.selectionEnd"
              :adjustPosition="item.componentProps.adjustPosition"
              :inputAlign="item.componentProps.inputAlign"
              :fontSize="item.componentProps.fontSize"
              :color="item.componentProps.color"
              :prefixIcon="item.componentProps.prefixIcon"
              :prefixIconStyle="item.componentProps.prefixIconStyle"
              :suffixIcon="item.componentProps.suffixIcon"
              :suffixIconStyle="item.componentProps.suffixIconStyle"
              :border="item.componentProps.border"
              :readonly="item.componentProps.readonly"
              :shape="item.componentProps.shape"
              :formatter="item.componentProps.formatter"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @blur="onMethod(null, item.componentProps.onBlur, $event)"
              @focus="onMethod(null, item.componentProps.onFocus, $event)"
              @confirm="onMethod(null, item.componentProps.onConfirm, $event)"
              @keyboardheightchange="
                onMethod(
                  null,
                  item.componentProps.onKeyboardheightchange,
                  $event
                )
              "
              @input="onMethod(null, item.componentProps.onInput, $event)"
              @change="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onChange,
                  $event
                )
              "
              @clear="onMethod(null, item.componentProps.onClear, $event)"
            >
              <slot :name="`${getName(item)}Prefix`"></slot>
              <slot :name="`${getName(item)}suffix`"></slot>
            </u--input>
          </template>

          <!-- VUE Input -->
          <template v-else-if="item.component === 'Input' && !isNVUE">
            <u-input
              :ref="`${getName(item)}Ref`"
              :type="item.componentProps.type"
              :fixed="item.componentProps.fixed"
              :disabledColor="item.componentProps.disabledColor"
              :clearable="item.componentProps.clearable"
              :password="item.componentProps.password"
              :maxlength="item.componentProps.maxlength"
              :placeholder="item.componentProps.placeholder"
              :placeholderClass="item.componentProps.placeholderClass"
              :placeholderStyle="item.componentProps.placeholderStyle"
              :showWordLimit="item.componentProps.showWordLimit"
              :confirmType="item.componentProps.confirmType"
              :confirmHold="item.componentProps.confirmHold"
              :holdKeyboard="item.componentProps.holdKeyboard"
              :focus="item.componentProps.focus"
              :autoBlur="item.componentProps.autoBlur"
              :disableDefaultPadding="item.componentProps.disableDefaultPadding"
              :cursor="item.componentProps.cursor"
              :cursorSpacing="item.componentProps.cursorSpacing"
              :selectionStart="item.componentProps.selectionStart"
              :selectionEnd="item.componentProps.selectionEnd"
              :adjustPosition="item.componentProps.adjustPosition"
              :inputAlign="item.componentProps.inputAlign"
              :fontSize="item.componentProps.fontSize"
              :color="item.componentProps.color"
              :prefixIcon="item.componentProps.prefixIcon"
              :prefixIconStyle="item.componentProps.prefixIconStyle"
              :suffixIcon="item.componentProps.suffixIcon"
              :suffixIconStyle="item.componentProps.suffixIconStyle"
              :border="item.componentProps.border"
              :readonly="item.componentProps.readonly"
              :shape="item.componentProps.shape"
              :formatter="item.componentProps.formatter"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @blur="onMethod(null, item.componentProps.onBlur, $event)"
              @focus="onMethod(null, item.componentProps.onFocus, $event)"
              @confirm="onMethod(null, item.componentProps.onConfirm, $event)"
              @keyboardheightchange="
                onMethod(
                  null,
                  item.componentProps.onKeyboardheightchange,
                  $event
                )
              "
              @input="onMethod(null, item.componentProps.onInput, $event)"
              @change="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onChange,
                  $event
                )
              "
              @clear="onMethod(null, item.componentProps.onClear, $event)"
            >
              <slot :name="`${getName(item)}Prefix`"></slot>
              <slot :name="`${getName(item)}suffix`"></slot>
            </u-input>
          </template>

          <!-- Textarea -->
          <template v-else-if="item.component === 'Textarea'">
            <u--textarea
              :ref="`${getName(item)}Ref`"
              :placeholder="item.componentProps.placeholder"
              :placeholderClass="item.componentProps.placeholderClass"
              :placeholderStyle="item.componentProps.placeholderStyle"
              :height="item.componentProps.height"
              :confirmType="item.componentProps.confirmType"
              :count="item.componentProps.count"
              :focus="item.componentProps.focus"
              :autoHeight="item.componentProps.autoHeight"
              :fixed="item.componentProps.fixed"
              :cursorSpacing="item.componentProps.cursorSpacing"
              :cursor="item.componentProps.cursor"
              :showConfirmBar="item.componentProps.showConfirmBar"
              :selectionStart="item.componentProps.selectionStart"
              :selectionEnd="item.componentProps.selectionEnd"
              :adjustPosition="item.componentProps.adjustPosition"
              :disableDefaultPadding="item.componentProps.disableDefaultPadding"
              :holdKeyboard="item.componentProps.holdKeyboard"
              :maxlength="item.componentProps.maxlength"
              :border="item.componentProps.border"
              :formatter="item.componentProps.formatter"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @blur="onMethod(null, item.componentProps.onBlur, $event)"
              @focus="onMethod(null, item.componentProps.onFocus, $event)"
              @confirm="onMethod(null, item.componentProps.onConfirm, $event)"
              @keyboardheightchange="
                onMethod(
                  null,
                  item.componentProps.onKeyboardheightchange,
                  $event
                )
              "
              @input="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onInput,
                  $event
                )
              "
              @linechange="
                onMethod(null, item.componentProps.onLinechange, $event)
              "
            />
          </template>

          <!-- Checkbox -->
          <template v-else-if="item.component === 'Checkbox'">
            <u-checkbox-group
              :ref="`${getName(item)}Ref`"
              :name="item.componentProps.name"
              :shape="item.componentProps.shape"
              :activeColor="item.componentProps.activeColor"
              :inactiveColor="item.componentProps.inactiveColor"
              :size="item.componentProps.size"
              :placement="item.componentProps.placement"
              :labelSize="item.componentProps.labelSize"
              :labelColor="item.componentProps.labelColor"
              :labelDisabled="item.componentProps.labelDisabled"
              :iconColor="item.componentProps.iconColor"
              :iconSize="item.componentProps.iconSize"
              :iconPlacement="item.componentProps.iconPlacement"
              :borderBottom="item.componentProps.borderBottom"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @change="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onChange,
                  $event
                )
              "
            >
              <u-checkbox
                v-for="(option, index) in item.componentProps.options"
                :key="index"
                :shape="option.shape"
                :size="option.size"
                :checkbox="option.checkbox"
                :disabled="option.disabled"
                :activeColor="option.activeColor"
                :inactiveColor="option.inactiveColor"
                :iconSize="option.iconSize"
                :iconColor="option.iconColor"
                :labelSize="option.labelSize"
                :labelColor="option.labelColor"
                :labelDisabled="option.labelDisabled"
                :label="option[item.componentProps.labelField]"
                :name="option[item.componentProps.valueField]"
                :customClass="option.customClass"
                :customStyle="option.customStyle"
              />
            </u-checkbox-group>
          </template>

          <!-- Radio -->
          <template v-else-if="item.component === 'Radio'">
            <u-radio-group
              :ref="`${getName(item)}Ref`"
              :shape="item.componentProps.shape"
              :activeColor="item.componentProps.activeColor"
              :inactiveColor="item.componentProps.inactiveColor"
              :name="item.componentProps.name"
              :size="item.componentProps.size"
              :placement="item.componentProps.placement"
              :label="item.componentProps.label"
              :labelColor="item.componentProps.labelColor"
              :labelSize="item.componentProps.labelSize"
              :labelDisabled="item.componentProps.labelDisabled"
              :iconColor="item.componentProps.iconColor"
              :iconSize="item.componentProps.iconSize"
              :borderBottom="item.componentProps.borderBottom"
              :iconPlacement="item.componentProps.iconPlacement"
              :value="get(model, item.prop)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              :disabled="isDisabled(item)"
              @change="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onChange,
                  $event
                )
              "
            >
              <u-radio
                v-for="(option, index) in item.componentProps.options"
                :key="index"
                :shape="option.shape"
                :disabled="option.disabled"
                :labelDisabled="option.labelDisabled"
                :activeColor="option.activeColor"
                :inactiveColor="option.inactiveColor"
                :iconSize="option.iconSize"
                :labelSize="option.labelSize"
                :labelColor="option.labelColor"
                :size="option.size"
                :iconColor="option.iconColor"
                :placement="option.placement"
                :label="option[item.componentProps.labelField]"
                :name="option[item.componentProps.valueField]"
                :customClass="option.customClass"
                :customStyle="option.customStyle"
                @change="onMethod(null, option.onChange, $event)"
              >
              </u-radio>
            </u-radio-group>
          </template>

          <!-- Switch -->
          <template v-else-if="item.component === 'Switch'">
            <u-switch
              :ref="`${getName(item)}Ref`"
              :loading="item.componentProps.loading"
              :size="item.componentProps.size"
              :activeColor="item.componentProps.activeColor"
              :inactiveColor="item.componentProps.inactiveColor"
              :activeValue="item.componentProps.activeValue"
              :inactiveValue="item.componentProps.inactiveValue"
              :asyncChange="item.componentProps.asyncChange"
              :space="item.componentProps.space"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @change="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onChange,
                  $event
                )
              "
              @input="onMethod(null, item.componentProps.onInput, $event)"
            />
          </template>

          <!-- Slider -->
          <template v-else-if="item.component === 'Slider'">
            <u-slider
              :ref="`${getName(item)}Ref`"
              style="flex: 1"
              :blockSize="item.componentProps.blockSize"
              :min="item.componentProps.min"
              :max="item.componentProps.max"
              :step="item.componentProps.step"
              :activeColor="item.componentProps.activeColor"
              :inactiveColor="item.componentProps.inactiveColor"
              :blockColor="item.componentProps.blockColor"
              :showValue="item.componentProps.showValue"
              :blockStyle="item.componentProps.blockStyle"
              :value="get(model, item.prop)"
              :disabled="isDisabled(item)"
              :customClass="item.componentProps.customClass"
              :customStyle="item.componentProps.customStyle"
              @change="onMethod(null, item.componentProps.onChange, $event)"
              @input="
                onMethod(
                  set.bind(null, model, item.prop, $event),
                  item.componentProps.onInput,
                  $event
                )
              "
              @changing="onMethod(null, item.componentProps.onChanging, $event)"
            />
          </template>
        </slot>
      </u-form-item>
    </u--form>

    <ImageCompress ref="imageCompressRef" />
  </view>
</template>

<script>
import { cloneDeep, set, get } from "lodash-es";
import dayjs from "@/uni_modules/uview-ui/libs/util/dayjs.js";
import props from "./props.js";

// HACK: uview中的deepMerge有问题，无法在setUViewConfig中直接配置空数组
uni.$u.props.BasicForm.Upload.fileList = [];

export default {
  name: "BasicForm",
  mixins: [props],
  mounted() {
    // 兼容微信小程序通过setRules注入rules
    // 自动填充trigger与message
    if (this.$refs.formRef && this.rules) {
      const ruleMap = cloneDeep(this.rules);
      if (typeof ruleMap == "object") {
        for (let prop in ruleMap) {
          const rules = ruleMap[prop];
          const { label, component } = this.items.find(
            (item) => item.prop === prop
          );
          let prefix = "请输入";
          if (
            [
              "Calender",
              "Picker",
              "DatetimePicker",
              "Rate",
              "Checkbox",
              "Radio",
              "Switch",
              "Slider",
            ].includes(component)
          ) {
            prefix = "请选择";
          } else if (component === "Upload") {
            prefix = "请上传";
          }
          this.fillRuleMessage(rules, label, prefix);
        }
      }
      // HACK:源码中只有Object.keys(this.model).length判断通过才会注入rules
      if (!Object.keys(this.model).length) {
        const firstProp = this.schemas[0].prop;
        firstProp && set(this.model, firstProp, null);
      }
      this.$refs.formRef.setRules(ruleMap);
    }
  },
  data() {
    return {
      model: {},
    };
  },
  computed: {
    // 处理schemas
    items() {
      const data = cloneDeep(this.schemas);
      return data.map((item) => {
        // HACK:form-item labelWidth设置为0时会使用form labelWidth
        if (item.labelWidth === 0) {
          item.labelWidth = 0.1;
        }
        if (!item.componentProps) item.componentProps = {};
        // 合并默认值，在setUViewConfig.js-props-BasicForm中设置
        const customProps = uni.$u.props.BasicForm[item.component] || {};
        const lowerCompName =
          item.component[0].toLowerCase() + item.component.slice(1);
        let groupName;
        if (["Checkbox", "Radio"].includes(item.component)) {
          groupName =
            item.component[0].toLowerCase() + item.component.slice(1) + "Group";
        }
        // #ifndef MP
        item.componentProps = Object.assign(
          cloneDeep(customProps),
          item.componentProps
        );
        // #endif
        // #ifdef MP
        if (groupName) {
          const optionProps = uni.$u.props[lowerCompName];
          for (let i = 0; i < item.componentProps.options.length; i++) {
            item.componentProps.options[i] = Object.assign(
              cloneDeep(optionProps),
              item.componentProps.options[i]
            );
          }
        }
        const defaultProps = groupName
          ? uni.$u.props[groupName]
          : uni.$u.props[lowerCompName];
        item.componentProps = Object.assign(
          cloneDeep(defaultProps),
          cloneDeep(customProps),
          item.componentProps
        );
        // #endif
        // 自动填充placeholder
        if (!item.componentProps.placeholder && this.autoSetPlaceholder) {
          if (
            ["Calendar", "Picker", "DatetimePicker"].includes(item.component)
          ) {
            item.componentProps.placeholder = `请选择${item.label || ""}`;
          } else if (["Code", "Input", "Textarea"].includes(item.component)) {
            item.componentProps.placeholder = `请输入${item.label || ""}`;
          }
        }
        // 设置Picker使用columns或options属性均可
        if (item.component === "Picker" && !item.componentProps.options) {
          item.componentProps.options = item.componentProps.columns;
        }
        // 兼容Picker-options为单层数组
        if (
          item.component === "Picker" &&
          !Array.isArray(item.componentProps.options[0])
        ) {
          item.componentProps.options = [item.componentProps.options];
        }
        // 兼容微信小程序使用setFormatter设置formatter
        if (
          ["Calendar", "Textarea", "DatetimePicker"].includes(item.component) &&
          typeof item.componentProps.formatter === "function"
        ) {
          if (!this.$refs[`${this.getName(item)}Ref`]?.[0]) {
            this.$nextTick(() => {
              this.$refs[`${this.getName(item)}Ref`][0].setFormatter(
                item.componentProps.formatter
              );
            });
          }
        }
        // 初始化Upload model值
        if (item.component === "Upload" && item.componentProps.maxCount !== 1) {
          const urls = item.componentProps.fileList.map((item) => item.url);
          set(this.model, item.prop, urls);
        } else if (
          item.component === "Upload" &&
          item.componentProps.fileList.length
        ) {
          set(this.model, item.prop, item.componentProps.fileList[0].url);
        }
        // 小程序中Switch必须设置初始值才能setRules
        if(item.component === 'Switch' && !get(this.model, item.prop)) {
          set(this.model, item.prop, false)
        }
        return {
          ...item,
          // v-show控制表单项
          ifShow: item.ifShow === false ? false : true,
          // 弹出类型组件,独立控制显示隐藏
          show: ["Calendar", "Picker", "DatetimePicker"].includes(
            item.component
          )
            ? false
            : undefined,
          // 表单项级别禁用
          disabled: !!item.disabled,
          // 表单项动态禁用
          dynamicDisabled:
            typeof item.dynamicDisabled === "function"
              ? item.dynamicDisabled
              : !!item.dynamicDisabled,
        };
      });
    },
  },
  methods: {
    // HACK:解决HbuilderX编译报错
    toJSON() {},
    // 导入的方法template中无法直接使用,这里映射一遍
    get,
    set,
    // 实现Form方法,方便直接通过组件ref调用
    validate() {
      this.$refs.formRef.validate();
    },
    setRules() {
      this.$refs.formRef.setRules();
    },
    validateField() {
      this.$refs.formRef.validateField();
    },
    resetFields() {
      this.$refs.formRef.resetFields();
    },
    clearValidate() {
      this.$refs.formRef.clearValidate();
    },
    // 补充rule message
    fillRuleMessage(rules, label, prefix) {
      if (Array.isArray(rules)) {
        for (let rule of rules) {
          this.fillRuleMessage(rule, label, prefix);
        }
      } else if (typeof rules === "object" && !rules.message) {
        if (!rules.trigger) rules.trigger = ["blur", "change"];
        if (rules.required) {
          rules.message = prefix + label;
        } else if (rules.type) {
          rules.message = "输入类型错误";
        } else if (rules.len) {
          rules.message = `输入长度要求${rules.len}位`;
        } else {
          rules.message = "校验不通过";
        }
      }
    },
    // 处理表单项prop可能带"."的情况,返回处理后的小驼峰prop名
    getName(item) {
      if (item.prop.includes(".")) {
        const names = item.prop.split(".").map((name, index) => {
          if (index == 0) return name.toLowerCase();
          return name[0].toUpperCase() + name.slice(1).toLowerCase();
        });
        return names.join("");
      }
      return item.prop;
    },
    // 多级条件判断是否应该禁用
    isDisabled(item) {
      const commonDisabled = !!this.disabled;
      const itemDisabled = !!item.disabled;
      let dynamicDisabled = false;
      if (typeof item.dynamicDisabled == "boolean") {
        dynamicDisabled = item.dynamicDisabled;
      } else if (typeof item.dynamicDisabled == "function") {
        dynamicDisabled = item.dynamicDisabled({
          schema: item,
          schemas: this.items,
          model: this.model,
          prop: item.prop,
        });
      }
      return commonDisabled || itemDisabled || dynamicDisabled;
    },
    // 绑定事件
    onMethod(func1, func2, event) {
      func1?.();
      func2?.(event);
    },
    // 'Calendar', 'Picker', 'DatetimePicker'的打开操作
    showItem(item, func, event) {
      if (this.isDisabled(item)) return;
      item.show = true;
      func?.(event);
      uni.hideKeyboard();
      this.$forceUpdate();
    },
    // 'Calendar', 'Picker', 'DatetimePicker'的关闭操作
    closeItem(item, func1, func2, event) {
      item.show = false;
      func1?.();
      func2?.(event);
      this.$forceUpdate();
    },
    // 获取Calendar|Picker|DatetimePicker值,优先取model[`${item.prop}Text`],其次model[item.prop]
    getShownValue(item) {
      const value =
        get(this.model, `${item.prop}Text`) || get(this.model, item.prop);
      if (typeof value === "string") return value;
      if (value === undefined || value === null) return "";
      return value?.toString();
    },
    // 日历确认
    onCalendarConfirm(item, e) {
      if (!item.componentProps.mode || item.componentProps.mode === "single") {
        set(this.model, item.prop, e[0]);
      } else {
        set(this.model, item.prop, e);
      }
      this.closeItem(item, null, item.componentProps.onConfirm, e)
    },
    // 微信小程序无法将picker实例传出来，只能通过ref操作
    onPickerChange(e, refName, func) {
      e.picker = this.$refs[refName]?.[0];
      func?.(e);
      this.$forceUpdate();
    },
    // Picker组件需要手动保存数据
    // 传递后e为{indexs: number[], value: any[], values: object[][], actualValue: any[], labels: string[]}
    onPickerConfirm(item, e) {
      const valueField = item.componentProps.valueField;
      const labelField = item.componentProps.labelField;
      const actualValue = e.value.map((value) => value[valueField]);
      const labels = e.value.map((value) => value[labelField]);
      this.model[item.prop] =
        e.value.length === 1 ? actualValue[0] : actualValue;
      this.model[`${item.prop}Text`] =
        e.value.length === 1 ? labels[0] : labels;
      this.closeItem(item, null, item.componentProps.onConfirm, {
        ...e,
        actualValue,
        labels,
      });
    },
    // DatetimePicker组需要手动保存数据,这里判断是否格式化保存
    onDatetimeConfirm(item, e) {
      let value = dayjs(e.value).format("YYYY-MM-DD HH:mm");
      if (e.mode === "date") {
        value = dayjs(e.value).format("YYYY-MM-DD");
      } else if (e.mode === "time") {
        value = dayjs(e.value).format("HH:mm");
      } else if (e.mode === "year-month") {
        value = dayjs(e.value).format("YYYY-MM");
      }
      if (item.componentProps.format) {
        set(this.model, item.prop, value);
      } else {
        set(this.model, item.prop, e.value);
      }
      this.closeItem(item, null, item.componentProps.onConfirm, e);
    },
    // Upload删除文件
    deleteFile(item, e) {
      const origin = cloneDeep(item.componentProps.fileList);
      origin.splice(e.index, 1);
      item.componentProps.fileList = origin;
      if (item.componentProps.maxCount === 1) {
        set(this.model, item.prop, null);
      } else {
        const data = get(this.model, item.prop);
        data.splice(e.index, 1);
      }
      this.$forceUpdate();
    },
    // Upload新增文件
    async afterRead(item, e) {
      // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式,统一为数组处理
      const originList = cloneDeep(item.componentProps.fileList);
      const lists = [].concat(e.file);
      let fileListLen = originList.length;
      lists.map((list) => {
        originList.push({
          ...list,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        let url = lists[i].url;
        if (item.componentProps.compress && lists[i].type.startsWith("image")) {
          try {
            url = await this.$refs.imageCompressRef.compress({
              src: url,
              ...item.componentProps.compress,
            });
          } catch (err) {
            console.log("压缩失败", err);
          }
        }
        const result = await item.componentProps.api(url);
        if (item.componentProps.maxCount === 1) {
          set(this.model, item.prop, result);
        } else {
          const data = get(this.model, item.prop);
          data.push(result);
        }
        const file = originList[fileListLen];
        originList.splice(
          fileListLen,
          1,
          Object.assign(file, {
            status: "success",
            message: "",
            url: result,
          })
        );
        fileListLen++;
      }
      item.componentProps.fileList = originList;
      this.$forceUpdate();
    },
    getCode(item, disabled) {
      if (disabled) return;
      if (this.$refs[`${this.getName(item)}Ref`]?.[0]?.canGetCode) {
        uni.showLoading({
          title: "正在获取验证码",
        });
        item.componentProps
          .api(this.model)
          .then(() => {
            // 这里此提示会被this.start()方法中的提示覆盖
            uni.$u.toast("验证码已发送");
            // 通知验证码组件内部开始倒计时
            this.$refs[`${this.getName(item)}Ref`]?.[0].start();
          })
          .finally(() => {
            uni.hideLoading();
          });
      } else {
        uni.$u.toast("请倒计时结束后再发送");
      }
    },
    // 验证码开始倒计时回调
    onCodeStart(item) {
      item.componentProps.buttonDisabled = true;
      item.componentProps.onStart?.();
    },
    // 验证码结束倒计时回调
    onCodeEnd(item) {
      item.componentProps.buttonDisabled = false;
      item.componentProps.onEnd?.();
    },
    // 验证码组件改变显示文本
    codeChange(item, e) {
      item.componentProps.tips = e;
      this.$forceUpdate();
    },
  },
};
</script>
