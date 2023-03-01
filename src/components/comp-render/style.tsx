import { GlobalToken } from 'antd';
import styled from 'styled-components'

export interface CompRenderStyleProps {
  active: boolean
  theme: GlobalToken
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
    border: ${(p: CompRenderStyleProps) =>  p.active ? `1px dashed ${p.theme.colorPrimary}` : 'none'
    };
  }
`
