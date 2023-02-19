import React from 'react'
import './about.scss'

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
            {/*dwonloda cv */}
            <a href="https://drive.google.com/file/d/1LNMgak0AbHre2ZOjmldm6v_xYmHPyrkF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn--outline2">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about