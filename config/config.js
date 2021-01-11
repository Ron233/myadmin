/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2021-01-11 14:05:16
 * @LastEditors: wrh
 * @LastEditTime: 2021-01-11 17:42:06
 */
import routes from '../src/routes'
const fs = require('fs')
const path = require('path')
const resolve = path.resolve
const lessToJs = require('less-vars-to-js')
export default {
  routes,
  theme: lessToJs(
    fs.readFileSync(path.join(__dirname, '../src/themes/default.less'), 'utf8')
  ),
  alias: {
    api: resolve(__dirname, '../src/services/'),
    components: resolve(__dirname, './src/components'),
    config: resolve(__dirname, '../src/utils/config'),
    themes: resolve(__dirname, '../src/themes'),
    utils: resolve(__dirname, '../src/utils'),
  },
  dva:{
    immer: true,
    hmr: false,
  },
  antd:{}
}