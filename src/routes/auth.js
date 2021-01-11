/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2021-01-11 15:45:49
 * @LastEditors: wrh
 * @LastEditTime: 2021-01-11 15:46:15
 */
import { Redirect } from 'umi'
export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}