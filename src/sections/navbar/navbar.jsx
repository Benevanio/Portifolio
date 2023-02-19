/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navbar.scss'
const navbar = () => {
  return (
    <nav id='nav'>
      <div className='container nav__container'>
        <a href='#' className='nav__logo'>
          <img src='https://user-images.githubusercontent.com/78994881/219959728-52fc0a6a-816a-46a7-9046-c699fbb36003.jpg' alt='' />
        </a>      
      </div>
    </nav>
  )
}

export default navbar