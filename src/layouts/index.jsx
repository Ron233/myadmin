import React from 'react'
import { Layout } from 'antd'

const { Header, Footer,Sider, Content }  = Layout

class BasicLayout extends React.Component {
  render(){
    return (
      <Layout>
        <Sider width={256} style={{minHeight:'100vh',color:'white'}}>
          sider
        </Sider>
        <Layout>
          <Header style={{background:'#fff',textAlign:'center',padding:'1'}}>
            header
          </Header>
          <Content style={{margin:'24px 16px 0'}}>
            <div>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlign:"center"}}>
            ronwrh
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout