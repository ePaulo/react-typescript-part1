import NavList from './components/nav-list'
import CreateProduct from './containers/create-product'
import AllProducts from './containers/all-products'

import './App.css'

function App() {
  return (
    <div className='App'>
      <NavList />
      <h1>Hello</h1>
      <CreateProduct />
      <AllProducts />
    </div>
  )
}

export default App
