import './all-containers.styles.scss'
import DisplayProductsList from '../components/display-products.list'

const AllProductsPage = () => {
  return (
    <div className='container'>
      <h1 className='title'>All Products</h1>
      <div className='all-products'>
        <DisplayProductsList />
      </div>
    </div>
  )
}

export default AllProductsPage
