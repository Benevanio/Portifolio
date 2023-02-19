import React from 'react'
import './header.scss'
import Logo  from '../../images/Bhaskara_Bene.jpg'
const header = () => {
    return (
        <header id='header'>
            <div className='container header__container'>
                <div className='header__profile'>
                    <img src={Logo} alt='profile' className='header__profile-img' />
                </div>
            </div>
        </header>
    )
}

export default header