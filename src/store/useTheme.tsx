import type { AliasToken } from 'antd/es/theme/internal'
import { create } from 'zustand'

interface Theme {
  token?: AliasToken
}

const initialStates: Theme = {}

interface ThemeActions {
  changeTheme: (token: AliasToken) => void
}

const useTheme = create<Theme & ThemeActions>(set => ({
  ...initialStates,
  changeTheme: (token: AliasToken) => {
    set({ token })
  },
}))

export default useTheme
