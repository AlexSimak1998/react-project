import React from 'react'
import classes from './Input.module.scss'
export default function Input(props) {
  return (
    <input type="text" {...props} className={classes.Input} placeholder={props.placeholder}/>
  )
}
