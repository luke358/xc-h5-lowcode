import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import type { ThemeConfig } from 'antd'
import { ConfigProvider, theme } from 'antd'
import { useLocalStorageState } from 'ahooks'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import routes from './router'
import useTheme from './store/useTheme'

function App() {
  const { token } = theme.useToken()
  const [localTheme] = useLocalStorageState<ThemeConfig>('theme')

  const themeVal = useTheme(state => (state.theme || localTheme || { token }))

  return (
    <DndProvider backend={HTML5Backend}>
      <ConfigProvider theme={themeVal}>
        <ThemeProvider theme={themeVal.token}>
          {useRoutes(routes)}
        </ThemeProvider>
      </ConfigProvider>
    </DndProvider>
  )
}

export default App
