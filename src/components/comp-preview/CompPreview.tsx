import React from 'react'
import type { PropsWithChildren } from 'react'
import { useDrag } from 'react-dnd'

export default function CompPreview(props: PropsWithChildren<{ data: RenderComponent }>) {
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
    <div ref={drag} className="comp-preview" style={{ opacity }}>
      {props.children}
      <span>{props.data.label}</span>
    </div>
  )
}
