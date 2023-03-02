import React, { useMemo, useRef, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import CompRender from 'src/components/comp-render'
import { editorComponent } from 'src/register'
import useEditor from 'src/store/useEditor'
export default function Editor() {
  const editorData = useEditor(state => state.editorData)
  const blocks = editorData.blocks
  const containerRef = useRef<HTMLDivElement>(null)
  const [contanierPos, setContanierPos] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, move: false })

  const mousedownfn = useMemo(() => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === containerRef.current) {
        setMousePos({
          move: true,
          x: e.clientX,
          y: e.clientY,
        })
      }
    }
  }, [])

  const mousemovefn = useMemo(() => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (mousePos.move) {
        const newX = e.clientX
        const newY = e.clientY
        const diffx = newX - mousePos.x
        const diffy = newY - mousePos.y
        setMousePos({
          x: newX,
          y: newY,
          move: true,
        })
        setContanierPos(prev => ({ x: prev.x + diffx, y: prev.y + diffy }))
      }
    }
  }, [mousePos.x, mousePos.y, mousePos.move])

  const mouseupfn = useMemo(() => {
    return () => {
      setMousePos({ x: 0, y: 0, move: false })
    }
  }, [])

  const onwheelFn = useMemo(() => {
    return (e: React.WheelEvent<HTMLDivElement>) => {
      setContanierPos(prev => ({
        x: prev.x,
        y: prev.y + (e.deltaY < 0 ? 10 : -10),
      }))
    }
  }, [])

  return (
    <div className="flex justify-center min-h-full w-full overflow-hidden"
      ref={containerRef}
      onMouseDown={mousedownfn}
      onMouseMove={mousemovefn}
      onMouseUp={mouseupfn}
      onMouseLeave={mouseupfn}
      onWheel={onwheelFn}
    >
      <Droppable droppableId="COMPONENT">
        {provided => (
          <div className="w-[350px] bg-white relative shadow-lg"
            // fixd: https://github.com/atlassian/react-beautiful-dnd/issues/128
            style={{ top: `${contanierPos.y}px`, left: `${contanierPos.x}px` }}
            // style={{ transform: `translateX(${contanierPos.x}px) translateY(${contanierPos.y}px)` }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {(blocks)?.map((d: RenderBlockData, i) => {
              return <Draggable key={d._id} draggableId={d._id!} index={i}>
                {provided => (<div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <CompRender
                    key={d._id}
                    index={i}
                  >
                    {editorComponent.componentMap[d.componentKey].render({ props: d.props })}
                  </CompRender>
                </div>)}
              </Draggable>
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  )
}
