/**
 * 本地存储封装模块
 */

export const getItem = (name) => {
  const data = window.localStorage.getItem(name);
  // 因为data可能不是JSON格式的字符串
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export const setItem = (name, value) => {
  // 如果value 不是一个对象，也有可能是一个字符串，
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

export const removeItem = (name) => {
  window.localStorage.removeItem(name)
}