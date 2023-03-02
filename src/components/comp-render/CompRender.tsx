import React from 'react'
import type { PropsWithChildren } from 'react'
import classnames from 'classnames'
import { Divider, Tooltip } from 'antd'
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import useEditor from 'src/store/useEditor'
import { CompRenderStyle } from './styled'
export default function CompRender(props: PropsWithChildren<{
  index: number
}>) {
  const { index } = props
  const getTotal = useEditor(state => state.getTotal)
  const move = useEditor(state => state.move)
  const del = useEditor(state => state.del)
  const copy = useEditor(state => state.copy)
  const setActive = useEditor(state => state.setActive)
  const active = useEditor(state => state.active)

  return (
    <CompRenderStyle onClick={() => { setActive(index) }} active={active === index}>
    {/* <div onClick={() => { setActive(index) }} className={classnames('comp-render', { 'comp-render-focus': active === index })}> */}
      {props.children}
      {active === index
        ? <div className="absolute top-0 right-0 translate-x-full px-[8px]">
          <ul className="p-0 m-0 list-none">
            <li className="bg-white">
              <Tooltip title="上移"
                className={classnames(index === 0 ? 'text-gray-400' : '')}
                placement="right">
                <ArrowUpOutlined
                  className=" p-[8px]"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (index === 0)
                      return
                    move('up', index)
                  }}
                />
              </Tooltip>
              <Divider className="m-0" />
              <Tooltip title="下移"
                className={classnames(index + 1 === getTotal() ? 'text-gray-400' : '')}
                placement="right">
                <ArrowDownOutlined
                  className=" p-[8px]"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (index + 1 === getTotal())
                      return
                    move('down', index)
                  }}
                />
              </Tooltip>
            </li>
            <Tooltip title="复制"
              placement="right">
              <li className="bg-white">
                <CopyOutlined
                  className=" p-[8px]"
                  onClick={(e) => {
                    e.stopPropagation()
                    copy(index)
                  }}
                />
              </li>
            </Tooltip>
            <Tooltip title="删除"
              placement="right">
              <li className="bg-white">
                <DeleteOutlined
                  className=" p-[8px]"
                  onClick={(e) => {
                    e.stopPropagation()
                    del(index)
                  }}
                />
              </li>
            </Tooltip>
          </ul>
        </div>
        : null
      }
    {/* </div> */}
    </CompRenderStyle>
  )
}
