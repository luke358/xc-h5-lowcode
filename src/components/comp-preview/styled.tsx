import type { GlobalToken } from 'antd'
import styled from 'styled-components'

export interface CompPreviewStyleProps {
  theme: GlobalToken
}
export const CompRenderStyle = styled.div`
  @apply flex items-center justify-center;
  background: #fff;
  box-sizing: border-box;
  cursor: move;
  user-select: none;
  min-height: 100px;
  position: relative;
  border: 1px solid #eee;
  >span {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--adm-color-primary);
    color: #fff;
    padding: 2px 4px;
    font-size: 12px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
  }

  &:hover {
    border: ${(p: CompPreviewStyleProps) => `1px dashed ${p.theme.colorPrimary}`

  }
`
