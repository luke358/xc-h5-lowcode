import React, { useRef } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import GridLayout from 'react-grid-layout'
import CompRender from 'src/components/comp-render'
import { editorComponent } from 'src/register'
import useEditor from 'src/store/useEditor'
import { RGLWrap } from './styled'

export default function Editor() {
  const editorData = useEditor(state => state.editorData)
  const blocks = editorData.blocks
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex justify-center min-h-full w-full pt-[15px] relative"
      ref={containerRef}
    >
      <Droppable droppableId="COMPONENT">
        {provided => (
          <RGLWrap ref={provided.innerRef}
            {...provided.droppableProps}>
            <GridLayout
              className="layout"
              margin={[5, 5]}
              cols={24}
              rowHeight={2}
              width={350}
              onDragStop={() => { }}
              onDragStart={() => { }}
              onResizeStop={() => { }}
            >
              {blocks?.map((d, i) => <div key={d._id} data-grid={d.pos}>
                <CompRender
                  key={d._id}
                  index={i}
                >
                  {editorComponent.componentMap[d.componentKey].render({ props: d.props })}
                </CompRender>
              </div>)}
            </GridLayout>
            {provided.placeholder}
          </RGLWrap>
        )}
      </Droppable>
    </div>
  )
}
