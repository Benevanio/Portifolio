import React from 'react'
import './footer.scss'
const footer = () => {
  return (
    <section id='footer'>
      <div className='container footer__container'>
        <div className='footer__social'>
          <a href='https://www.linkedin.com/in/bene-tesla/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a href='https://github.com/benetesla' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://www.instagram.com/bene_tesla/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram'></i>
          </a>
        
        </div>
        <p className='footer__text'>
          Made with <i className='fas fa-heart'></i> by Bene Tesla
        </p>
        <p className='footer__text'>
          © 2023 All rights reserved
        </p>
        <p className='footer__text'>
        buy me a coffee <a href='https://www.buymeacoffee.com/BeneTesla' target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-coffee'></i>
        </a>
        </p>

      </div>

    </section>
  )
}

export default footer