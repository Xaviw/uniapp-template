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
}
