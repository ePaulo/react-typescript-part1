import { useContext } from 'react'

import { ProductsContext } from '../contexts/products-context'

import './container_styles.scss'

const AllProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)

  const handleClearProducts = () => {
    localStorage.removeItem('products')
    setProducts([])
  }

  return (
    <div className='container'>
      <h1 className='title'>All Products</h1>
      <div className='all-products'>
        {products.map((product, index) => (
          <div className='product' key={index}>
            <img
              className='product-image'
              src={product.imageUrl}
              alt={product.name}
            />
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-desc'>{product.description}</p>
            <p className='product-price'>${product.price} USD</p>
          </div>
        ))}
        <button className='clear-products' onClick={handleClearProducts}>
          Clear All Products
        </button>
      </div>
    </div>
  )
}

export default AllProducts
