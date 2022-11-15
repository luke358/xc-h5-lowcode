import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import CompRender from '../../components/comp-render'
export default function Editor() {
  const [list, setList] = useState<RenderComponent[]>([])

  const [, drop] = useDrop(() => ({
    accept: 'box',
    drop: (item: { data: RenderComponent }) => {
      setList([...cloneDeep(list), cloneDeep(item.data)])
    },
    collect: monitor => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }), [list])

  return (
    <div ref={drop} className="flex justify-center min-h-full w-full">
      <div className="w-[350px] bg-white">
        {list?.map((d: RenderComponent) => {
          return <CompRender key={nanoid()}>
            {d.render({ props: { type: 'default' } })}
          </CompRender>
        })}
      </div>
    </div>
  )
}
