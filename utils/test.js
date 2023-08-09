// 校验密码  设置6-18位密码，密码不能全是数字、字母
export const checkPwd = (val) =>
  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(val);

// 校验银行卡号
export const checkBankCard = (val) => /^([1-9]{1})(\d{15}|\d{18})$/.test(val);

// 校验经度
export const checkLongitude = (val) =>
  /^[-+]?(0(\.\d{1,15})?|([1-9](\d)?)(\.\d{1,15})?|1[0-7]\d{1}(\.\d{1,15})?|180\.0{1,15})$/.test(
    val
  );

// 校验纬度
export const checkLatitude = (val) =>
  /^[-+]?((0|([1-8]\d?))(\.\d{1,15})?|90(\.0{1,15})?)$/.test(val);

