import React from 'react'
import './header.css'
import ReactTypingEffect from 'react-typing-effect';

import Icones from '../Links/SocialMedia'
import Logo from '../../images/Bhaskara_Bene.jpg'
const header = () => {
        return (
        <header id='header'>
           
            <div className='container header__container'>
                <div className='header__profile'>
                    <img src={Logo} alt='profile' className='header__profile-img' />
                </div>

                <h3>
                    <span className='header__name'>
                        <ReactTypingEffect
                            text={["⚡ Bene Tesla⚡"]}
                            speed={100}
                            eraseDelay={700}
                            typingDelay={1000}
                            className='header__name'
                        />
                    </span>
                </h3>
                <p>
                    Welcome to my portfolio. I am a full stack developer with
                    a passion for learning new technologies.
                    I am currently studying at <a href='https://www.anhanguera.com/' target='_blank' rel='noopener noreferrer'>Anhaguera </a>
                    Educacional University
                    in Brazil.
                    I am looking for a job as a developer and I am open to new opportunities.
                </p>
                <div className='header__cta'>
                    <a href='#contact' className='btn primary'>Contact me</a>
                    <a href='#portifolio' className='btn secondary'>My projects</a>
                </div>
                <div className='header__social'>
                    {Icones.map((item) => {
                        const { id, Link, icon } = item
                        return (
                            <div key={id} className='header__social-icon'>
                                <a href={Link} target='_blank' rel='noopener noreferrer'>
                                    {icon}
                                </a>
                            </div>
                        )
                    })}
                </div>


            </div>
        </header>
    )
}

export default header