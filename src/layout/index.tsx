import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Layout } from 'antd'
import useDrag from 'src/store/useDrag'
import LayoutLeft from './components/layout-left'
import LayoutRight from './components/layout-right'
import LayoutHeader from './components/layout-header'
import LayoutMain from './components/layout-main'
const { Header, Sider, Content } = Layout

export default function index() {
  const onDragEnd = useDrag(state => state.onDragEnd)
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Layout style={{ height: '100%' }}>
          <Header style={{ height: 60, background: '#fff' }} color="#fff" className="relative shadow-sm z-10">
            <LayoutHeader />
          </Header>
          <Layout style={{ height: 'cale(100%) - 60px' }}>
            <Sider width={380} theme="light" className=" pt-[15px] overflow-y-auto">
              <LayoutLeft />
            </Sider>
            <Content className="overflow-y-scroll">
              <LayoutMain />
            </Content>
            <Sider width={380} theme="light" className="shadow-md overflow-y-auto" >
              <LayoutRight />
            </Sider>
          </Layout>
        </Layout>
      </DragDropContext>
  )
}
