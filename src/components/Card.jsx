import React from 'react'
import './Card.scss'
export const Card = ({children, className, onClick}) => {

  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}
