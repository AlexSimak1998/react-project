import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Icons({ name, style = {} }) {
  return (
    <i className={`bi ${name}`} style={style}></i>
  )
}
