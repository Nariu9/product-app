import { Categories } from '../../components/Categories/Categories'
import { Sort } from '../../components/Sort/Sort'
import { ProductSkeleton } from '../../components/Product/ProductSkeleton'
import { Product } from '../../components/Product/Product'
import { useLoaderData, useNavigation } from 'react-router-dom'
import classes from './Main.module.scss'
import { useEffect } from 'react'

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

export const Main = () => {
  const products = useLoaderData() as ProductType[]
  const navigation = useNavigation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={classes.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={classes.title}>All pizzas</h2>
      <div className={classes.items}>
        {navigation.state === 'loading'
          ? [...new Array(8)].map((_, i) => <ProductSkeleton key={i} />)
          : products.map((prod) => (
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
    </>
  )
}
