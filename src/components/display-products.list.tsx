import './all-components.styles.scss'
import './display-products.styles.scss'

import { useContext } from 'react'
import { ProductsContext } from '../contexts/products.context'

const DisplayProductsList = () => {
  const { products, setProducts } = useContext(ProductsContext)

  const handleBtnClickEmptyLocalStorage = () => {
    localStorage.removeItem('products')
    setProducts([])
  }

  return (
    <div className='component'>
      <div className='products-list'>
        {products.map(product => (
          <div className='product' key={product.id}>
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-desc'>{product.description}</p>
            <p className='product-price'>Price: ${product.price} USD</p>
            {product.colorVariants.map(variant => (
              <div className='product-variant' key={variant.id}>
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
      </div>
      <button
        className='button btn__clear-products'
        onClick={handleBtnClickEmptyLocalStorage}
      >
        Clear All Products
      </button>
    </div>
  )
}

export default DisplayProductsList
