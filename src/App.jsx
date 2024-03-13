import React from 'react'
import classes from './App.module.scss'
import Navbar from './components/navbar/Navbar'
import MainComponents from './components/main/MainComponents'

export default function App() {
  return (
    <div className={classes.App}>

      <div className={classes.wrapperLine}>

        <div className={classes.wrapper}>
          <Navbar />
          <MainComponents />
        </div>
      </div>

    </div>
  )
}
