import styled from 'styled-components'
import { theme } from 'antd'
const { useToken } = theme
const { token } = useToken()

export interface CompRenderStyleProps {
  active: boolean
}
export const CompRenderStyle = styled.div`
  position: relative;
  cursor: move;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: ${(p: CompRenderStyleProps) => p.active ? `1px dashed ${token.colorPrimary}` : 'none'};
  }
`
