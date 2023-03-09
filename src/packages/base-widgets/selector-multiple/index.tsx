import React from 'react'
import type { SelectorProps } from 'antd-mobile'
import { Selector } from 'antd-mobile'
import { nanoid } from 'nanoid'
// import { createSelectProp, createSwitchProp } from 'src/utils/editorConfig'
export const options = [
  {
    label: '选项一',
    value: '1',
    checked: false,
  },
  {
    label: '选项二',
    value: '2',
    checked: false,
  },
  {
    label: '选项三',
    value: '3',
    checked: false,
  },
]
export default {
  label: '选择框-多选',
  key: 'selector-multiple',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <Selector options={options} />,
  render: ({ props }: { props: SelectorProps<string> }) => <Selector {...props} key={nanoid()} />,
  props: {
    columns: { type: 'inputNumber', label: '列数' },
    options: {
      type: 'optionList',
      label: '选项',
      default: options,
      multiple: true,
    },
  },
}

