import React from 'react'
import { Layout } from 'antd'

import LayoutLeft from './components/layout-left'
import LayoutRight from './components/layout-right'
import LayoutHeader from './components/layout-header'
import LayoutMain from './components/layout-main'

const { Header, Sider, Content } = Layout

export default function index() {
  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{ height: 80, background: '#fff' }} color="#fff" className="relative shadow-md z-10">
        <LayoutHeader />
      </Header>
      <Layout style={{ height: 'cale(100%) - 80px' }}>
        <Sider width={380} theme="light">
          <LayoutLeft />
        </Sider>
        <Content>
          <LayoutMain />
        </Content>
        <Sider theme="light">
          <LayoutRight />
        </Sider>
      </Layout>
    </Layout>
  )
}
