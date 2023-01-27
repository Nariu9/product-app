import { useState } from 'react'
import classes from './Categories.module.scss'

type CategoriesType = 'All' | 'Meat' | 'Vegan' | 'Grill' | 'Spicy' | 'Exotic'

export const Categories = () => {
  const categories: CategoriesType[] = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Exotic']
  const [activeCategory, setActiveCategory] = useState<CategoriesType>('All')

  const setActiveHandler = (category: CategoriesType) => () => setActiveCategory(category)

  return (
    <div className={classes.categories}>
      <ul>
        {categories.map((el) => (
          <li
            key={el}
            onClick={setActiveHandler(el)}
            className={activeCategory === el ? classes.active : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}
