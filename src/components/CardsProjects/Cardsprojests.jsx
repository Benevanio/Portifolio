import React from 'react'
import './Cards.scss'
import Project01 from '../../IMG/Project01.png'
import Project02 from '../../IMG/Project03.png'
import Project03 from '../../IMG/Project04.png'
import { NavLink } from 'react-router-dom'
const Cardsprojests = () => {
    return (
        <div className="Work__CONTAINER">
            <h1 className="Work__HEADING">
                Recent Projects
            </h1>
            <div className="Project__CONTAINER">
                <div className="Project__CARD">
                    <img src={Project01} alt="Project01 QR code generator" />
                    <h1 className="Project__Title">
                        QR code generator with EJS
                    </h1>
                    <div className="Project__Description">
                        <p>
                            This is a QR code generator made with EJS,
                            Node.js and Express.js.
                            It is a simple project that I made to learn
                            how to use EJS and how to make a simple web app.
                        </p>
                    </div>
                    <div className="Project__Links">
                        <NavLink to="https://github.com/benetesla/QR_GENERATOR" className="btn">
                            <i className="fab fa-github"></i>
                        </NavLink>

                    </div>
                </div>
                <div className="Project__CARD">
                    <img src={Project02} alt="Login System" />
                    <h1 className="Project__Title">
                        Login System with Node.js JWT
                    </h1>
                    <div className="Project__Description">
                        <p>
                            This is a Login System made with Node.js, Express.js and JWT.
                        </p>
                    </div>
                    <div className="Project__Links">
                        <NavLink to="https://github.com/benetesla/LoginSYSTEM" className="btn">
                            <i className="fab fa-github"></i>
                        </NavLink>

                    </div>
                    
                </div>
                <div className="Project__CARD">
                    <img src={Project03} alt="WebRTC" />
                    <h1 className="Project__Title">
                        Login System with Node.js JWT
                    </h1>
                    <div className="Project__Description">
                        <p>
                            this is a WebRTC project made with Node.js, Express.js and Socket.io.
                            For web comunication in real time.
                        </p>
                    </div>
                    <div className="Project__Links">
                        <NavLink to="https://github.com/benetesla/WebChat_NODE_REACT" className="btn">
                            <i className="fab fa-github"></i>
                        </NavLink>

                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Cardsprojests