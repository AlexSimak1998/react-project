import React  from 'react'
import  classes from './btn.module.scss'
import Icons from '../icons/Icons'
export default function Btn({style,border, children,...props }) {
  

  return (
    <div {...props} className={classes.btn} style={style}>
      {children} 
      <div className={classes.btnArrow} style={border}>
      <Icons name=" bi-arrow-down-right" className={classes.icons}/>
      </div>
    </div>
  )
}
