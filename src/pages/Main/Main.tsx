import { Categories } from '../../components/Categories'
import { Sort } from '../../components/Sort'
import { ProductSkeleton } from '../../components/Product/ProductSkeleton'
import { Product } from '../../components/Product/Product'
import { useLoaderData, useNavigation } from 'react-router-dom'

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

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>All pizzas</h2>
      <div className='content__items'>
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
