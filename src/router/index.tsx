import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Layout = lazy(() => import('../layout'))
const Editor = lazy(() => import('../pages/editor'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '',
        element: <Editor />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]

export default routes
