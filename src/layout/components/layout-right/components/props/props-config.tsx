import React from 'react'
import { Input, InputNumber, Select, Switch } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import OptionList from 'src/components/filter-component/OptionList'

interface PropsConfigProps {
  block: RenderBlockData
  component: RenderComponent
}
export default function PropsConfig(props: PropsConfigProps) {
  const { block, component } = props
  const blockProps = block.props

  const renderItem = (key: string, value: any) => {
    let item = null
    const formItemProps: any = {}
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
          <Select mode={value.multiple ? 'multiple' : undefined} allowClear options={value.options} />
        )
        break
      case 'switch':
        formItemProps.valuePropName = 'checked'
        item = (
          <Switch />
        )
        break
      case 'inputNumber':
        item = (
          <InputNumber />
        )
        break
      case 'optionList':
        item = (
            <OptionList {...value} />
        )
    }

    return <FormItem {...formItemProps} initialValue={blockProps[key]} name={`${block._id}-props-${key}`} key={`${block._id}-${key}`} label={value.label}>{item}</FormItem>
  }
  return <>{
    Object.entries(component.props || {}).map(([key, value]) => {
      return renderItem(key, value)
    })
  }</>
}
