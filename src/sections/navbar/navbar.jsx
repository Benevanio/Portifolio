/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navbar.scss'
const navbar = () => {
  return (
    <nav id='nav'>
      <div className='container nav__container'>
        <a href='#' className='nav__logo'>
          <img src='./images/Logo.jpg' alt='' />
        </a>      
      </div>
    </nav>
  )
}

export default navbar