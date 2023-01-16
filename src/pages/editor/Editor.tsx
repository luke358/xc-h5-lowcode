import React, { useState } from 'react'
// import { useDrop } from 'react-dnd'
import { cloneDeep } from 'lodash-es'
import { useDrop } from 'react-dnd'
import CompRender from '../../components/comp-render'
export default function Editor() {
  const [list, setList] = useState<RenderComponent[]>([])
  const [activeComp, setActiveComp] = useState<number | null>(null)
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
        setList([...cloneDeep(list), cloneDeep(item.data)])
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

  // eslint-disable-next-line no-console
  console.log(list)

  return (
    <div ref={drop} className="flex justify-center min-h-full w-full">
      <div className="w-[350px] bg-white">
        {list?.map((d: RenderComponent, i) => {
          return <CompRender onClick={setActiveComp} active={activeComp === i} changePosition={changePosition} addComponent={addComponent} data={d} key={i} index={i}>
            {d.render({ props: { type: 'default' } })}
          </CompRender>
        })}
      </div>
    </div>
  )
}
