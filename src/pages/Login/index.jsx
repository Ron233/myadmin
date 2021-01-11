import {Component,Fragment} from 'react'
import styles from './index.less'
import { Button, Row, Input, Form } from 'antd'
const FormItem = Form.Item


class Login extends Component{
  render(){
    const handleOk = values => {
      console.log('登录');
    }
    return (
      <Fragment>
      <div className={styles.form}>
        <div className={styles.logo}>
          <span>开元恒企</span>
        </div>
        <Form
          onFinish={handleOk}
          >
          <FormItem name="username" 
            rules={[{ required: true }]} hasFeedback>
              <Input
                placeholder='用户名'
              />
          </FormItem>
          <FormItem name="password"
            rules={[{ required: true }]} hasFeedback>
              <Input
                type="password"
                placeholder='密码'
              />
          </FormItem>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              loading={false}
            >
              登录
            </Button>
            <p>
              <span className="margin-right">
                admin
              </span>
              <span>
                admin
              </span>
            </p>
          </Row>
        </Form>
      </div>
    </Fragment>
    )
  }
}

export default Login