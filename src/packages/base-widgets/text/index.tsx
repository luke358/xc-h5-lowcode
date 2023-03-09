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
      label: '默认值',
      default: '我是文本',
    },
  },
}
