import React from 'react'
import './about.css'
import CV from '../../CV/CV.pdf'
import Cards from '../Links/Services'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'

import Logo from '../../images/Logo.jpg'
const about = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__content_Left">
          <img src={Logo} alt="Logo" className="about__content_Left__logo" />
        </div>
        <div className="about__content_Right">
          <h2>
            About me
          </h2>
          <div className="about__me__cards">
            {
              Cards.map((card) => {
                return (
                  <div className="card" key={card.id}>
                    <div className="card__icon">
                      {card.icon}
                    </div>
                    <div className="card__content">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </div>
                )                  
              })
            }
          </div>
          <p>
              The nerdy guy and anime lover,
              yes this is me,
              the gentleman addicted to the subject
              of physics or astronomy the guy who
              studied about FEB and its importance in World War II,
              the guy who is always in search of knowing more and more.
            </p>
            <p>
              Hi my name is Benevanio or Bene tesla
              (name used in almost all my social networks).
              I'm a fan of physics, chemistry and mathematics,
              in the future I think about doing a degree in
              mathematics or something in physics,
              maybe a bachelor's degree in physics, Y
              es this is "I" the pleasure nerd🖖🖖.
            </p>
            <a href={CV} className="btn btn--outline2">
              Download my CV   <BsFillArrowDownSquareFill />
            </a>
            <br />
            <a href=" http://lattes.cnpq.br/9324222644313081" className="btn btn--outline2">
              My Lattes CV  <BsFillArrowDownSquareFill />
            </a>
        </div>
      </div>
    </section>
  )
}

export default about