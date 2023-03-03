import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import type { ThemeConfig } from 'antd'
import { ConfigProvider, theme } from 'antd'
import { useLocalStorageState } from 'ahooks'
import routes from './router'
import useTheme from './store/useTheme'

function App() {
  const { token } = theme.useToken()
  const [localTheme] = useLocalStorageState<ThemeConfig>('theme')

  const themeVal = useTheme(state => (state.theme || localTheme || { token }))

  return (
    <ConfigProvider theme={themeVal}>
      <ThemeProvider theme={themeVal.token}>
        {useRoutes(routes)}
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default App
