/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import type { InputProps } from 'antd-mobile'
import { Input } from 'antd-mobile'
import { nanoid } from 'nanoid'
import { createInputProp } from 'src/utils/editorConfig'
export default {
  label: '输入框',
  key: 'input',
  resize: {
    width: true,
    height: true,
  },
  render: ({ props }: { props: InputProps }) => <Input {...props} key={nanoid()} />,
  props: {
    defaultValue: {
      type: 'input',
      label: '默认值',
      default: '',
    },
    placeholder: {
      type: 'input',
      label: '提示文本',
      default: '请输入',
    },
    readOnly: {
      type: 'switch',
      label: '是否只读',
      default: false,
    },
    type: {
      type: 'select',
      label: '输入框类型',
      default: 'text',
      options: [
        {
          label: '文字', value: 'text',
        }, {
          label: '密码', value: 'password',
        }, {
          label: '数字', value: 'number',
        },
      ],
    },
    max: {
      type: 'inputNumber',
      label: '最大值',
    },
    min: {
      type: 'inputNumber',
      label: '最小值',
    },
  },
}

