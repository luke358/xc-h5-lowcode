import React, { useContext, useState } from 'react'
import { cloneDeep } from 'lodash-es'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { EditorContext } from '../../layout'
import CompRender from '../../components/comp-render'
export default function Editor() {
  const { editorList, delComponent } = useContext(EditorContext)
  const [list, setList] = useState<RenderComponent[]>([])
  const [activeComp, setActiveComp] = useState<number>(-1)
  const changePosition = (dragIndex: number, hoverIndex: number) => {
    const _list = cloneDeep(list)
    const tmp = _list[dragIndex]
    _list[dragIndex] = _list[hoverIndex]
    _list[hoverIndex] = tmp

    setList(_list)
  }
  const addComponent = (comp: RenderComponent) => {
    setList([...cloneDeep(list), cloneDeep(comp)])
  }

  const moveComponent = (index: number, type: string) => {
    if (type === 'up') {
      // 这里不生效
      setActiveComp(pre => pre - 1)
      changePosition(index - 1, index)
    }
    else {
      // 这里不生效
      setActiveComp(pre => pre + 1)
      changePosition(index + 1, index)
    }
  }
  const copy = (index: number) => {
    const _comp = cloneDeep(list[index])
    const _list = cloneDeep(list)
    _list.splice(index, 0, _comp)
    setList(_list)
  }
  const deleteComponent = (index: number) => {
    // const _list = cloneDeep(list)
    // _list.splice(index, 1)
    // setList(_list)
    delComponent?.(index)
  }

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
                      onClick={setActiveComp}
                      active={activeComp === i}
                      changePosition={changePosition}
                      addComponent={addComponent}
                      data={d}
                      key={d._id}
                      index={i}
                      total={list.length}
                      moveComponent={moveComponent}
                      copy={copy}
                      deleteComponent={deleteComponent}
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
