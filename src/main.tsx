import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'react-jss'
import { StoreProvider } from './store/index.tsx'
import { themeLight } from './theme/oceanBlueLight.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
     <ThemeProvider theme={themeLight}>
      <App />
    </ThemeProvider>
    </StoreProvider>
  </StrictMode>,
)
