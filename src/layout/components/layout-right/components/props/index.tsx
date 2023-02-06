import React from 'react'
import { editorComponent } from 'src/register'
import useEditor from 'src/store/useEditor'

export default function Props() {
  const active = useEditor(state => state.active)
  const blocks = useEditor(state => state.editorData.blocks)
  const currentBlock = blocks[active]
  console.log(currentBlock)

  const renderProps = () => {
    if (!currentBlock)
      return
    const component = editorComponent.componentMap[currentBlock.componentKey]
    console.log(component)
  }
  renderProps()
  return (
    <div>props</div>
  )
}
