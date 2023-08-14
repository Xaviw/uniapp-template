const DEFAULT_PING_MESSAGE = 'ping'

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
export function useSocket(url, options = {}) {
  const {
    onConnected,
    onClosed,
    onError,
    onMessage,
    heartbeat = false,
    autoReconnect = false,
    immediate = true,
    multiple = false,
    header,
    method = 'GET',
    protocols = [],
  } = options

  let status = 'CLOSED'
  let task

  let heartbeatPause
  let heartbeatResume

  let explicitlyClosed = false
  let retried = 0

  let bufferedData = []

  let pongTimeoutWait

  // 1000 表示正常关闭
  // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
  // https://uniapp.dcloud.net.cn/api/request/socket-task.html#sockettask-close
  const close = ({ code = 1000, reason } = {}) => {
    if (!task)
      return
    explicitlyClosed = true
    heartbeatPause?.()
    task.close({ code, reason })
  }

  const _sendBuffer = () => {
    if (bufferedData.length > 0 && task && status === 'OPEN') {
      for (const buffer of bufferedData) task.send({ data: buffer })
      bufferedData = []
    }
  }

  const resetHeartbeat = () => {
    clearTimeout(pongTimeoutWait)
    pongTimeoutWait = undefined
  }

  const send = (data, useBuffer = true) => {
    if (!task || status !== 'OPEN') {
      if (useBuffer)
        bufferedData.push(data)
      return false
    }
    _sendBuffer()
    task.send({ data })
    return true
  }

  const _init = () => {
    if (explicitlyClosed)
      return

    task = uni.connectSocket({
      url,
      multiple,
      header,
      method,
      protocols,
      complete: () => {
        // just for correct types
      },
    })
    status = 'CONNECTING'

    task.onOpen((result) => {
      status = 'OPEN'
      onConnected?.(task, result)
      heartbeatResume?.()
      _sendBuffer()
    })

    task.onClose((result) => {
      status = 'CLOSED'
      task = undefined
      onClosed?.(task, result)
      if (!explicitlyClosed && autoReconnect) {
        const { retries = -1, delay = 1000, onFailed } = resolveNestedOptions(autoReconnect)
        retried += 1
        if (typeof retries === 'number' && (retries < 0 || retried < retries))
          setTimeout(_init, delay)
        else if (typeof retries === 'function' && retries())
          setTimeout(_init, delay)
        else onFailed?.()
      }
    })

    task.onError((error) => {
      onError?.(task, error)
    })

    task.onMessage((result) => {
      if (heartbeat) {
        resetHeartbeat()
        const { message = DEFAULT_PING_MESSAGE } = resolveNestedOptions(heartbeat)
        if (result.data === message)
          return
      }
      onMessage?.(task, result)
    })
  }

  if (heartbeat) {
    const {
      message = DEFAULT_PING_MESSAGE,
      interval = 1000,
      pongTimeout = 1000,
    } = resolveNestedOptions(heartbeat)

    let timer = null

    function clean() {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }

    function resume() {
      if (interval <= 0)
        return
      clean()
      timer = setInterval(() => {
        send(message, false)
        if (pongTimeoutWait != null)
          return
        pongTimeoutWait = setTimeout(() => {
          // 明确关闭连接以避免重试
          close({})
        }, pongTimeout)
      }, interval)
    }

    heartbeatPause = clean
    heartbeatResume = resume
  }

  const open = () => {
    close({})
    explicitlyClosed = false
    retried = 0
    _init()
  }

  if (immediate)
    open()

  return {
    status,
    open,
    close,
    send,
    task,
  }
}

function resolveNestedOptions(options) {
  if (options === true)
    return {}
  return options
}
