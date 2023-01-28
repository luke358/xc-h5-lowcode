import React, { useState } from 'react'
import { cloneDeep } from 'lodash-es'
import { useDrop } from 'react-dnd'
import { nanoid } from 'nanoid'
import CompRender from '../../components/comp-render'
export default function Editor() {
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
  const [, drop] = useDrop(() => ({
    accept: 'box',
    drop: (item: { data: RenderComponent; index: number }) => {
      if (typeof item.index !== 'number') {
        setList([...cloneDeep(list), { ...cloneDeep(item.data), _id: nanoid() }])
        setActiveComp(list.length)
      }
      else {
        setActiveComp(item.index)
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }), [list])

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
    const _list = cloneDeep(list)
    _list.splice(index, 1)
    setList(_list)
  }

  return (
    <div ref={drop} className="flex justify-center min-h-full w-full">
      {activeComp}
      <div className="w-[350px] bg-white relative">
        {list?.map((d: RenderComponent, i) => {
          return <CompRender
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
        })}
      </div>
    </div>
  )
}
