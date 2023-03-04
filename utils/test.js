// 校验密码  设置6-16位密码，密码不能全是数字、字母
export const checkPwd = val => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val)

// 校验银行卡号
export const checkBankCard = val => /^([1-9]{1})(\d{15}|\d{18})$/.test(val)
