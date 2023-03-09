import React, { useRef } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import type { ItemCallback } from 'react-grid-layout'
import GridLayout from 'react-grid-layout'
import CompRender from 'src/components/comp-render'
import { editorComponent } from 'src/register'
import useEditor from 'src/store/useEditor'
import { RGLWrap } from './styled'

export default function Editor() {
  const { editorData, update, setActive } = useEditor(state => state)
  const blocks = editorData.blocks
  const containerRef = useRef<HTMLDivElement>(null)

  const onGridChange: ItemCallback = (layout, oldItem, newItem) => {
    const idx = blocks.findIndex(item => item._id === newItem.i)
    update('pos', newItem, idx)
  }
  const onGridChangeStart: ItemCallback = (layout, oldItem, newItem) => {
    const idx = blocks.findIndex(item => item._id === newItem.i)
    setActive(idx)
  }

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
              onDragStop={onGridChange}
              onResizeStart={onGridChangeStart}
              onDragStart={onGridChangeStart}
              onResizeStop={onGridChange}
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
