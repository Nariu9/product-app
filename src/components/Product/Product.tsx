import { useState } from 'react'

type ProductType = {
  img: string
  title: string
  price: number
  types: number[]
  sizes: string[]
}

export const Product = ({ img, title, price, types, sizes }: ProductType) => {
  const [count, setCount] = useState(0)
  const [activeType, setActiveType] = useState<null | number>(null)
  const [activeSize, setSize] = useState<null | string>(null)
  const typesValues = ['thin', 'traditional', 'gluten free']

  const incrementHandler = () => setCount((prevState) => prevState + 1)
  const changeActiveTypeHandler = (type: number) => () => setActiveType(type)
  const changeActiveSizeHandler = (size: string) => () => setSize(size)

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={img} alt='Pizza' />
      <h4 className='pizza-block__title'>{title}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {types.map((type) => (
            <li
              key={type}
              onClick={changeActiveTypeHandler(type)}
              className={type === activeType ? 'active' : ''}
            >
              {typesValues[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={changeActiveSizeHandler(size)}
              className={size === activeSize ? 'active' : ''}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>from $ {price}</div>
        <button className='button button--outline button--add' onClick={incrementHandler}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Add to cart</span>
          {count > 0 && <i>{count}</i>}
        </button>
      </div>
    </div>
  )
}
