<<<<<<< HEAD
import { checkBankCard } from '@/utils/test.js'

export const hideMobile = val => {
  if (!uni.$u.test.code(val, 11))
    return ''
  return `${val.substr(0, 3)}****${val.substr(7)}`
}

export const hideBankCard = val => {
  if (!checkBankCard(val))
    return ''
  return '*'.repeat(val.length - 4) + val.substr(-4)
}

// 米转换为格式化距离
export const distanceFormatter = m => m < 1000 ? `${m}米` : `${(m / 1000).toFixed(2)}公里`

// 秒转换为格式化时长
export const durationFormatter = s => {
  if (s < 60) {
    return `${s}秒`
  }
  else if (s < 3600) {
    return `${(s / 60).toFixed(2)}分钟`
  }
  else {
    const h = Math.floor(s / 3600)
    const m = Math.ceil((s % 3600) / 60)
    return m ? `${h}小时${m}分钟` : `${h}小时`
  }
=======
import { checkBankCard } from '@/utils/test.js'

/**
 * 电话号码脱敏
 * @param {string} val - 不匹配则原样返回
 */
export const hideMobile = val => {
  if (uni.$u.test.mobile(val)) {
    return val.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3")
  }
  return val
}

/**
 * 银行卡号脱敏
 * @param {string} val - 不匹配则原样返回
 */
export const hideBankCard = val => {
  if (!checkBankCard(val)) return val
  return '*'.repeat(val.length - 4) + val.substr(-4)
>>>>>>> ec2f89ac0053a50731e91f31c47f633c6eaa23b0
}
