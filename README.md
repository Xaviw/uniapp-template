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

1. 定义了类似Tailwind的常用css类，查看`styles/common.scss`、`styles/generate.scss`，`generate`默认生成范围为`0-30`，可以自行修改文件顶部的配置项
2. 按需在`styles/uview.theme.scss`中替换uview主题颜色，uview组件样式并不是直接使用的主题色变量，所以还需要单独配置组件
3. 按需在`utils/setUViewConfig.js`中自定义uview组件配置，参考[官网介绍](https://www.uviewui.com/components/setting.html#修改uview内置配置方案)

### CSS类列表

基础样式查看`style/common.scss`文件，同时uview也提供了部分css类，可以查看`uview-ui/libs/css/`下的文件，较为实用的有：

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

`generate.scss`文件中提供了四个变量：

```scss
$num: 0; // 循环生成初始点
$sum: 30; // 循环生成终点
$step: 2; // 步长，由于设计稿2rpx=1px，故此处步长为2
$unit: 'rpx'; //单位
```

按上诉设置后，`w-#{$num}`会对应`width: #{$num * $step}#{$unit}`，即`w-10`对应`width: 20rpx`

颜色变量使用了[uview主题色变量](https://www.uviewui.com/components/color.html)，使用格式为`name-type`或`name-type-level`，name对应设置的对象，例如`bg -> background`；type对应主题，uview中包括`primary`、`success`、`warning`、`error`、`info`；level对应颜色的深浅，包括`dark`、`disabled`、`light`，不写level时即为默认的主题颜色

使用时`bg-primary`对应`background-color: $u-primary`，`text-primary-dark`对应`color: $u-primary-dark`

**后续使用`x`代替类名中的`num`，使用`y`代替生成的值，不再重复书写**

|              名称              |        对应样式        |          范围          | 兼容性 |
| :----------------------------: | :--------------------: | :--------------------: | :----: |
|              w-x               |        width: y        |      0-60(sum*2)       |        |
|              h-x               |       height: y        |      0-60(sum*2)       |        |
|              p-x               |       padding: y       |          0-30          |        |
|              px-x              |      padding: 0 y      |          0-30          |        |
|              py-x              |      padding: y 0      |          0-30          |        |
|              pt-x              |    padding: y 0 0 0    |          0-30          |        |
|              pr-x              |    padding: 0 y 0 0    |          0-30          |        |
|              pb-x              |    padding: 0 0 y 0    |          0-30          |        |
|              pl-x              |    padding: 0 0 0 y    |          0-30          |        |
|              p-x               |       margin: y        |          0-30          |        |
|              mx-x              |      margin: 0 y       |          0-30          |        |
|              my-x              |      margin: y 0       |          0-30          |        |
|              mt-x              |    margin: y 0 0 0     |          0-30          |        |
|              mr-x              |    margin: 0 y 0 0     |          0-30          |        |
|              mb-x              |    margin: 0 0 y 0     |          0-30          |        |
|              ml-x              |    margin: 0 0 0 y     |          0-30          |        |
|            border-x            |    border-width: y     |          0-30          |        |
|           border-t-x           |  border-top-width: y   |          0-30          |        |
|           border-r-x           | border-right-width: y  |          0-30          |        |
|           border-b-x           | border-bottom-width: y |          0-30          |        |
|           border-l-x           |  border-left-width: y  |          0-30          |        |
|           rounded-x            |    border-radius: y    |          0-30          |        |
|            leding-x            |     line-height: y     |          0-30          |        |
|              t-x               |         top: y         |          0-30          |        |
|              r-x               |        right: y        |          0-30          |        |
|              b-x               |       bottom: y        |          0-30          |        |
|              l-x               |        left: y         |          0-30          |        |
|             text-x             |      font-size: y      |          0-30          |        |
|     bg-type或bg-type-level     |  background-color: y   | 查看上方颜色变量的介绍 |        |
|   text-type或text-type-level   |        color: y        | 查看上方颜色变量的介绍 |        |
| border-type或border-type-level |    border-color: y     | 查看上方颜色变量的介绍 |        |
|              z-x               |       z-index: x       |          0-30          | 非NVUE |
|             w-p-x              |   width: ${num*10}%    |          1-10          | 非NVUE |
|             h-p-x              |   height: ${num*10}%   |          1-10          | 非NVUE |

### 页面样式

App.vue中设置了全局的根样式

```scss
// APP NVUE页面不支持标签样式，此处定义类样式是可以vue、nvue通用的
// APP NVUE页面默认字号18px，其他默认字号16px
// 除H5外，page标签样式只能写在非scope style中
page {
  color: $u-content-color;
  background-color: $u-bg-color;
}
```

NVUE页面不支持标签样式，需要单独定义。`pages.json -> globalStyle -> app-plus -> background`属性与这里的背景色设置一致，便能保证所有页面背景色统一

另外`pages.json`文件中对其他样式属性做了说明，可以按需求进行修改

### 扩展图标

如果有扩展图标的需求，请在[iconfont](https://www.iconfont.cn/)中将图标保存至一个项目后，按uview官方指南-[CustomIcon 扩展自定义图标库](https://www.uviewui.com/guide/customIcon.html)进行操作

## 请求

使用了[luch-request](https://www.quanzhan.co/luch-request/guide/3.x/)库处理请求，相关配置定义在`utils/http.js`中。请求接口定义在根目录apis文件夹下，定义方式已有例子，如需额外的请求器实例，参考`api/external.js`文件与`utils/http.js`文件，重新定义一个实例即可

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

`network/socket.js`中定义了通用useSocket方法，并提供了完整的类型定义：

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

如果用到了protobuf序列化，需要替换`libs/proto.js`文件。在`utils/protobufUtil.js`中定义了`decode`、`encode`、`deserialize`方法:

```js
import { encode, decode, deserialize } from '@/utils/protobufUtil.js'

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

项目内采用[upushy](https://ext.dcloud.net.cn/plugin?id=4200)提供的更新策略，upushy后台配置好应用后，填写`config.js`中相关配置即可使用

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

  生成二维码组件`<tki-qrcode :size="320" :val="val" loadMake />`

## 内置组件

1. `captcha`组件传入字符生成图像验证码`<captcha :code="code" @click.native="fetchCode" />`
2. `sliderVerify`组件为滑动解锁组件，按需求修改内部实现`<slider-verify :text="text" @success="handleNext" :disabled="disabled" ref="verify">`

## 内置工具

`uview`内置了部分实用工具函数，查看[官网介绍](https://www.uviewui.com/js/intro.html)

还有部分函数未暴露到`$u`中，可以手动引入使用，详细可以查看源码`@/uni_modules/uview-ui/libs/`

```js
import dayjs from '@/uni_modules/uview-ui/libs/util/dayjs.js'
```

此外utils目录下定义了部分常用工具函数:

```js
// 手机号、银行卡号脱敏
import { hideMobile, hideBankCard } from '@/utils/formatter.js'
// 高精度计算
import { add, minus, multiply, divide } from '@/utils/helper.js'
// uni定位方法promise化
import { getLocation, isSameLocation } from '@/utils/mapUtil.js'
// 系统原生语音播放，仅APP
import audioPlay from '@/utils/speechSynthesis.js'
// 密码校验、银行卡号校验
import { checkPwd, checkBankCard } from '@/utils/test.js'
```
