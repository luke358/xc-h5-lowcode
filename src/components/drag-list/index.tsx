import React from 'react'
import DragItem from './item'
import './drag.less'

interface DragListProps {
  id: string
  data: RenderComponent[]
  isDropDisabled?: boolean
}
export default function DragList(props: DragListProps) {
  const { data } = props
  return (
    <div className="drag-list">
      {data.map((item, i) => {
        return <DragItem key={item.key} index={i} item={item} />
      })}
    </div>
  )
}
