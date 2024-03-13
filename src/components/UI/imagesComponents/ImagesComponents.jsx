import React from 'react'

export default function ImagesComponents({ src, alt, className, style }) {
  return (
     <img src={src} alt={alt} className={className} style={style} />
  )
}
