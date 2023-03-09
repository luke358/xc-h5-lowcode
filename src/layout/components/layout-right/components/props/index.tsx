import { Empty, Form } from 'antd'
import { useForm } from 'antd/es/form/Form'
import FormItem from 'antd/es/form/FormItem'
import React from 'react'
import { editorComponent } from 'src/register'
import useEditor from 'src/store/useEditor'
import PropsConfig from './props-config'

export default function Props() {
  const active = useEditor(state => state.active)
  const blocks = useEditor(state => state.editorData.blocks)
  const update = useEditor(state => state.update)
  const currentBlock = blocks[active]
  const [form] = useForm()

  const renderProps = () => {
    const content = []

    if (!currentBlock)
      return <Empty />
    const component = editorComponent.componentMap[currentBlock.componentKey]
    content.push(<FormItem key={`${currentBlock._id}`} label="组件ID">{currentBlock._id}</FormItem>)
    if (component.props)
      content.push(<PropsConfig component={component} key={'props'} block={currentBlock} />)

    return content
  }
  return (
    <Form form={form} onValuesChange={(changedValues, values) => {
      Object.entries(values).forEach(([key, value]) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_id, ...k] = key.split('-')

        update(k, value)
      })
    }}>{renderProps()}</Form>
  )
}
