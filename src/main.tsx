import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './app-routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='dark'>
      <AppRoutes />
    </div>
  </React.StrictMode>,
)
