/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { GiMoonOrbit } from 'react-icons/gi'
import Logo from '../../images/Logo.jpg'
import './navbar.css'
import Data from '../Links/data'
const navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href='index.html' className='nav__logo'>
          <img src={Logo} alt='logo' />
        </a>
        <ul className='nav__menu'>
          {
            Data.map((item) => {
              const { id, link, text } = item
              return (
                <li key={id} >
                  <a href={link} >
                    {text}
                  </a>
                </li>
              )
            })
          }
        </ul>
        <button id="theme__icon">
          < GiMoonOrbit />
        </button>
      </div>
    </nav>
  )
}

export default navbar