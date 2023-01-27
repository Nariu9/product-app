import ContentLoader from 'react-content-loader'
import classes from './Product.module.scss'

export const ProductSkeleton = () => (
  <ContentLoader
    className={classes.pizzaBlock}
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='135' cy='125' r='123' />
    <rect x='40' y='267' rx='10' ry='10' width='198' height='26' />
    <rect x='2' y='316' rx='10' ry='10' width='277' height='85' />
    <rect x='0' y='431' rx='10' ry='10' width='102' height='28' />
    <rect x='139' y='421' rx='15' ry='15' width='141' height='45' />
  </ContentLoader>
)
