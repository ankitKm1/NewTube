import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles' 

import './index.css'
import App from './App'
import { root } from 'postcss'

const hover={ 
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)'}}
    
  
const theme= createTheme({
  palette: {

  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: hover,
      }
      },
    MuiListItem : {
      styleOverrides:{ root:hover},
    }
    }
  
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
