import { useRoutes } from 'react-router-dom'
import routes from './router'
import { ThemeProvider } from "styled-components";
import { theme } from "antd";

function App() {
  const { token } = theme.useToken();

  return (
    <ThemeProvider theme={token}>
      {useRoutes(routes)}
    </ThemeProvider>
  )
}

export default App
