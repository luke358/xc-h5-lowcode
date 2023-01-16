import type { PropsWithChildren } from 'react'
import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import classnames from 'classnames'
export default function CompRender(props: PropsWithChildren<{
  data: RenderComponent
  index: number
  changePosition: (a: number, b: number) => void
  addComponent: (comp: RenderComponent) => void
  onClick?: (index: number) => void
  active: boolean
}>) {
  const { data, index, changePosition, onClick, active } = props
  const ref = useRef<HTMLDivElement | null>(null)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { data, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }), [data, index])

  const [, drop] = useDrop(() => ({
    accept: 'box',
    hover: (item: { data: RenderComponent; index: number }) => {
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex)
        return // 如果回到自己的坑，那就什么都不做
      if (typeof dragIndex === 'number') {
        changePosition(dragIndex, hoverIndex) // 调用传入的方法完成交换
        item.index = hoverIndex
      }

      // else {
      //   // add
      //   addComponent(item.data)
      // }
    },
    collect: monitor => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }), [data, index])
  const opacity = isDragging ? 0.4 : 1

  drag(drop(ref))
  return (
    <div ref={ref} onClick={() => { onClick && onClick(index) }} className={classnames('comp-render', { 'comp-render-focus': active })} style={{ opacity }}>
      {props.children}
    </div>
  )
}
