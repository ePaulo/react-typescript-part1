import { useState, useContext, FormEvent } from 'react'

import { ProductType } from '../contexts/products-context'
import { ProductsContext } from '../contexts/products-context'

import './container_styles.scss'

const CreateProduct = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)

  const { products, setProducts } = useContext(ProductsContext)

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setProducts([
      ...products,
      {
        name,
        description,
        imageUrl,
        price,
        quantity,
      },
    ] as ProductType[])

    setName('')
    setDescription('')
    setImageUrl('')
    setPrice(0)
    setQuantity(0)
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
          <label htmlFor='imageUrl'>Image URL</label>
          <input
            type='text'
            id='imageUrl'
            name='imageUrl'
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
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
