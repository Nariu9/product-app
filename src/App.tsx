import React from 'react'
import './scss/App.scss'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Sort } from './components/Sort'
import { Product } from './components/Product'

function App() {
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
            <Product title={'Neapolitan Pizza'} price={3} />
            <Product title={'Chicago Pizza'} price={6} />
            <Product title={'New York-Style Pizza'} price={5} />
            <Product title={'Sicilian Pizza'} price={8} />
            <Product title={'Greek Pizza'} price={4} />
            <Product title={'California Pizza'} price={5} />
            <Product title={'Detroit Pizza'} price={7} />
            <Product title={'St. Louis Pizza'} price={5.5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
