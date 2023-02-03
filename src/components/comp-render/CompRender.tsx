import type { PropsWithChildren } from 'react'
import React from 'react'
import classnames from 'classnames'
import { Divider, Tooltip } from 'antd'
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
export default function CompRender(props: PropsWithChildren<{
  data: RenderComponent
  index: number
  changePosition: (a: number, b: number) => void
  addComponent: (comp: RenderComponent) => void
  onClick?: (index: number) => void
  active: boolean
  total: number
  moveComponent: (index: number, type: string) => void
  copy: (index: number) => void
  deleteComponent: (index: number) => void
}>) {
  const { data, index, changePosition, onClick, active, total } = props

  return (
    <div onClick={() => { onClick && onClick(index) }} className={classnames('comp-render', { 'comp-render-focus': active })}>
      {props.children}
      {active
        ? <div className=" absolute top-0 right-0 translate-x-full px-[8px]">
          <ul>
            <li className="bg-white">
              <Tooltip title="上移"
                className={classnames(index === 0 ? 'text-gray-400' : '')}
                placement="right">
                <ArrowUpOutlined
                  className=" p-[8px]"
                  onClick={() => props?.moveComponent(index, 'up')}
                />
              </Tooltip>
              <Divider className="m-0" />
              <Tooltip title="下移"
                className={classnames(index + 1 === total ? 'text-gray-400' : '')}
                placement="right">
                <ArrowDownOutlined
                  className=" p-[8px]"
                  onClick={() => props?.moveComponent(index, 'down')}
                />
              </Tooltip>
            </li>
            <Tooltip title="复制"
              placement="right">
              <li className="bg-white">
                <CopyOutlined
                  className=" p-[8px]"
                  onClick={() => props?.onClick?.(index + 1)} />
              </li>
            </Tooltip>
            <Tooltip title="删除"
              placement="right">
              <li className="bg-white">
                <DeleteOutlined
                  className=" p-[8px]"
                  onClick={() => props?.deleteComponent(index)}
                />
              </li>
            </Tooltip>
          </ul>
        </div>
        : null
      }
    </div>
  )
}
