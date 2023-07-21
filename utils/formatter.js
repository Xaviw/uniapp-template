import { checkBankCard } from '@/utils/test.js'

export const hideMobile = phone => {
  if (!uni.$u.test.code(phone, 11)) { return phone }
  return `${phone.slice(0, 3)}****${phone.slice(7)}`
}

export const hideBankCard = card => {
  if (!checkBankCard(card)) { return card }
  return '*'.repeat(card.length - 4) + card.slice(-4)
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
}
