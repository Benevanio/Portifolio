import React from 'react'
import './Hero.scss'
import Logo from '../../IMG/Fundo.jpg'
import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='maks'>
        <img src={Logo} alt='logo' className='IntroIm' />
      </div>
      <div className='content'>
        <h1 className='title'>
          Welcome to my <span className='span'>Portfolio</span>
        </h1>
        <p className='text'>
          <ReactTypingEffect
            text={["MERN Stack Developer", " Full Stack Developer ", "Front-End Developer ", "Back-End Developer"]}
            speed={100}
            eraseDelay={700}
            typingDelay={1000}
          />
        </p>
        <div>
          <Link to='/project' className='btn01'>
            <i className='fas fa-code'></i> Projects
          </Link>
          <Link to='/contact' className='btn02 btn-light'>
            <i className='fas fa-phone'></i> Contact
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroImg