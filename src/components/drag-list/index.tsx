import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import DragItem from './item'

interface DragListProps {
  id: string
  data: RenderComponent[]
  isDropDisabled?: boolean
}
import './drag.less'
export default function DragList(props: DragListProps) {
  const { id, data, isDropDisabled = true } = props
  return (
    <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
      {(provided) => {
        return <div ref={provided.innerRef} className='drag-list'>
          {data.map((item, i) => {
            return <DragItem key={item.key} index={i} item={item} />
          })}
          {provided.placeholder}
        </div>
      }}
    </Droppable>
  )
}
