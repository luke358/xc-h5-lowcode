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
  height: 60px;
  -moz-user-select:none; /*火狐*/
  -webkit-user-select:none; /*webkit浏览器*/
  -ms-user-select:none; /*IE10*/
  -khtml-user-select:none; /*早期浏览器*/
  user-select:none;
`

export const HeaderLogo = styled.div`
  min-width: 250px;
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
  > div {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 3px;

    > span {
      font-size: 16px;
      line-height: 20px;
    }

    > div {
      font-size: 12px;
      line-height: 20px;
      margin-top: 3px;
    }
  }
  // color: ${p => p.theme.colorPrimary}
`
export const HeaderExtra = styled.div`
  min-width: 250px;
`

export const ScrollForm = tw(Form)`
 @apply w-72 h-[450px] box-border overflow-scroll
 `

