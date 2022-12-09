import { useState, useContext, FormEvent } from 'react'
import uuid from 'react-uuid'

import { ProductType } from '../contexts/products-context'
import { ProductsContext } from '../contexts/products-context'

import './container_styles.scss'

const CreateProduct = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [color, setColor] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)

  const { products, setProducts } = useContext(ProductsContext)

  const emptyFormFields = () => {
    setName('')
    setDescription('')
    setPrice(0)
    setColor('')
    setImageUrl('')
    setQuantity(0)
  }

  const addProduct = (product: ProductType) => {
    const productIndex = products.findIndex(
      (p: ProductType) =>
        p.name.toLocaleLowerCase() === product.name.toLocaleLowerCase()
    )

    if (productIndex !== -1) {
      const variantIndex = products[productIndex].variants.findIndex(
        v =>
          v.color.toLocaleLowerCase() ===
          product.variants[0].color.toLocaleLowerCase()
      )

      if (variantIndex !== -1) {
        products[productIndex].variants[variantIndex].imageUrl =
          product.variants[0].imageUrl
        products[productIndex].variants[variantIndex].quantity =
          product.variants[0].quantity
      } else {
        products[productIndex].variants.push(product.variants[0])
      }

      setProducts([...products])
      return
    } else {
      setProducts([...products, product])
    }
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addProduct({
      id: uuid(),
      name,
      description,
      price,
      variants: [
        {
          id: uuid(),
          color,
          imageUrl,
          quantity,
        },
      ],
    })

    emptyFormFields()
  }

  return (
    <div className='container'>
      <div className='create-product'>
        <h1 className='title'>Create Product</h1>
        <form className='product-form' onSubmit={handleSubmitForm}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />

          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            name='price'
            value={price}
            onChange={e => setPrice(+e.target.value)}
            required
          />

          <label htmlFor='color'>Color</label>
          <input
            type='text'
            id='color'
            name='color'
            value={color}
            onChange={e => setColor(e.target.value)}
            required
          />

          <label htmlFor='imageUrl'>Image URL</label>
          <input
            type='text'
            id='imageUrl'
            name='imageUrl'
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            required
          />

          <label htmlFor='quantity'>Quantity</label>
          <input
            type='number'
            id='quantity'
            name='quantity'
            value={quantity}
            onChange={e => setQuantity(+e.target.value)}
            required
          />

          <button type='submit'>Create Product</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
