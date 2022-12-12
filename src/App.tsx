import { Routes, Route, Link, Navigate } from 'react-router-dom'

import CreateProductPage from './containers/create-product.page'
import AllProductsPage from './containers/all-products.page'

import './app.scss'

function App() {
  return (
    <div className='app-containers'>
      <nav className='nav'>
        <Link to='/'>Create New Product</Link>
        <Link to='all-products'>View Product Catalog</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Navigate to='/create-product' />} />
        <Route path='/create-product' element={<CreateProductPage />} />
        <Route path='/all-products' element={<AllProductsPage />} />
        <Route path='*' element={<Navigate to='/create-product' />} />
      </Routes>
    </div>
  )
}

export default App
