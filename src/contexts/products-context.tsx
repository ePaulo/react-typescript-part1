import { ReactNode, createContext, useState, useEffect } from 'react'

export type VariantType = {
  id: string
  color: string
  imageUrl: string
  quantity: number
}

export type ProductType = {
  id: string
  name: string
  description: string
  price: number
  variants: VariantType[]
}

type ProductsContextType = {
  products: ProductType[] | []
  setProducts: (products: ProductType[] | []) => void
}

type ProductsContextProviderProps = {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType)

export const ProductsContextProvider = ({
  children,
}: ProductsContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[] | []>([])

  useEffect(() => {
    const storedProducts = localStorage.getItem('products')
    if (storedProducts) {
      console.log('storedProducts', storedProducts) // LOG
      setProducts(JSON.parse(storedProducts))
    }
  }, [])

  useEffect(() => {
    if (products.length === 0) return
    localStorage.setItem('products', JSON.stringify(products))
    console.log('products stored', products) // LOG
  }, [products])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
