import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'react-jss'
import {theme} from "../theme/theme.ts"
import Navigations from './routes/index.tsx'
import { StoreProvider } from './store/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </StoreProvider>
  </StrictMode>,
)
