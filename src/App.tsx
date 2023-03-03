import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider, theme } from 'antd'
import { useLocalStorageState } from 'ahooks'
import routes from './router'
import useTheme from './store/useTheme'

function App() {
  const { token } = theme.useToken()
  const [localTheme] = useLocalStorageState<any>('theme')

  const themeVal = useTheme(state => ({ token: state.token || localTheme || token }))

  return (
    <ConfigProvider theme={themeVal}>
    <ThemeProvider theme={themeVal}>
      {useRoutes(routes)}
    </ThemeProvider>
    </ConfigProvider>
  )
}

export default App
