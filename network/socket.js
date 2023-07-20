const SOCKET_READY_STATE = {
  CONNECTING: 0, // 正在连接中
  OPEN: 1, // 已经连接并且可以通讯
  CLOSING: 2, // 连接正在关闭
  CLOSED: 3, // 连接已关闭或者没有连接成功
};

export default class Socket {
  url; // websocket地址
  task; // socket任务

  requireReconnect = true; // 是否需要重连（非手动关闭需要重连）
  reconnectInterval; // 重连尝试间隔
  reconnectTimer; // 重连定时器

  useHeartbeat; // 是否定时发送心跳
  heartbeatTimer; // 发送心跳定时器
  heartbeatInterval; // 发送心跳间隔
  heartbeatData; // 心跳内容

  onOpen; // 传入的onOpen时执行的函数
  onCLose; // 传入的onClose时执行的函数

  constructor({
    url,
    reconnectInterval = 1000 * 5,
    useHeartbeat = true,
    heartbeatInterval = 1000 * 30,
    heartbeatData = 'heartbeat',
    onOpen = () => {},
    onClose = () => {},
  } = {}) {
    this.url = url;
    this.reconnectInterval = reconnectInterval;
    this.useHeartbeat = useHeartbeat;
    this.heartbeatInterval = heartbeatInterval;
    this.heartbeatData = heartbeatData;
    this.onOpen = onOpen;
    this.onClose = onClose;
  }

  connect() {
    // 已连接且未关闭，忽略
    if (this.task && ![SOCKET_READY_STATE.CLOSING, SOCKET_READY_STATE.CLOSED]
      .includes(this.task.readyState)) {
      return;
    }

    this.requireReconnect = true;

    this.task = uni.connectSocket({
      url: this.url,
      fail: (err) => {
        console.log("连接socket调用失败", err);
        this.reconnect()
      },
    });

    this.task.onOpen(async () => {
      console.log("socket连接成功");
      await this.onOpen();
      if (this.useHeartbeat) {
        this.heartbeatTimer = setInterval(() => {
          this.send(this.heartbeatData)
        }, this.heartbeatInterval)
      }
    });

    task.onMessage((res) => {
      uni.$emit('socketMessage', res)
    });

    task.onError((e) => {
      console.log("socket错误", e);
      this.reconnect();
    });

    task.onClose(async (e) => {
      console.log("socket关闭", e);
      await this.onCLose();
      this.reconnect();
    });
  }

  disconnect() {
    this.task?.close({
      success: () => {
        console.log("关闭socket调用成功");
      },
      fail: (err) => {
        console.log("关闭socket调用失败", err);
      },
      complete: () => {
        this.task = null;
        this.requireReconnect = false;
      }
    })
  }

  reconnect() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.requireReconnect) {
      this.reconnectTimer = setTimeout(this.connect, this.reconnectInterval);
    }
  }

  send(data) {
    if (!this.task) {
      this.reconnect()
    } else {
      this.task.send({
        data,
        fail: (err) => {
          console.log("socket发送错误", err);
          this.reconnect();
        },
      });
    }
  }
}
