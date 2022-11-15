import type { PropsWithChildren } from 'react'
import React from 'react'

export default function CompRender(props: PropsWithChildren) {
  return (
    <div>{props.children}</div>
  )
}
