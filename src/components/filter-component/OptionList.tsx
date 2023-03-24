import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { cloneDeep } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import useEditor from 'src/store/useEditor'

export default function OptionList(props: any) {
  const { value, onChange, multiple } = props
  const update = useEditor(state => state.update)
  const [innerValue, setInnerValue] = useState<{ checked: boolean; label: string; value: string }[]>()
  useEffect(() => {
    setInnerValue(cloneDeep(value))
  }, value)

  const handleChange = (index: number, key: 'checked' | 'label' | 'value', value: any) => {
    const newInnerValue = cloneDeep(innerValue)
    if (key === 'checked' && !multiple) {
      newInnerValue?.forEach((val) => {
        val.checked = false
      })
    }
    if (newInnerValue) {
      (newInnerValue[index] as any)[key] = value
      update(['props', 'defaultValue'], newInnerValue.filter(opt => (opt as any).checked).map(_ => _.value))
      onChange(newInnerValue)
    }
  }

  const addOption = () => {
    const newInnerValue = cloneDeep(innerValue)
    newInnerValue?.push({ label: `选项${newInnerValue.length + 1}`, value: `${newInnerValue.length + 1}`, checked: false })
    setInnerValue(newInnerValue)
    onChange(newInnerValue)
  }
  // const delOption = (index) => {

  // }

  return (<>

    {innerValue?.map((item, index) => (
      <div key={item.value}>
        {/* {index === 0 ? <Row className="mb-2">{label}:</Row> : ''} */}
        <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
          <Form.Item >
            <Checkbox checked={item.checked} onChange={e => handleChange(index, 'checked', e.target.checked)} />
          </Form.Item>
          <Form.Item >
            <Input placeholder="选项名称" value={item.label} onChange={e => handleChange(index, 'label', e.target.value)} />
          </Form.Item>
          <Form.Item >
            <Input placeholder="选项值" value={item.value} onChange={e => handleChange(index, 'label', e.target.value)} />
          </Form.Item>
          <MinusCircleOutlined onClick={() => { }} />
        </Space>
      </div>
    ))}
    <Form.Item>
      <Button type="dashed" onClick={addOption} block icon={<PlusOutlined />}>
        添加选项
      </Button>
    </Form.Item></>
  )
}
