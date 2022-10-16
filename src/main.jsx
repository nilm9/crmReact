import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import NewCustomer from './pages/NewCustomer'
import Index, {loader as loaderCustomers} from './pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: loaderCustomers
      },
      {
        path: '/customers/new',
        element: <NewCustomer/>
      }],

    },
    {
      path: '/about',
    element: <h1>About</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
