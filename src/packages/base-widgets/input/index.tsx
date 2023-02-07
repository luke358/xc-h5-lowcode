/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import type { InputProps } from 'antd-mobile'
import { Input } from 'antd-mobile'
import { nanoid } from 'nanoid'
export default {
  label: '输入框',
  key: 'input',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <Input placeholder="预览输入框" />,
  render: ({ props }: { props: InputProps }) => <Input {...props} key={nanoid()} placeholder="请输入" />,
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

