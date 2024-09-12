import { StrictMode } from 'react'
import { Fragment } from 'react'
import { useState, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'
import { AppRoutes } from './routes/index.jsx'

import './index.css'
import GlobalStyles from './utilis/global.js'
import { useBorderColorToggle } from './hooks/border-colorToggle.js'

function App() {
  useBorderColorToggle()
  return (
    <StrictMode>
          <AppRoutes>
              <GlobalStyles />
              <Home />
          </AppRoutes>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);