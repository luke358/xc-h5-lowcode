import React from 'react'
import { nanoid } from 'nanoid'
import type { ImageProps } from 'antd'
import { Image } from 'antd'
export default {
  label: '图片',
  key: 'input',
  resize: {
    width: true,
    height: true,
  },
  render: ({ props }: { props: ImageProps }) => <Image {...props} key={nanoid()} />,
  props: {
    src: {
      type: 'input',
      label: '图片链接',
      default: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
  },
}

