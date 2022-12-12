import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ProductsContextProvider } from './contexts/products.context'

import App from './App'

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
