import type { GlobalToken } from 'antd'
import styled from 'styled-components'

export interface CompRenderStyleProps {
  active: boolean
  theme: GlobalToken
}
export const CompRenderStyle = styled.div`
  position: relative;
  cursor: move;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: ${(p: CompRenderStyleProps) => p.active ? `1px dotted ${p.theme.colorPrimary}` : 'none'};
  }

  &:hover::after {
    border: ${(p: CompRenderStyleProps) => `1px dotted ${p.theme.colorPrimary}`};

  }
`
