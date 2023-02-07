import React from 'react'
import type { SelectorOption, SelectorProps } from 'antd-mobile'
import { Selector } from 'antd-mobile'
import { nanoid } from 'nanoid'
import { createSelectProp } from 'src/utils/editorConfig'
export const options = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
]
export default {
  label: '选择框',
  key: 'selector',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <Selector options={options} />,
  render: ({ props }: { props: SelectorProps<string> & { options: SelectorOption<string>[] } }) => <Selector options={options} {...props} key={nanoid()} />,
  props: {
    // text: createInputProp('按钮内容'),
    defaultValue: createSelectProp('默认值', options, undefined),
    // options:
    // size: createSelectProp('按钮尺寸', [
    //   { label: '默认', value: '' },
    //   { label: '中等', value: 'medium' },
    //   { label: '小', value: 'small' },
    //   { label: '极小', value: 'mini' },
    // ]),
  },
}

