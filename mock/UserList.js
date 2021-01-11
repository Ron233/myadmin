/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2021-01-11 14:26:21
 * @LastEditors: wrh
 * @LastEditTime: 2021-01-11 14:27:36
 */
export default {
  'get /ds/list': function(req,res){
    res.json({
      data:['zhangsan','lisi']
    })
  }
}