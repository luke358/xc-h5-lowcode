import React from 'react'
import type { ButtonProps } from 'antd-mobile'
import { Button } from 'antd-mobile'
import { createInputProp, createSelectProp, createSwitchProp } from 'src/utils/editorConfig'

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
    disabled: createSwitchProp('禁用按钮', false),
    block: createSwitchProp('块级元素', false),
    color: createSelectProp('按钮类型', [
      { label: '默认', value: 'default' },
      { label: '基础', value: 'primary' },
      { label: '成功', value: 'success' },
      { label: '警告', value: 'warning' },
      { label: '危险', value: 'danger' },
    ], 'default', false),
    size: createSelectProp('按钮尺寸', [
      { label: '大', value: 'large' },
      { label: '中等', value: 'middle' },
      { label: '小', value: 'small' },
      { label: '极小', value: 'mini' },
    ], 'middle'),
    fill: createSelectProp('填充模式', [
      { label: '填充', value: 'solid' },
      { label: '轮廓', value: 'outline' },
      { label: '文字', value: 'none' },
    ], 'solid'),
    type: createSelectProp('原生 button 的 type 属性', [
      { label: '按钮', value: 'button' },
      { label: '提交', value: 'submit' },
      { label: '重置', value: 'reset' },
    ], 'button'),
    shape: createSelectProp('形状', [
      { label: '默认', value: 'default' },
      { label: '圆角', value: 'rounded' },
      { label: '矩形', value: 'rectangular' },
    ], 'default'),

  },
}

