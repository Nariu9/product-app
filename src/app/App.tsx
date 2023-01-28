import React from 'react'
import './App.scss'
import { Main } from '../pages/Main/Main'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound'
import { Root } from '../components/Root'
import { productsLoader } from '../utils/productsLoader'
import { Cart } from '../components/Cart/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<Root />}>
      <Route index element={<Main />} loader={productsLoader} />
      <Route path={'/cart'} element={<Cart />} />
      <Route path={'/404'} element={<PageNotFound />} />
      <Route path={'*'} element={<Navigate to={'/404'} />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
