import type { ThemeConfig } from 'antd'
import { create } from 'zustand'

interface Theme {
  theme?: ThemeConfig
}

const initialStates: Theme = {}

interface ThemeActions {
  changeTheme: (token: ThemeConfig) => void
}

const useTheme = create<Theme & ThemeActions>(set => ({
  ...initialStates,
  changeTheme: (theme) => {
    set({ theme })
  },
}))

export default useTheme
