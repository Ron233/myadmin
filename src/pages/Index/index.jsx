/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2021-01-11 12:59:25
 * @LastEditors: wrh
 * @LastEditTime: 2021-01-11 17:24:14
 */
import React,{Component} from 'react';
import { connect } from 'umi';
import styles from './index.css';

const namespace = 'index'
const mapStateToProps = state =>{
  let listData = state[namespace].data
  return {
    listData
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    addUser:()=>{
      dispatch({
        type:`${namespace}/save`
      })
    },
    userList:()=>{
      dispatch({
        type:`${namespace}/initData`
      })
    }
  }
}

@connect(mapStateToProps,mapDispatchToProps)
class Index extends Component{
  componentDidMount(){
    this.props.userList()
  }
  render(){
    return (
      <div>
        <div>1</div>
      </div>
    )
  }
}

export default Index