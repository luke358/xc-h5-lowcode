import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import CompPreview from '../comp-preview'
import './drag-item.less'
export default function DragItem({ item, index }: any) {
  return (
    <Draggable draggableId={item.key} index={index}>
      {(provided, snapshot) => (
        <>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
          >
            <CompPreview data={item}>{item.preview()}</CompPreview>
          </div>
          {snapshot.isDragging && <div className="drag-item">
            <CompPreview data={item}>{item.preview()}</CompPreview>
          </div>}
        </>

      )}
    </Draggable>
  )
}
