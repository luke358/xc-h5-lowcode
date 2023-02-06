import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import CompRender from 'src/components/comp-render'
import { editorComponent } from 'src/register'
import useEditor from 'src/store/useEditor'
export default function Editor() {
  const editorData = useEditor(state => state.editorData)
  const blocks = editorData.blocks

  return (
    <div className="flex justify-center min-h-full w-full">
      <Droppable droppableId="COMPONENT">
        {provided => (
          <div className="w-[350px] bg-white relative"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {(blocks)?.map((d: RenderBlockData, i) => {
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
                      {editorComponent.componentMap[d.componentKey].render({ props: { type: 'default', ...d.props } })}
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
