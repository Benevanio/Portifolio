/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactTypingEffect from 'react-typing-effect';


function header() {
  return (
    <div className="heaper-warapper">
    <main className="main-info">
       <ReactTypingEffect className="typingeffect" text={['I am Bene Tesla','Frontend developer','Backend developer',
        'Mobile developer',      
       ]} speed={100} eraseDelay={500}/>
        <a href="#" className="btn-main-offer">Contact me</a>
    </main>       
    </div>
  )
}

export default header