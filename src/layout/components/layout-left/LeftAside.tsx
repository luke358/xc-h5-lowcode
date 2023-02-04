import React from 'react'
import { Tabs } from 'antd'

import components from './components'
export default function LeftAside() {
  const tabs = Object.entries(components)
    .map(([name, component]) => {
      const { label } = component
      return { label, name, comp: component }
    })

  return (
    <Tabs
      style={{ height: '100%' }}
      tabPosition="left"
      items={
        tabs.map((item, i) => {
          return {
            label: item.label,
            key: `${i}`,
            children: item.comp(),
          }
        })
      }
    />
  )
}

