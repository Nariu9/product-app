import { Link } from 'react-router-dom'
import classes from './PageNotFound.module.scss'

export const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <h1>Page not found 😢</h1>
      <Link to={'/'}>&#8592; Back to main page</Link>
    </div>
  )
}
