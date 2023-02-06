import { Form } from 'antd'
import React from 'react'
import { editorComponent } from 'src/register'
import useEditor from 'src/store/useEditor'
import PropsConfig from './props-config'

export default function Props() {
  const active = useEditor(state => state.active)
  const blocks = useEditor(state => state.editorData.blocks)
  const update = useEditor(state => state.update)
  const currentBlock = blocks[active]

  const renderProps = () => {
    const content = []

    if (!currentBlock)
      return
    const component = editorComponent.componentMap[currentBlock.componentKey]
    if (component.props)
      content.push(<PropsConfig component={component} key={'props'} block={currentBlock} />)

    return content
  }
  return (
    <Form onValuesChange={(changedValues) => {
      Object.entries(changedValues).forEach(([key, value]) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_id, ...k] = key.split('-')

        update(k, value)
      })
    }} layout="vertical">{renderProps()}</Form>
  )
}
