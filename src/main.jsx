import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/pagesWeb/Home'
import LayoutMain from './components/layouts/LayoutMain'
import Blog from './pages/pagesWeb/Blog'
import Contact from './pages/pagesWeb/Contact'
import DetailProps from './components/properties/DetailProps'
import LogIn from './pages/auth/LogIn'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import LayoutAdmin from './components/layouts/LayoutAdmin'
import SignIn from './pages/auth/SignIn'

// contexts
import { UserProvider } from './context/UserProvider'
//loaders
import { loader as loaderProperty2 } from './components/properties/DetailProps'
import { Dashboard } from './pages/pagesAdmin/Dashboard'

// layout de rutas protejidas
import ProtectedRoutes from './components/protected/ProtectedRoutes'
import Us from './pages/pagesWeb/Us'
import Programming from './pages/pagesWeb/Programming'
import Give from './pages/pagesWeb/Give'
import { Program } from './pages/pagesAdmin/Program'
import { GeneralEdit } from './pages/pagesAdmin/GeneralEdit'
import { UsRadio } from './pages/pagesAdmin/UsRadio'
import { GiveAdmin } from './pages/pagesAdmin/GiveAdmin'
import ContactList from './pages/pagesAdmin/Messages'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LayoutMain />,
      children: [
        {
          index: true,
          element: <Home />,
          path: '/'
        },
        {
          element: <Us />,
          path: '/nosotros'
        },
        {
          element: <Blog />,
          path: '/blog'
        },
        {
          element: <Contact />,
          path: '/contacto'
        },
        {
          element: <Give />,
          path: '/donar'
        },
        {
          element: <Programming />,
          path:'/programming'
        },
        {
          element: <DetailProps />,
          path: '/item/:idProperty',
          loader: loaderProperty2
        },
        {
          element: <LogIn />,
          path: '/login'
        },
        {
          element: <SignIn />,
          path: '/signin'
        },
      ]
    },
    {
      path: '/admin',
      element: <ProtectedRoutes><LayoutAdmin /></ProtectedRoutes>,
      children: [
        {
          index: true,
          element: <Dashboard />,
          path: ''
        },
        {
          element: <Program />,
          path: 'programming'
        },
        {
          element: <GeneralEdit />,
          path: 'general'
        },
        {
          element: <UsRadio />,
          path: 'usRadio'
        },
        {
          element: <GiveAdmin />,
          path: 'give'
        },
        {
          element: <ContactList />,
          path: 'messages'
        },
        
        {
          path: "*",
          element: <Navigate to="dashboard" replace />
        }
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)

