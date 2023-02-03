import React from 'react'
import type { PropsWithChildren } from 'react'

export default function CompPreview(props: PropsWithChildren<{ data: RenderComponent }>) {
  return (
    <div className="comp-preview-wrap">
      <div className="comp-preview">
        {props.children}
        <span>{props.data.label}</span>
      </div>
    </div>
  )
}

