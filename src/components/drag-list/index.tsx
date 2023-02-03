import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import DragItem from './item'

interface DragListProps {
  id: string
  data: any[]
  isDropDisabled?: boolean
}
export default function DragList(props: DragListProps) {
  const { id, data, isDropDisabled = true } = props
  return (
    <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
      {(provided) => {
        return <div ref={provided.innerRef}>
          {data.map((item, i) => {
            return <DragItem key={item.key} index={i} item={item}>{item.preview()}</DragItem>
          })}
          {provided.placeholder}
        </div>
      }}
    </Droppable>
  )
}
