/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactTypingEffect from 'react-typing-effect';


function header() {
  return (
    <div className="heaper-warapper">
    <main className="main-info">
      <ReactTypingEffect className="typingeffect" text={['Welcome to my portfolio',
        ]} speed={110} eraseDelay={600}/>
        <br/>
       <ReactTypingEffect className="typingeffect" text={['I am Bene Tesla','Frontend developer','Backend developer',
        'Mobile developer',      
       ]} speed={100} eraseDelay={500}/>
        <a href="https://api.whatsapp.com/send?phone=5519999528951&text=Obrigador%20por%20entrar%20em%20contato%20comigo%2C%20em%20que%20eu%20posso%20te%20ajudar%3F" className="btn-main-offer">Contact me</a>
    </main>       
    </div>
  )
}

export default header