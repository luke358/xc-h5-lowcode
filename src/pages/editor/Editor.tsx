import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import CompRender from 'src/components/comp-render'
import useEditor from 'src/store/useEditor'
export default function Editor() {
  const editorList = useEditor(state => state.editorList)

  return (
    <div className="flex justify-center min-h-full w-full">
      <Droppable droppableId="COMPONENT">
        {provided => (
          <div className="w-[350px] bg-white relative"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {editorList?.map((d: RenderComponent, i) => {
              return <Draggable key={d._id} draggableId={d._id!} index={i}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <CompRender
                      key={d._id}
                      index={i}
                    >
                      {d.render({ props: { type: 'default' } })}
                    </CompRender>
                  </div>

                )}
              </Draggable>
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  )
}
