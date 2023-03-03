import type { GlobalToken } from 'antd'
import { Form } from 'antd'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export interface CompPreviewStyleProps {
  theme: GlobalToken
}
export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderLogo = styled.div`
`
export const HeaderControl = styled.div`
  font-size: 16px;
  flex: 1;
  display: flex;
  justify-content: center;

`
export const ControlItem = styled.div`
  width: 80px;
  float: left;
  text-align: center;
  // color: ${p => p.theme.colorPrimary}
`
export const HeaderExtra = styled.div`
  min-width: 200px;
`

export const ScrollForm = tw(Form)`
 @apply w-72 h-[450px] box-border overflow-scroll
 `

