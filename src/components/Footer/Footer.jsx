import React from 'react'
import { FaHome, FaPhone } from 'react-icons/fa'
import './Footer.scss'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer__container'>
                <div className='Left'>
                    <div className="Location">
                        <FaHome 
                            size={30}
                            style={{color: 'black' ,marginRight: '2rem'}}
                        />
                    </div>
                    <div>
                        <p>
                            Nova Odessa, SP
                        </p>
                        <p>
                            Brazil
                        </p>

                    </div>
                    <div className="Phone">
                        <FaPhone size={30} style={{color: 'black', marginRight: '2rem'}}/>
                        <a href="https://wa.me/5519999528951">
                            <i className="fab fa-whatsapp">
                                Whatsapp
                            </i>
                        </a>
                    </div>
                </div>
                <div className='Right'>

                </div>
            </div>
        </div>
    )
}

export default Footer