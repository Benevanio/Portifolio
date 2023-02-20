import React from 'react'
import './about.css'
import CV from '../../CV/CV.pdf'
import Card from '../../components/Card'
import Services from '../Links/Services'
import ReactTypingEffect from 'react-typing-effect';

import { BsCloudArrowDownFill, BsFillArrowDownSquareFill } from 'react-icons/bs'

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
           <ReactTypingEffect
              text={["⚡ About me⚡"]}
              speed={100}
              eraseDelay={700}
              typingDelay={1000}
              className='header__name'
            />
          </h2>
          <div className="about__me__cards">
            {
              Services.map(item => (
                <Card key={item.id} className="about__me__cards__card">
                  <span className="about__me__cards__card__icon">{item.icon}</span>
                  <h3 className="about__me__cards__card__title">{item.title}</h3>
                  <p className="about__me__cards__card__text">{item.text}</p>
                </Card>
              ))
            }
          </div>
          <p className="about__me__text">
            The nerdy guy and anime lover,
            yes this is me,
            the gentleman addicted to the subject
            of physics or astronomy the guy who
            studied about FEB and its importance in World War II,
            the guy who is always in search of knowing more and more.
          </p>
          <br />
          <p className='about__me__text'>
            Hi my name is Benevanio or <mark>Bene Tesla </mark>
            (name used in almost all my social networks).
            Natural of the city of Sergipe, Brazil.
            I'm attending the 4th semester of software engineering at Anhanguera University.
          </p>
          <a href={CV} className="btn btn--outline2">
            Download my CV   <BsFillArrowDownSquareFill />
          </a>
          <br />
          <a href=" http://lattes.cnpq.br/9324222644313081" className="btn btn--outline3">
            My Lattes CV  <BsCloudArrowDownFill />
          </a>
        </div>
      </div>
    </section>
  )
}

export default about