import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './LoginPage'
import BrowsePage from './BrowsePage'

const router=createBrowserRouter([
    {
        path:'/',
        element:<LoginPage/>
    },
    {
        path:'/browse',
        element:<BrowsePage/>
    }
])

const Body = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Body