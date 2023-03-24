import React from 'react'
import { nanoid } from 'nanoid'
export default {
  label: '文本组件',
  key: 'text',
  render: ({ props, styles }: any) => {
    return <div {...props} style={styles} key={nanoid()} >{props.children}</div>
  },
  props: {
    children: {
      type: 'input',
      label: '文本内容',
      default: '我是文本',
    },
  },
  styles: {
    color: {
      type: 'ColorPicker',
      label: '文字颜色',
      default: '#000',
    },
    fontSize: {
      type: 'inputNumber',
      label: '文字大小',
      default: 14,
    },
    backgroundColor: {
      type: 'ColorPicker',
      label: '背景颜色',
      default: 'transparent',
    },
  },
}
