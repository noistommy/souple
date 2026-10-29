import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

import { ToastProvider } from "react-nt-toast"
import "react-nt-toast/nt-toast.css"

const options = {
  position: 'bottom-center'
} as const
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider defaultOptions={options} >
      <App />
    </ToastProvider>
  </StrictMode>,
)
