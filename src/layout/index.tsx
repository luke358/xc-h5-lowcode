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
      <Header style={{ height: 60, background: '#fff' }} color="#fff" className="relative shadow-sm z-10">
        <LayoutHeader />
      </Header>
      <Layout style={{ height: 'cale(100%) - 60px' }}>
        <Sider width={380} theme="light" className=" pt-[15px]">
          <LayoutLeft />
        </Sider>
        <Content className=" pt-[15px]">
          <LayoutMain />
        </Content>
        <Sider theme="light">
          <LayoutRight />
        </Sider>
      </Layout>
    </Layout>
  )
}
