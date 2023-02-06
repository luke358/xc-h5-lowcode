import { Input } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React from 'react'

interface PropsConfigProps {
  block: RenderBlockData
  component: RenderComponent
}
export default function PropsConfig(props: PropsConfigProps) {
  const { block, component } = props
  const blockProps = block.props

  const renderItem = (key: string, val: any) => {
    let item = null
    switch (val.type) {
      case 'input':
        item = (
          <Input
            {...blockProps}
            placeholder={blockProps.placeholder}
          />
        )
    }

    return <FormItem initialValue={blockProps[key]} name={`${block._id}-props-${key}`} key={`${block._id}-${key}`} label={val.label}>{item}</FormItem>
  }
  return <>{
    Object.entries(component.props || {}).map(([key, value]) => {
      return renderItem(key, value)
    })
  }</>
}
