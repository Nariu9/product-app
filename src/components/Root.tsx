import React from 'react'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import classes from './Root.module.scss'

export const Root = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.content}>
        <div className={classes.container}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
