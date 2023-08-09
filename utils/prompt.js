/**
 * showToast封装方法
 * @param {string} content - 提示内容
 * @params {Object|'success'|'error'} options - 自定义参数，提供success和error字符串表示icon类型
 */
export function msg(content, options = {}) {
  if (["success", "error"].includes(options)) {
    options = { icon: options };
  }
  return uni.showToast({
    title: content,
    icon: "none",
    ...options,
  });
}

/**
 * showLoading封装方法
 * @param {string} content - 提示文字
 * @param {Object} options - 自定义选项
 */
export function loading(content, options = {}) {
  return uni.showLoading({
    title: content,
    ...options,
  });
}

/**
 * 提示框，标题默认为"提示"
 * @param {string} content - 提示内容
 * @param {Object} options - 自定义选项
 */
export function modal(content, options = {}) {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title: "提示",
      content: content,
      ...options,
      success({ confirm, cancel, content }) {
        if (confirm) {
          resolve(content);
        } else {
          reject(cancel);
        }
      },
      fail(err) {
        reject(err);
      },
    });
  });
}
