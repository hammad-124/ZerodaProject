import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './landing_page/home/Homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>
)
