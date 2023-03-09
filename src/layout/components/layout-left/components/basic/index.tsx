import React from 'react'
// import CompPreview from 'src/components/comp-preview'
import DragList from 'src/components/drag-list'
import { editorComponent } from 'src/register'

export default function Basic() {
  const baseWidgets = editorComponent.componentModules.baseWidgets

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
