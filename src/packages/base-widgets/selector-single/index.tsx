import React from 'react'
import type { SelectorProps } from 'antd-mobile'
import { Selector } from 'antd-mobile'
import { nanoid } from 'nanoid'
// import { createSelectProp, createSwitchProp } from 'src/utils/editorConfig'
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
  label: '选择框-单选',
  key: 'selector-single',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <Selector options={options} />,
  render: ({ props }: { props: SelectorProps<string> }) => <Selector defaultValue={props.options.filter(opt => (opt as any).checked).map(_ => _.value)} {...props} key={nanoid()} />,
  props: {
    // text: createInputProp('按钮内容'),
    // defaultValue: createSelectProp('默认值', options, undefined),
    // disabled: createSwitchProp('禁止全局选中'),
    // showCheckMark: createSwitchProp('显示对勾角标', true),
    // columns: createSelectProp('列数', 3, 3),
    columns: { type: 'inputNumber', label: '列数' },
    options: {
      type: 'optionList',
      label: '选项',
      default: options,
      multiple: false,
    },
    // options:
    // size: createSelectProp('按钮尺寸', [
    //   { label: '默认', value: '' },
    //   { label: '中等', value: 'medium' },
    //   { label: '小', value: 'small' },
    //   { label: '极小', value: 'mini' },
    // ]),
  },
}

