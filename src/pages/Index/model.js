/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2021-01-11 14:29:55
 * @LastEditors: wrh
 * @LastEditTime: 2021-01-11 17:27:11
 */
import api from '@/services'

let { initData } = api

export default  {
  namespace:'index',
  state:{
    data:[]
  },
  reducers:{
    save(state,result){
      if(result.data){
        return result.data
      }
      let list = [...state.data,'freeman']
      return {
        data:list
      }
    }
  },
  effects:{
    *initData(params,sageEffects){
      const { call,put } = sageEffects
      const url = '/ds/list'
      let result = yield call(initData)

      yield put({
        type:'save',
        data:result
      })
    }
  },
}