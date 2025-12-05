import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "@fontsource/bitcount-prop-single/400.css"; // Normal
import "@fontsource/bitcount-prop-single/700.css"; // Bold

const root = document.querySelector('#root')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
