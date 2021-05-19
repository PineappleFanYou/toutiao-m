/**
 * 关于用户登录注册的接口
 */

import request from '../utils/request'

export const login = (data) => {
  return request({
    url: 'app/v1_0/authorizations',
    method: 'POST',
    data
  })
}


export const sendSms = (mobile) => {
  return request({
    url: `app/v1_0/sms/codes/${mobile}`,
    method: 'GET'
  })
}