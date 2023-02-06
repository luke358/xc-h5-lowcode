import React from 'react'
import { Tabs } from 'antd'
import Props from './components/props'
import Animate from './components/animate'
import Events from './components/events'

export default function Aside() {
  const items = React.useMemo(() => ([
    { label: '属性', key: 'props', children: <Props /> },
    { label: '动画', key: 'animate', children: <Animate /> },
    { label: '事件', key: 'events', children: <Events /> },
  ]), [])
  return (
    <div className="px-[12px]">
      <Tabs defaultActiveKey="props" size="small"
        items={items} />
    </div>
  )
}
