import type { GlobalToken } from 'antd'
import tw from 'tailwind-styled-components'

export interface CompRenderStyleProps {
  active: boolean
  theme: GlobalToken
}
export const RGLWrap = tw.div`
w-[350px] bg-white shadow-lg mb-[20px]
`
