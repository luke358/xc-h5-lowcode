import React from 'react'
import type { PropsWithChildren } from 'react'

export default function CompPreview(props: PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <div className="comp-preview" onClick={props.onClick}>{props.children}</div>
  )
}
