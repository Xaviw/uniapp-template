# 移动端混开开发模板

## 技术栈

- uni-app
- Vue 2.x
- Vuex(HBuilderX 内置，不用安装)
- uview-ui 2.x(通过插件市场导入uni_modules，相比于npm安装多了代码提示)
- [luch-request](https://www.quanzhan.co/luch-request/guide/3.x/)(uview 中已集成的请求库)

## 安装

```shell
pnpm i
```

## 使用

1. 定义了类似windicss的常用css类，查看style/common、style/generate，generate范围生成到30，可以自行修改
2. uview可以在https://www.uviewui.com/guide/theme.html中自定义主题，生成后在style/uview.theme.scss中替换
3. 按需要在style/setUViewConfig.js中自定义uview组件配置，参考https://www.uviewui.com/components/setting.html#修改uview内置配置方案
4. 修改request/heplers.js中的默认请求头，状态码校验等
5. request/index.js响应拦截器中增加服务端自定义code校验

## webSocket

定义在request/socket中，使用方式：

```js
import Socket from '@/request/socket'

uni.socket = new Socket({
  url: "",
  onOpen:() => {
    // 可以做socket登录
  }
})

uni.socket.connect()
uni.socket.disconnect()
uni.socket.send("")
uni.$on("socketMessage", (msg) => {})
```

## 内置组件

1. captcha组件传入字符生成图像验证码`<captcha :code="code" @click.native="fetchCode" />`
2. slider-verify组件为滑动解锁组件，按需求修改内部实现`<slider-verify :text="text" @success="handleNext" :disabled="disabled" ref="verify">`

## uview 内置工具

uview 内置了部分实用工具函数，但并未暴露到$u 中，可以手动引入使用

更多查看`@/uni_modules/uview-ui/libs/`

```js
import dayjs from '@/uni_modules/uview-ui/libs/util/dayjs.js'

import { divide, minus, plus, times } from '@/uni_modules/uview-ui/libs/function/digit.js'
```

## 其他工具

1. lodash-es
2. js-base64
3. js-md5
4. json-bigint
  socket推送的超长数字，需要使用json-bigint解析，不能直接JSON.parse

  ```js
  const JSONBig = require('json-bigint')({ storeAsString: true });

  JSONBig.parse(data)
  ```

5. tki-qrcode
  生成二维码组件`<tki-qrcode :size="320" :val="val" loadMake />`

6. protobufjs
  提供了三个工具方法

  ```js
  import protobufUtil from "@/utils/protobufUtil"
  // toJSON中已使用JSONBig解析
  const {decode, encode, toJSON} = protobufUtil
  ```
