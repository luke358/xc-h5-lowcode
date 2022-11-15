import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './router'

function App() {
  return (
    <>
      {useRoutes(routes)}
    </>
  )
}

export default App
