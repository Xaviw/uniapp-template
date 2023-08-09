<template>
  <u-picker
    ref="pickerRef"
    :show="show || visible"
    :showToolbar="showToolbar"
    :title="title"
    :columns="columns"
    :loading="loading"
    :itemHeight="itemHeight"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :cancelColor="cancelColor"
    :confirmColor="confirmColor"
    :visibleItemCount="visibleItemCount"
    :keyName="labelField || keyName"
    :closeOnClickOverlay="closeOnClickOverlay"
    :defaultIndex="defaultIndex"
    :immediateChange="immediateChange"
    @close="onClose"
    @confirm="onConfirm"
    @change="onChange"
    @cancel="onCancel"
  />
</template>

<script>
export default {
  name: "CustomPicker",
  props: {
    value: [String, Number, Array],
    options: {
      type: Array,
      required: true,
    },
    labelField: {
      type: String,
      default: "label",
    },
    valueField: {
      type: String,
      default: "value",
    },
    // 是否展示picker弹窗
    show: {
      type: Boolean,
      default: uni.$u.props.picker.show,
    },
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: uni.$u.props.picker.showToolbar,
    },
    // 顶部标题
    title: {
      type: String,
      default: uni.$u.props.picker.title,
    },
    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: uni.$u.props.picker.loading,
    },
    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: uni.$u.props.picker.itemHeight,
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: uni.$u.props.picker.cancelText,
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: uni.$u.props.picker.confirmText,
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: uni.$u.props.picker.cancelColor,
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: uni.$u.props.picker.confirmColor,
    },
    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: uni.$u.props.picker.visibleItemCount,
    },
    // 选项对象中，需要展示的属性键名
    keyName: {
      type: String,
      default: uni.$u.props.picker.keyName,
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: uni.$u.props.picker.defaultIndex,
    },
    // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
    immediateChange: {
      type: Boolean,
      default: uni.$u.props.picker.immediateChange,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    columns() {
      if (!Array.isArray(this.options[1])) {
        return [this.options];
      }
      return this.options;
    },
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    setIndexs(...e) {
      this.$refs.pickerRef.setIndexs(...e);
    },
    setColumnValues(...e) {
      this.$refs.pickerRef.setColumnValues(...e);
    },
    onClose() {
      this.close();
      this.$emit("close");
    },
    onConfirm(e) {
      const value = e.value.map(item => item[this.valueField])
      this.$emit('input', value.length === 1 ? value[0] : value)
      this.close();
      this.$emit("confirm", {...e, targetValue: value});
    },
    onChange(e) {
      e.picker = this.$refs.pickerRef;
      this.$emit("change", e);
    },
    onCancel() {
      this.close();
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="scss" scoped></style>
