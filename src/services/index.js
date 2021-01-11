/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2021-01-11 17:01:07
 * @LastEditors: wrh
 * @LastEditTime: 2021-01-11 17:23:52
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2020-12-21 16:46:53
 * @LastEditors: wrh
 * @LastEditTime: 2020-12-22 16:02:48
 */
import request from '@/utils/request'

import api from './api'

const gen = params => {
  let url = params
  let method = 'GET'

  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url = paramsArray[1]
  }

  return function(data,options) {
    return request({
      url,
      data,
      method,
      ...options
    })
  }
}

const APIFunction = {}
for (const key in api) {
  APIFunction[key] = gen(api[key])
}

export default APIFunction
