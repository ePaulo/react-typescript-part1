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
        {products.map(product => (
          <div className='product' key={product.id}>
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-desc'>{product.description}</p>
            <p className='product-price'>Price: ${product.price} USD</p>
            {product.variants.map(variant => (
              <div className='variant' key={variant.id}>
                <img
                  className='variant-image'
                  src={variant.imageUrl}
                  alt={product.name}
                />
                <div className='variant-color-quantity'>
                  <span className='variant-color'>Color: {variant.color}</span>
                  <span className='variant-quantity'>
                    Quantity: {variant.quantity}
                  </span>
                </div>
              </div>
            ))}
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

/*
          <div className='product' key={product.id}>
            <img
              className='product-image'
              src={product.variants[0].imageUrl}
              alt={product.name}
            />
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-desc'>{product.description}</p>
            <p className='product-price'>${product.price} USD</p>
          </div>
 */
