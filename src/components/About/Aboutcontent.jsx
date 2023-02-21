import React from 'react'
import { Link } from 'react-router-dom'

import ReactTypingEffect from 'react-typing-effect'
import './About.scss'
import Project02 from '../../IMG/Project03.png'
import Project03 from '../../IMG/Project04.png'

const Aboutcontent = () => {
    return (
        <div className="About">
            <div className="left">
                <h1>
                    <ReactTypingEffect
                        text={["Who Am I🖖🏻"]}
                        speed={100}
                        eraseDelay={1000}
                        typingDelay={1000}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                    />
                </h1>
                <p>
                    I am a software engineering student,
                    academic researcher and an astronomy lover,
                    a fan of Japanese culture and a fan of the Brazilian
                    Expeditionary Force and all its legacy in World War II.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact Me</button>
                </Link>

            </div>
            <div className="Right">
                <h5>Projects With Authentication</h5>
                <div className='IMG-CONTAINER'>

                    <div className="img-stack top">
                        <img src={Project02} alt="Stack project 01" className='img' />
                    </div>
                    <div className="img-stack bottom">
                        <img src={Project03} alt="Stack project 01" className='img' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutcontent