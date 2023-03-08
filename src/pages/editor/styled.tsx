import type { GlobalToken } from 'antd'
import tw from 'tailwind-styled-components'

export interface CompRenderStyleProps {
  active: boolean
  theme: GlobalToken
}
export const RGLWrap = tw.div`
absolute top-[20px] bottom-[50px] w-[350px] bg-white shadow-lg overflow-y-scroll
`
