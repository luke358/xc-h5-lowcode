import React from 'react'
import { nanoid } from 'nanoid'
export default {
  label: '文本组件',
  key: 'text',
  render: ({ props }: any) => {
    return <div {...props} key={nanoid()} >{props.children}</div>
  },
  props: {
    children: {
      type: 'input',
      label: '文本内容',
      default: '我是文本',
    },
  },
}
