import React, { useState } from 'react'
import type { DropResult } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import { Layout } from 'antd'
import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import { useUpdate } from 'ahooks'
import { editorConfig } from '../register'
import LayoutLeft from './components/layout-left'
import LayoutRight from './components/layout-right'
import LayoutHeader from './components/layout-header'
import LayoutMain from './components/layout-main'
const { Header, Sider, Content } = Layout
export const EditorContext = React.createContext<{ editorList: RenderComponent[]; delComponent?: (idx: number) => void }>({ editorList: [] })

const reorder = (list: RenderComponent[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const del = (list: RenderComponent[], index: number) => {
  list.splice(index, 1)
  return list
}

export default function index() {
  const [editorList, setList] = useState<RenderComponent[]>([])
  const updatePage = useUpdate()

  const delComponent = (idx: number) => {
    setList(del(editorList, idx))
    updatePage()
  }
  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result
    console.log(editorConfig.componentMap)

    console.log('==> result', result)

    // dropped outside the list
    if (!destination)
      return

    if (destination.droppableId === 'COMPONENT') {
      if (source.droppableId !== 'COMPONENT') {
        // 复制
        const _editorList = cloneDeep(editorList)
        _editorList.splice(destination.index, 0, { ...cloneDeep(editorConfig.componentMap[draggableId]), _id: nanoid() })
        setList(_editorList)
      }
      else {
        // 排序
        setList(reorder(editorList, source.index, destination.index))
      }
    }
  }
  return (
    <EditorContext.Provider value={{ editorList, delComponent }}>
      <DragDropContext onDragEnd={onDragEnd}>
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
      </DragDropContext>
    </EditorContext.Provider>
  )
}
