import React from 'react'
import './header.scss'
import Icones from '../Links/SocialMedia'
import Logo from '../../images/Bhaskara_Bene.jpg'
const header = () => {
    return (
        <header id='header'>
            <div className='container header__container'>
                <div className='header__profile'>
                    <img src={Logo} alt='profile' className='header__profile-img' />
                </div>
                <small className='header__small'>
                    This and my cosplay of bhaskara, matematician and astronomer from India.
                    This cosplay was from a math competition of my school
                    at the time of high school,
                    in this competition I was the room leader
                    along with a friend,
                    our room was the champion of this competition.
                </small>
                <h3>
                    <span className='header__name'>Bene Tesla</span>
                </h3>
                <p className='header__description'>
                    Welcome to my portfolio. I am a full stack developer with
                    a passion for learning new technologies.
                    I am currently studying at <a href='https://www.anhanguera.com/' target='_blank' rel='noopener noreferrer'>Anhaguera </a>
                    Educacional University
                    in Brazil.
                    I am looking for a job as a developer and I am open to new opportunities.
                </p>
                <div className='heder__cta'>
                    <a href='#contact' className='btn btn--outline'>Contact me</a>
                    <a href='#portifolio' className='btn btn--outline'>My portfolio</a>
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