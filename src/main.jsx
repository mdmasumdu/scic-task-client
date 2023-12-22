import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreatedroute from './Routes/Route.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <div className='container mx-auto'>
 <RouterProvider router={mycreatedroute}></RouterProvider>
 </div>
 </AuthProvider>
  </React.StrictMode>,
)
