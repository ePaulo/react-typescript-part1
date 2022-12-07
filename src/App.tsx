import { Routes, Route, Link } from 'react-router-dom'

import { ProductsContextProvider } from './contexts/products-context'
import CreateProduct from './containers/create-product'
import AllProducts from './containers/all-products'

import './app.scss'

function App() {
  return (
    <div className='app-containers'>
      <ProductsContextProvider>
        <nav className='nav'>
          <Link to='/'>Create Product</Link>
          <Link to='all-products'>All Products</Link>
        </nav>

        <Routes>
          <Route path='/' element={<CreateProduct />} />
          <Route path='all-products' element={<AllProducts />} />
        </Routes>
      </ProductsContextProvider>
    </div>
  )
}

export default App
