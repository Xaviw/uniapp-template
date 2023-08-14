const JSONBig = require('json-bigint')({ storeAsString: true })

export {
  decode,
  encode,
  deserialize,
}

function decode(data) {
  data = strToBytes(data)
  const lengthData = BytesToIntBigEndian(data.slice(0, 4))
  const version = byteToShortBig(data.slice(4, 6))
  const flag = byteToShortBig(data.slice(6, 8))
  const serviceId = byteToShortBig(data.slice(8, 10))
  const commandId = byteToShortBig(data.slice(10, 12))
  const seqnum = byteToShortBig(data.slice(12, 14))
  const reserved = byteToShortBig(data.slice(14, 16))
  const body = data.slice(16)
  const action = {
    lengths: lengthData, // body.length+16
    version,
    flag,
    serviceId,
    commandId,
    seqnum,
    reserved,
    body: new Uint8Array(body),
  }
  return action
}

function encode(body, service, command) {
  // 拼接发送数据时候的数据格式
  const action = {
    lengths: '', // body.length+16
    version: 0,
    flag: 0,
    serviceId: service,
    commandId: command,
    seqnum: 0,
    reserved: 0,
    body,
  }
  action.lengths = action.body.length + 16
  let arr = []
  arr = arr.concat(encryptionIntToByte(action.lengths))
  arr = arr.concat(encryptionShortToByte(action.version))
  arr = arr.concat(encryptionShortToByte(action.flag))
  arr = arr.concat(encryptionShortToByte(action.serviceId))
  arr = arr.concat(encryptionShortToByte(action.commandId))
  arr = arr.concat(encryptionShortToByte(action.seqnum))
  arr = arr.concat(encryptionShortToByte(action.reserved))
  // arr = arr.concat(action.body)
  return Bytes2Str(arr) + Bytes2Str(action.body)
}

function deserialize(array) {
  // 16进制字节数组转字符串
  let out = ''
  let i
  let c
  let char2
  let char3
  const len = array.length
  i = 0
  while (i < len) {
    c = array[i++]
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        out += String.fromCharCode(c)
        break
      case 12:
      case 13:
        char2 = array[i++]
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
        break
      case 14:
        char2 = array[i++]
        char3 = array[i++]
        out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0))
        break
    }
  }
  return JSONBig.parse(decodeURIComponent(out))
}

function strToBytes(res) {
  // 16进制字符串转byte字节数组
  let pos = 0
  let len = res.length
  if (len % 2 !== 0)
    return null

  len /= 2
  const hexA = []
  for (let i = 0; i < len; i++) {
    const s = res.substr(pos, 2)
    const v = Number.parseInt(s, 16)
    hexA.push(v)
    pos += 2
  }
  return hexA
}

function BytesToIntBigEndian(bytes) {
  // byte数组到int的转换(大端)
  const int1 = bytes[3] & 0xFF
  const int2 = (bytes[2] & 0xFF) << 8
  const int3 = (bytes[1] & 0xFF) << 16
  const int4 = (bytes[0] & 0xFF) << 24
  return int1 | int2 | int3 | int4
}

function byteToShortBig(b) {
  return (b[0] << 8) | (b[1] & 0xFF)
}

function encryptionIntToByte(n) {
  // 处理短整short转换为2字节的byte数组
  const b = [4]
  b[3] = n & 0xFF
  b[2] = (n >> 8) & 0xFF
  b[1] = (n >> 16) & 0xFF
  b[0] = (n >> 24) & 0xFF
  return b
}

function encryptionShortToByte(s) {
  // 处理短整short转换为2字节的byte数组
  const targets = []
  targets[0] = (s >> 8) & 0xFF
  targets[1] = s & 0xFF
  return targets
}

function Bytes2Str(arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].toString(16)
    if (tmp.length === 1)
      tmp = `0${tmp}`

    str += tmp
  }
  return str
}
