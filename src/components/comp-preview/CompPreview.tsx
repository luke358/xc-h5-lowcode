import React from 'react'
import type { PropsWithChildren } from 'react'
import { theme } from 'antd'
import { useDrag } from 'react-dnd'
const { useToken } = theme

export default function CompPreview(props: PropsWithChildren<{ data: RenderComponent }>) {
  const { token } = useToken()
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { data: props.data },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }), [])
  const opacity = isDragging ? 0.4 : 1

  return (
      <div ref={drag} className="comp-preview overflow-hidden h-9" style={{ opacity }}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
        <span style={{ backgroundColor: token.colorPrimary }}>{props.data.label}</span>
      </div>
  )
}
