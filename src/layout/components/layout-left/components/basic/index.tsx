import React from 'react'
import CompPreview from '../../../../../components/comp-preview'
import { editorConfig } from '../../../../../register'

export default function Basic() {
  const baseWidgets = editorConfig.componentModules.baseWidgets

  return (
    <div>
      {baseWidgets.map((item, i) => {
        return <CompPreview key={i} data={item}>{item.preview()}</CompPreview>
      })}
    </div>
  )
}

Basic.label = '基本组件'
Basic.componentName = 'BaseWidgets'
