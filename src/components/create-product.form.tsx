import './all-components.styles.scss'
import './create-product.styles.scss'

import { useState, useContext, FormEvent } from 'react'
import uuid from 'react-uuid'
import { ProductType, ProductsContext } from '../contexts/products.context'

const CreateProductForm = () => {
  const [product, setProduct] = useState<ProductType>({
    id: uuid(),
    name: '',
    description: '',
    price: 0,
    colorVariants: [
      {
        id: uuid(),
        color: '',
        imageUrl: '',
        quantity: 0,
      },
    ],
  })

  const { products, setProducts } = useContext(ProductsContext)

  const handleBtnClickAddColor = () => {
    setProduct({
      ...product,
      colorVariants: [
        ...product.colorVariants,
        {
          id: uuid(),
          color: '',
          imageUrl: '',
          quantity: 0,
        },
      ],
    })
  }

  const handleBtnClickRemoveColor = (e: FormEvent<HTMLButtonElement>) => {
    if (product.colorVariants.length === 1) return
    else {
      const updatedColorVariants = product.colorVariants.filter(
        colorVariant => colorVariant.id !== e.currentTarget.dataset.colorId
      )
      setProduct({ ...product, colorVariants: updatedColorVariants })
    }
  }

  const handleChangeProductDetail = (e: FormEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleChangeColorVariant = (e: FormEvent<HTMLInputElement>) => {
    const updatedColorVariants = product.colorVariants.map(colorVariant => {
      if (colorVariant.id === e.currentTarget.dataset.colorId) {
        return {
          ...colorVariant,
          [e.currentTarget.name]: e.currentTarget.value,
        }
      } else {
        return colorVariant
      }
    })
    setProduct({ ...product, colorVariants: updatedColorVariants })
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setProducts([...products, product])
    setProduct({
      id: uuid(),
      name: '',
      description: '',
      price: 0,
      colorVariants: [
        {
          id: uuid(),
          color: '',
          imageUrl: '',
          quantity: 0,
        },
      ],
    })
  }

  return (
    <div className='component'>
      <form className='product-form' onSubmit={handleFormSubmit}>
        <fieldset className='product-generic-details'>
          <legend>Enter Generic Information</legend>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={product.name}
            onChange={handleChangeProductDetail}
            required
          />

          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            value={product.description}
            onChange={handleChangeProductDetail}
            required
          />

          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            name='price'
            value={product.price}
            onChange={handleChangeProductDetail}
            required
          />
        </fieldset>

        {product.colorVariants.map((colorVariant, index) => {
          return (
            <fieldset key={colorVariant.id} className='product-color-details'>
              <legend>Enter Color Variation</legend>
              <label htmlFor='color'>Color</label>
              <input
                type='text'
                id='color'
                name='color'
                data-color-id={colorVariant.id}
                value={product.colorVariants[index].color}
                onChange={handleChangeColorVariant}
                required
              />

              <label htmlFor='imageUrl'>Image URL</label>
              <input
                type='text'
                id='imageUrl'
                name='imageUrl'
                data-color-id={colorVariant.id}
                value={product.colorVariants[index].imageUrl}
                onChange={handleChangeColorVariant}
                required
              />

              <label htmlFor='quantity'>Quantity</label>
              <input
                type='number'
                id='quantity'
                name='quantity'
                data-color-id={colorVariant.id}
                value={product.colorVariants[index].quantity}
                onChange={handleChangeColorVariant}
                required
              />

              <button
                type='button'
                className='button btn__remove-color'
                data-color-id={colorVariant.id}
                onClick={handleBtnClickRemoveColor}
                disabled={product.colorVariants.length === 1}
              >
                Remove Color
              </button>
            </fieldset>
          )
        })}
        <button
          type='button'
          className='button btn__add-color'
          onClick={handleBtnClickAddColor}
        >
          Add Another Color
        </button>
        <button type='submit' className='button btn__submit'>
          Add Product to the Catalog
        </button>
      </form>
    </div>
  )
}

export default CreateProductForm
