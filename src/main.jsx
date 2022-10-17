import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'

import Index, {loader as loaderCustomers} from './pages/Index'
import NewCustomer, {action as newCustomerAction} from './pages/NewCustomer'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: loaderCustomers,
        //errorElement: <ErrorPage/>
      },
      {
        path: '/customers/new',
        element: <NewCustomer/>,
        action: newCustomerAction
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
