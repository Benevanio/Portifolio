import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import CV from '../../cv/BENETELA.pdf'
import TESLA from '../../IMG/Tesla.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color, setColor] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div className={color ? 'Header Header-bg' : 'Header'}>
            <Link to='/'>

                <img src={TESLA} alt="Nikolatesla" id="Tesla"></img>

            </Link>
            <ul className={click ? "nav-links active" : "nav-links"}>
                <li className='ICONES'>
                    <Link to='/'>
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li className='ICONES'>
                    <Link to='/project'>
                        <i className="fas fa-project-diagram"></i>
                    </Link>
                </li>
                <li className='ICONES'>
                    <Link to='/about'>
                        <i className="fas fa-user"></i>
                    </Link>
                </li>
                <li className='ICONES'>
                    <Link to='/contact'>
                        <i className="fas fa-envelope"></i>
                    </Link>
                </li>

                <li className='nav-links__resume'>
                   <Link to={CV} target="_blank" download> <button class="download-button">
                        <div class="docs"><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> 
                        
                        </div>
                        <div class="download">
                            <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
                            </svg>                            
                        </div>
                    </button>
                    </Link>
                </li>

            </ul>
            <div className='hambuger' onClick={handleClick}>
                {click ? (
                    <FaTimes
                        size={30}
                        style={{ color: 'white' }}

                    />
                ) : (
                    <FaBars
                        size={30}
                        style={{ color: 'white' }}
                    />
                )
                }
            </div>
        </div>
    )
}

export default Navbar