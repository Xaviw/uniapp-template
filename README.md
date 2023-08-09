# uniapp混合开发模板

个人uniapp-vue2开发模板，仍在不断完善中...

> 该项目为HBuilderX下使用的模板，可以参考另一个仓库[HBuilderX-Settings](https://github.com/Xaviw/HBuilderX-Settings)设置HBuilderX编辑器代码格式化等相关功能

## 技术栈

- uni-app
- Vue 2.x
- Vuex(HBuilderX 内置，不用安装)
- uview-ui 2.x

  通过插件市场导入uni_modules，相比于npm安装多了代码提示，使用前先右击**uni_modules/uview-ui->从插件市场更新**

## 项目配置

根目录下`config.js`文件中已书写了模板用到的公共配置项，可以搜索配置项查看用途后按需填写，可以自由添加其他配置项

> 部分方法中可能需要修改的部分已用`TODO`注释标注，可以全局搜索并查看是否需要修改

`utils/permission.js`提供了权限验证方法，需要配合`vuex`中定义相关数据；`utils/routerGuard.js`中定义了路由拦截方法；这两个文件可以按需在main.js中开启导入

## 样式

1. 定义了[WindiCSS](https://cn.windicss.org/utilities/general/typography.html)中大部分常用原子化css类，具体查看`styles/common.scss`，与`windicss`区别在于`font-size`、`width`、`height`等值修改为具体值，默认生成范围为`0-30`（`width`、`height`、`padding`、`margin`、`rounded`为定义范围乘2），可以自行修改文件顶部的配置项
2. 按需在`styles/uview.theme.scss`中替换uview主题颜色，uview组件样式并不是直接使用的主题色变量，所以还需要单独配置组件
3. 按需在`utils/setUViewConfig.js`中自定义uview组件配置，参考[官网介绍](https://www.uviewui.com/components/setting.html#修改uview内置配置方案)，该文件中还包括了模板自定义组件的默认值配置

### CSS类列表

基础样式查看`styles/common.scss`文件，同时uview也提供了部分css类，可以查看`uview-ui/libs/css/`下的文件，较为实用的有：

|        名称         |         对应样式         | 范围  |
| :-----------------: | :----------------------: | :---: |
|    u-main-color     |   color: $u-main-color   |       |
|   u-content-color   | color: $u-content-color  |       |
|    u-tips-color     |   color: $u-tips-color   |       |
|    u-light-color    |  color: $u-light-color   |       |
|      u-line-x       |       文本多行省略       |  1-5  |
|   u-reset-button    | 去除button的所有默认样式 |       |
|      u-border       |       默认边框样式       |       |
|    u-border-top     |                          |       |
|    u-border-left    |                          |       |
|   u-border-right    |                          |       |
|   u-border-bottom   |                          |       |
| u-border-top-bottom |                          |       |

`common.scss`文件中提供了四个变量：

```scss
$num: 0; // 循环生成初始点
$sum: 30; // 循环生成终点
$step: 2; // 步长，由于设计稿2rpx=1px，故此处步长为2
$unit: 'rpx'; //单位
```

按上诉设置后，`w-#{$num}`会对应`width: #{$num * $step}#{$unit}`，即`w-10`对应`width: 20rpx`

颜色变量使用了[uview主题色变量](https://www.uviewui.com/components/color.html)，使用格式为`name-type`或`name-type-level`，name对应设置的对象，例如`bg -> background`；type对应主题，uview中包括`primary`、`success`、`warning`、`error`、`info`；level对应颜色的深浅，包括`dark`、`disabled`、`light`，不写level时即为默认的主题颜色

使用时`bg-primary`对应`background-color: $u-primary`，`text-primary-dark`对应`color: $u-primary-dark`

还有部分样式与`WindiCSS`文档不同：

|              名称              |        对应样式        |          范围          | 兼容性 |
| :----------------------------: | :--------------------: | :--------------------: | :----: |
|             w-p-x              |   width: ${num*10}%    |          1-10          | 非NVUE |
|             h-p-x              |   height: ${num*10}%   |          1-10          | 非NVUE |
|           basis-1-2            |   flex-basis: ${1/2}%  |       0-11/1-12        | 非NVUE |

### 页面样式

App.vue中设置了全局的根样式，也可以定义全局的类样式

```scss
// APP NVUE页面不支持标签样式，此处定义类样式是可以vue、nvue通用的
// 除H5外，page标签样式只能写在非scope style中
// APP NVUE页面默认字体大小19px，其余默认16px
// 默认字体可能数字和汉字不等高，导致仅有数字的时候显示偏移较大，可以设置行高解决
@import '@/uni_modules/uview-ui/index.scss';
@import '@/styles/common.scss';

/* #ifndef APP-NVUE */
// APP VUE端需要设置页面背景色透明才能看到app-plus background颜色（页面背景默认白色）
page {
  color: $u-content-color;
  background-color: transparent;
  line-height: 1
}
/* #endif */
```

NVUE页面不支持标签样式，需要在`pages.json -> globalStyle -> app-plus -> background`中定义

另外`pages.json`文件中对其他样式属性做了说明，可以按需求进行修改

### 扩展图标

因为nvue页面扩展图标无法完成，uview官方暂未退出扩展图标功能

可以根据u-icon创建新的自定义图标组件，实现自定义图标，提供了快速创建工具[@xavi/uicon](https://github.com/Xaviw/uview-icon-generate)

## 请求

使用了[luch-request](https://www.quanzhan.co/luch-request/guide/3.x/)库处理请求，相关配置定义在`utils/http.js`中。请求接口定义在根目录`apis`文件夹下，定义方式已有例子，如需额外的请求器实例，参考`api/external.js`文件与`utils/http.js`文件，重新定义一个实例即可

同时还扩展了几个自定义属性：

```js
{
  // 是否加入时间戳，避免从缓存中取数据
  joinTime: false,
  // 是否携带token
  withToken: true,
  // 是否转换响应，转换为返回响应中的data，不转换为返回完整响应
  isTransformResponse: true,
  // 是否返回原生响应 比如：需要获取响应头时使用该属性
  isReturnNativeResponse: false,
  // 消息提示类型message | modal，其他值可以取消错误消息提示
  errorMessageMode: 'message'
};
```

除了上面的默认配置外，api中单独配置方式为：

```js
// api/xxx.js
export default fetchData = data => uni.$u.http.post('/data', data, {
  custom: { isReturnNativeResponse: true }
})
```

## WebSocket

`utils/socket.js`中定义了通用useSocket方法，并提供了完整的类型定义：

```js
/**
 * 连接webSocket方法
 * @param {string} url - 连接地址
 * @param {Object} options - 连接选项对象
 * @param {function(Socket):void} options.onConnected - 连接成功回调
 * @param {function(Socket, event):void} options.onClosed - 连接失败回调
 * @param {function(Socket, event):void} options.onError - socket错误回调
 * @param {function(Socket, Event):void} options.onMessage - 收到消息回调
 * @param {boolean} [options.heartbeat=false] - 是否启用心跳，布尔值或对象
 * @param {string} [options.heartbeat.message='ping'] - 心跳发送消息
 * @param {number} [options.heartbeat.interval=1000] - 心跳发送间隔
 * @param {number} [options.heartbeat.pongTimeout=1000] - 未收到心跳回应时，停止心跳的超时时间
 * @param {boolean} [options.autoReconnect=false] - 是否自动连接，布尔值或对象
 * @param {number} [options.autoReconnect.retries=-1] - 最大重试次数，默认-1表示无限制
 * @param {number} [options.autoReconnect.delay=1000] - 重试间隔时间
 * @param {function} options.autoReconnect.onFailed - 超过最大重试次数后回调
 * @param {boolean} [options.immediate=true] - 调用函数后是否立即连接
 * @param {Array} options.protocols - 子协议数组
 * @param {Object} options.header - HTTP Header , header 中不能设置 Referer
 * @param {boolean} [options.multiple=false] - 是否多实例。传入 true 时，将返回一个包含 SocketTask 实例
 * @return {Object} socket - 返回对象
 * @return {string} socket.status - 连接状态：CLOSED|CONNECTING|OPEN
 * @return {function} socket.open - 连接方法
 * @return {function({code=1000, reason}):void} socket.close - 关闭方法
 * @return {function(data, useBuffer: boolean):boolean} socket.send - 发送消息方法
 * @return {Object} socket.task - socket连接实例
 */
export function useSocket(url, options = {}) {...}
```

socket消息处理定义在`utils/socketHandler.js`中，用策略模式分别处理对应的消息类型

如果用到了protobuf序列化，需要替换`libs/proto.js`文件。在`utils/protobuf.js`中定义了`decode`、`encode`、`deserialize`方法:

```js
import { encode, decode, deserialize } from '@/utils/protobuf.js'

const strategies = [
  {
    type, // commandId，因为protobuf中commandId是唯一的，不需要连同serviceId一起判断
    parser, // protobuf解析方法
    handler: msg => {
      // 这里的msg已经是decode后的数据
      // 可以使用deserialize解析其中的json数据
      const data = deserialize(msg.data)
    },
  },
]
```

## 自动更新

项目内采用[upushy](https://github.com/SunSeekerX2/uni-pushy-client)提供的更新策略，upushy后台配置好应用后，填写`config.js`中相关配置即可使用

## npm库

> 根据需要增删，建议尽量用lodash-es中的方法，uview自带的部分方法不够严谨

1. lodash-es

```js
import { cloneDeep } from 'lodash-es'
```

2. js-base64

```js
import {Base64} from 'js-base64';
Base64.encode(data)
base64.decode(data)
```

3. js-md5

```js
import md5 from 'js-md5'
md5(data)
```

4. json-bigint

socket推送的超长数字，需要使用json-bigint解析，不能直接JSON.parse

```js
import JSONBig from 'json-bigint'

const parse = JSONBig({ storeAsString: true }).parse
parse(data)
```

5. tki-qrcode

  生成二维码组件`<TkiQrcode :size="320" :val="val" loadMake />`

## 内置组件

### Captcha

组件传入字符生成图像验证码`<Captcha :code="code" @click.native="fetchCode" />`

### SliderVerify

滑动解锁组件，查看源码了解详情

`<SliderVerify :text="text" @success="handleNext" :disabled="disabled" ref="verify">`

### CustomPicker

更易用的Picker组件，通过options属性控制选项内容

通过labelField（默认label）和valueField（默认value）控制显示、赋值

为单层数组时返回单项的value值，为多层数组时返回所选value数组

可以通过传入show或ref.open()、ref.close()方法控制显隐

### CustomForm

通用表单组件，使用方法：

```vue
<template>
  // formProps同u-form属性，其余为扩展属性
  // 组件内u-form的方法已映射到组件方法中，可以直接this.$refs.formRef调用
  // 表单项组件的ref名为`${prop}Ref`，可以通过this.$refs.formRef.$refs[`${prop}Ref`][0]调用，v-for中的ref会放在数组中，所以需要用[0]获取
  <CustomForm ref="formRef" v-bind="formProps" :schemas="schemas" :disabled="false" :autoSetPlaceholder="true">
    // `${prop}`插槽可以覆盖schema中的配置，自定义表单项
    // 设置labelWidth为0，以及自定义元素设置margin负值（form-item有10px的padding）等方法可以使自定义元素占满表单项空间
    <view slot="compA">自定义comA组件内容</view>

    // `${prop}Default`插槽可以配置组件默认插槽
    <view clot="compBDefault">自定义Upload</view>

    // `${prop}${slot}`插槽可以配置组件具名插槽（小程序、APP-NVUE不兼容，但可以使用`${prop}`插槽完全自定义表单项）
    <view clot="compCMinus">自定义compC步进器minus插槽</view>
  </CustomForm>
</template>

<script>
export default {
  data(){
    return {
      // 仅为示例，属性同u-form
      formProps: {},
      schemas: [
        // 每一个schema项根属性同u-form-item属性
        {
          prop: 'compA',
          label: 'A组件',
          // component属性配置渲染组件
          component: 'Input',
          // componentProps属性配置渲染组件属性
          // 组件事件使用`on${eventName}`: () => {}方式配置，参数不变
          componentProps: {}
        },
        {
          prop: 'compB',
          label: 'B组件',
          component: 'Upload'
        },
        {
          prop: 'compC',
          label: 'C组件',
          component: 'NumberBox'
        },
      ]
    }
  },
  methods: {
    getModel(){
      // 获取组件内model值
      const originModel = this.$refs.formRef.model
      const cloneModel = this.$refs.formRef.getModelClone()
      // 设置组件内model值
      this.$refs.formRef.setModel({
        'a.b.c': 1,
        'compA': 2
      })
    }
  }
}
</script>
```

除uview组件默认配置项外，还增加以及修改了部分配置：

CustomForm根属性：
- {Array} schemas：表单项配置
- {boolean} [disabled=false]：配置全部表单项禁用
- {boolean} [autoSetPlaceholder=true]：schema中未设置placeholder时自动填充为“请输入${label}”或“请选择${label}”

schema根属性：
- {string} component：组件名，Calendar|Picker|DatetimePicker|Rate|NumberBox|Upload|Code|Input|Textarea|Checkbox|Radio|Switch|Slider
- componentProps：组件配置
- {boolean} [ifShow=true]：是否显示（v-show）
- {boolean} [disabled=false]：是否禁用
- {boolean|({schema, schemas, model, prop}) => boolean} [dynamicDisabled=false]：动态禁用，支持配置函数

component新增或修改默认值的属性（可以在utils/setUViewConfig.js中配置props.CustomForm修改）：
- Picker、Checkbox、Radio组件增加options选项，表示数据数组；增加[labelField='label']、[valueField='value']属性，options必须传递包含labelField、valueField的对象数组；增加inputAlign属性，表示显示文本框的对齐方式，同u-input；
- Picker组件支持使用options属性代替columns；同时还支持单层数组
- DatetimePicker组件增加[format=true]属性，表示选择日期后是存储格式化的字符串还是时间戳
- Upload组件增加api函数属性，为接收文件上传路径，返回文件链接字符串的函数
- Code组件增加[type='button']属性，表示获取验证码是按钮还是文本（'text'）；增加[buttonType='primary']属性，对应u-button的type；增加[button-size='mini']属性，对应u-button的size；增加textStyle属性，为text的样式对象；增加maxlength属性，表示输入框长度，默认4；增加inputType属性，表示输入框type，默认number；增加api函数属性，为接收表单model，返回Promise的函数
- Input增加keyboard对象，对象属性同u-keyboard，keyboard组件用`${propName}Keyboard`获取，keyboard插槽用`${propName}KeyboardDefault`

## 内置工具

`uview`内置了部分实用工具函数，查看[官网介绍](https://www.uviewui.com/js/intro.html)

还有部分函数未暴露到`$u`中，可以手动引入使用，详细可以查看源码`@/uni_modules/uview-ui/libs/`

```js
import dayjs from '@/uni_modules/uview-ui/libs/util/dayjs.js'
// 高精度计算方法，需要注意plus在APP端项目中被HTML plus API占用，需要重命名
import { divide, minus, plus as add, times } from '@/uni_modules/uview-ui/libs/function/digit.js'
```

此外utils目录下定义了部分常用工具函数:

```js
// 手机号、银行卡号脱敏
import { hideMobile, hideBankCard } from '@/utils/formatter.js'
// uni定位方法promise化
import { getLocation, isSameLocation } from '@/utils/map.js'
// 密码校验、银行卡号校验
import { checkPwd, checkBankCard } from '@/utils/test.js'
```

> 此外在非APP NVUE页面中，uview全局混入了`@/uni_modules/uview-ui/libs/mixin/mixin.js`文件，文件中定义了url、customStyle等prop，所以需要注意不能在data中重复定义，同时提供了bem、openPage、preventEvent等实用方法，具体可以查看源码
