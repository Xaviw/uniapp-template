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
    heartbeatData = "heartbeat",
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
    if (
      this.task &&
      ![WebSocket.CLOSING, WebSocket.CLOSED].includes(this.task.readyState)
    ) {
      return;
    }

    // 连接时标记断开需要重连
    this.requireReconnect = true;

    this.task = uni.connectSocket({
      url: this.url,
      success: () => {
        console.log("连接socket调用成功");
      },
      fail: (err) => {
        console.log("连接socket调用失败", err);
        this.reconnect();
      },
    });

    // 连接成功时，执行onOpen钩子函数，并判断是否开启心跳机制
    this.task.onOpen(async () => {
      console.log("socket连接成功");
      await this.onOpen();
      if (this.useHeartbeat) {
        this.sendHeartbeat();
      }
    });

    // 广播socket消息
    this.task.onMessage((res) => {
      uni.$emit("socketMessage", res);
    });

    // 出错时尝试重连
    this.task.onError((e) => {
      console.log("socket错误", e);
      this.reconnect();
    });

    // 关闭时执行onClose钩子函数并尝试重连
    this.task.onClose(async (e) => {
      console.log("socket关闭", e);
      await this.onClose();
      this.reconnect();
    });
  }

  sendHeartbeat() {
    let msg = this.heartbeatData?.() || this.heartbeatData;
    this.heartbeatTimer = setInterval(() => {
      this.send(msg);
    }, this.heartbeatInterval);
  }

  // 主动断开，标记不需要重连，取消心跳
  disconnect() {
    this.task?.close({
      success: () => {
        console.log("关闭socket调用成功");
      },
      fail: (err) => {
        console.log("关闭socket调用失败", err);
      },
      complete: () => {
        this.heartbeatInterval && clearInterval(this.heartbeatInterval);
        this.task = null;
        this.requireReconnect = false;
      },
    });
  }

  // 重连
  reconnect() {
    // 已有等待中的重连，不再重复连接
    if (this.reconnectTimer) return;
    // 需要重连，则等待reconnectInterval后重连
    if (this.requireReconnect) {
      // 关闭上次连接中的心跳循环
      this.heartbeatInterval && clearInterval(this.heartbeatInterval);
      this.task = null;
      this.reconnectTimer = setTimeout(
        this.connect.bind(this),
        this.reconnectInterval
      );
    }
  }

  // 发送消息
  send(data) {
    if (!this.task) {
      this.reconnect();
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

