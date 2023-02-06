import { Input, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React from 'react'

interface PropsConfigProps {
  block: RenderBlockData
  component: RenderComponent
}
export default function PropsConfig(props: PropsConfigProps) {
  const { block, component } = props
  const blockProps = block.props

  const renderItem = (key: string, value: any) => {
    let item = null
    switch (value.type) {
      case 'input':
        item = (
          <Input
            placeholder={blockProps.placeholder}
          />
        )
        break
      case 'select':
        item = (
          <Select mode={value.multiple ? 'multiple' : undefined} options={value.options} />
        )
        break
    }

    return <FormItem initialValue={blockProps[key]} name={`${block._id}-props-${key}`} key={`${block._id}-${key}`} label={value.label}>{item}</FormItem>
  }
  return <>{
    Object.entries(component.props || {}).map(([key, value]) => {
      return renderItem(key, value)
    })
  }</>
}
