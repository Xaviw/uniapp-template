import { Login, BaseDefine, Other } from '@/libs/proto.js';
import { encode, decode } from './protobuf.js'
import { LOGIN_PATH } from '@/config.js'
import store from '@/store'

const strategies = [
  // 登录响应
  {
    type: BaseDefine.LoginCmdID.CID_LOGIN_RES_USERLOGIN,
    parser: Login.IMLoginRes,
    handler: data => {
      console.log('socket登录响应', data);
    },
  },
  // 心跳响应
  {
    type: BaseDefine.OtherCmdID.CID_OTHER_HEARTBEAT,
    parser: BaseDefine.NotifyInfo,
    handler: () => {
      uni.$socket.send(genHeartbeatData())
    },
  },
  // 挤下线
  {
    type: BaseDefine.LoginCmdID.CID_LOGIN_KICK_USER,
    parser: Login.IMKickUser,
    handler: () => {
      store.dispatch('logout')
      uni.showModal({
        title: '您的账号在另一设备登录',
        content: '如果这不是您本人的操作，建议您修改密码',
        showCancel: false,
        success: () => {
          uni.reLaunch({
            url: LOGIN_PATH,
          })
        },
      })
    },
  },
]

export function watchSocketMessage() {
  uni.$on('socketMessage', e => {
    const message = decode(e.data)
    for (let item of strategies) {
      if (message.commandId == item.type) {
        const data = item.parser.decode(new Uint8Array(message.body))
        item.handler(data)
        break;
      }
    }
  })
}

const os = uni.$u.os()

export function genHeartbeatData() {
  const buffer = Other.IMHeartBeatReq.encode({ currentTime: Date.now() }).finish()
  return encode(buffer)
}

export function socketLogin() {
  const param = Login.IMLoginReq.create({
    onlineStatus: 1,
    clientType: os == 'ios' ? 17 : 18,
    clientVersion: '0',
    token: uni.getStorageSync('token')?.replace('Bearer ', ''),
    userType: 2,
  })
  const buffer = Login.IMLoginReq.encode(param).finish()
  uni.$socket.send(encode(buffer, BaseDefine.ServiceID.SID_LOGIN, BaseDefine.LoginCmdID.CID_LOGIN_REQ_USERLOGIN))
}
