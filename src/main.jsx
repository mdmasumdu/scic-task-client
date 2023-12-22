import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreatedroute from './Routes/Route.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
 <div className='container mx-auto'>
 <RouterProvider router={mycreatedroute}></RouterProvider>
 </div>
 </AuthProvider>
    </QueryClientProvider>
       
  </React.StrictMode>,
)
