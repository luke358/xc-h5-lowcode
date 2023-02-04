import React from 'react'
import DragList from 'src/components/drag-list'
import { editorConfig } from 'src/register'

export default function Basic() {
  const baseWidgets = editorConfig.componentModules.baseWidgets

  return (
    <div>
      {/* {baseWidgets.map((item, i) => {
        return <CompPreview key={i} data={item}>{item.preview()}</CompPreview>
      })} */}
      <DragList id="baseWidgets" data={baseWidgets} />
    </div>
  )
}

Basic.label = '基本组件'
Basic.componentName = 'BaseWidgets'
