/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {IoIosColorPalette} from 'react-icons/io'
import Logo  from '../../images/Logo.jpg'
import './navbar.scss'
import Data from '../Links/data'
const navbar = () => {
  return (
    <nav id='nav'>
      <div className='container nav__container'>
        <a href='index.html' className='nav__logo'>
          <img src={Logo} alt='logo' />
        </a>   
        <ul className='nav__menu'>
        {
          Data.map((item) => {
            const {id, link, text} = item
            return (
              <li key={id} className='nav__item'>
                <a href={link} className='nav__link'>
                  {text}
                </a>
              </li>
            )
          })
        }
        </ul> 
        <button id = "theme__icon">         
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  )
}

export default navbar