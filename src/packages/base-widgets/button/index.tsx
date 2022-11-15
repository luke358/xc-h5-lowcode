import React from 'react'
import type { ButtonProps } from 'antd-mobile'
import { Button } from 'antd-mobile'
import { nanoid } from 'nanoid'
export default {
  label: '按钮',
  key: 'button',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <Button>预览按钮</Button>,
  render: ({ props }: { props: ButtonProps & { text: string }; size: any }) => <Button type={props.type} size={props.size}>{props.text || '渲染按钮'}</Button>,
  props: {
    // text: createInputProp('按钮内容'),
    // type: createSelectProp('按钮类型', [
    //   { label: '基础', value: 'primary' },
    //   { label: '成功', value: 'success' },
    //   { label: '警告', value: 'warning' },
    //   { label: '危险', value: 'danger' },
    //   { label: '文本', value: 'text' },
    // ]),
    // size: createSelectProp('按钮尺寸', [
    //   { label: '默认', value: '' },
    //   { label: '中等', value: 'medium' },
    //   { label: '小', value: 'small' },
    //   { label: '极小', value: 'mini' },
    // ]),
  },
}

