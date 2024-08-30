import { StrictMode } from 'react'
import { useState, useContext } from 'react'
import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './routes/index.jsx'
import { Home } from './pages/Home'

import GlobalStyles from './utilis/global.js'
import './index.css'
function App() {
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