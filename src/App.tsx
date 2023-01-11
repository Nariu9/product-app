import React, { useEffect, useState } from 'react'
import './scss/App.scss'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Sort } from './components/Sort'
import { Product } from './components/Product/Product'
import { ProductSkeleton } from './components/Product/ProductSkeleton'

type ProductType = {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: string[]
  price: number
  category: number
  rating: number
}

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://product-back.vercel.app/')
      setProducts(await data.json())
      setIsLoading(false)
    }
    fetchData().catch(console.error)
  }, [])
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>All pizzas</h2>
          <div className='content__items'>
            {isLoading
              ? [...new Array(8)].map((_, i) => <ProductSkeleton key={i} />)
              : products.map((prod: ProductType) => (
                  <Product
                    key={prod.id}
                    img={prod.imageUrl}
                    title={prod.title}
                    price={prod.price}
                    types={prod.types}
                    sizes={prod.sizes}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
