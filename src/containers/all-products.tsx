import { useContext, useEffect } from 'react'

import { ProductsContext } from '../contexts/products-context'

import './container_styles.scss'

const AllProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    console.log('products', products)
  }, [products])

  const handleClearProducts = () => {
    localStorage.removeItem('products')
    setProducts([])
  }

  return (
    <div className='container'>
      <div className='all-products'>
        <h1 className='title'>All Products</h1>
        <div className='products'>
          {products.map((product, index) => (
            <div className='product' key={index}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>

        <button className='clear-products' onClick={handleClearProducts}>
          Clear Products
        </button>
      </div>
    </div>
  )
}

export default AllProducts
