import React from 'react'
import type { ButtonProps } from 'antd-mobile'
import { Button } from 'antd-mobile'
import { createInputProp, createSelectProp } from 'src/utils/editorConfig'

export default {
  label: '按钮',
  key: 'button',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <Button>预览按钮</Button>,
  render: ({ props }: { props: ButtonProps & { text: string }; size: any }) => <Button {...props}>{props.text || '渲染按钮'}</Button>,
  props: {
    text: createInputProp('按钮内容', '按钮内容'),
    color: createSelectProp('按钮类型', [
      { label: '默认', value: 'default' },
      { label: '基础', value: 'primary' },
      { label: '成功', value: 'success' },
      { label: '警告', value: 'warning' },
      { label: '危险', value: 'danger' },
      { label: '文本', value: 'text' },
    ], 'default', false),
    size: createSelectProp('按钮尺寸', [
      { label: '大', value: 'large' },
      { label: '中等', value: 'middle' },
      { label: '小', value: 'small' },
      { label: '极小', value: 'mini' },
    ], 'middle'),
  },
}

