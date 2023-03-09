import React from 'react'
import type { ButtonProps } from 'antd-mobile'
import { Button } from 'antd-mobile'
// import { createInputProp, createSelectProp, createSwitchProp } from 'src/utils/editorConfig'

export default {
  label: '按钮',
  key: 'button',
  resize: {
    width: true,
    height: true,
  },
  render: ({ props }: { props: ButtonProps & { text: string }; size: any }) => <Button {...props}>{props.children}</Button>,
  props: {
    children: {
      type: 'input',
      label: '按钮内容',
      default: '按钮内容',
    },
    // disabled: createSwitchProp('禁用按钮', false),
    disabled: {
      type: 'switch',
      label: '禁用按钮',
      default: false,
    },
    block: {
      type: 'switch',
      label: '块级元素',
      default: false,
    },
    color: {
      type: 'select',
      label: '按钮类型',
      default: 'default',
      options: [
        { label: '默认', value: 'default' },
        { label: '基础', value: 'primary' },
        { label: '成功', value: 'success' },
        { label: '警告', value: 'warning' },
        { label: '危险', value: 'danger' },
      ],
    },
    size: {
      type: 'select',
      label: '按钮尺寸',
      default: 'middle',
      options: [
        { label: '大', value: 'large' },
        { label: '中等', value: 'middle' },
        { label: '小', value: 'small' },
        { label: '极小', value: 'mini' },
      ],
    },
    fill: {
      type: 'select',
      label: '填充模式',
      default: 'solid',
      options: [
        { label: '填充', value: 'solid' },
        { label: '轮廓', value: 'outline' },
        { label: '文字', value: 'none' },
      ],

    },
    type: {
      type: 'select',
      label: '原生 button 的 type 属性',
      options: [
        { label: '按钮', value: 'button' },
        { label: '提交', value: 'submit' },
        { label: '重置', value: 'reset' },
      ],
      default: 'button',
    },
    shape: {
      type: 'select',
      label: '形状',
      options: [
        { label: '默认', value: 'default' },
        { label: '圆角', value: 'rounded' },
        { label: '矩形', value: 'rectangular' },
      ],
      default: 'default',
    },
    // block: createSwitchProp('块级元素', false),
    // color: createSelectProp('按钮类型', [
    //   { label: '默认', value: 'default' },
    //   { label: '基础', value: 'primary' },
    //   { label: '成功', value: 'success' },
    //   { label: '警告', value: 'warning' },
    //   { label: '危险', value: 'danger' },
    // ], 'default', false),
    // size: createSelectProp('按钮尺寸', [
    //   { label: '大', value: 'large' },
    //   { label: '中等', value: 'middle' },
    //   { label: '小', value: 'small' },
    //   { label: '极小', value: 'mini' },
    // ], 'middle'),
    // fill: createSelectProp('填充模式', [
    //   { label: '填充', value: 'solid' },
    //   { label: '轮廓', value: 'outline' },
    //   { label: '文字', value: 'none' },
    // ], 'solid'),
    // type: createSelectProp('原生 button 的 type 属性', [
    //   { label: '按钮', value: 'button' },
    //   { label: '提交', value: 'submit' },
    //   { label: '重置', value: 'reset' },
    // ], 'button'),
    // shape: createSelectProp('形状', [
    //   { label: '默认', value: 'default' },
    //   { label: '圆角', value: 'rounded' },
    //   { label: '矩形', value: 'rectangular' },
    // ], 'default'),
  },
}

