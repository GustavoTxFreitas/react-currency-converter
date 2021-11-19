import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { CurrencyProvider } from './context/currencies'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
  <CurrencyProvider>
    <App />
  </CurrencyProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
