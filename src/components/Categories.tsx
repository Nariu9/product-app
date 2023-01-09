import { useState } from 'react'

type CategoriesType = 'All' | 'Meat' | 'Vegan' | 'Grill' | 'Spicy' | 'Exotic'

export const Categories = () => {
  const categories: CategoriesType[] = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Exotic']
  const [activeCategory, setActiveCategory] = useState<CategoriesType>('All')

  const setActiveHandler = (category: CategoriesType) => () => setActiveCategory(category)

  return (
    <div className='categories'>
      <ul>
        {categories.map((el) => (
          <li
            key={el}
            onClick={setActiveHandler(el)}
            className={activeCategory === el ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}
