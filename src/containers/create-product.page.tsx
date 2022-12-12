import './all-containers.styles.scss'
import CreateProductForm from '../components/create-product.form'

const CreateProductPage = () => {
  return (
    <div className='container'>
      <div className='create-product'>
        <h1 className='title'>Create Product</h1>
        <CreateProductForm />
      </div>
    </div>
  )
}

export default CreateProductPage
