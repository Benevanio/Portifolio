/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
const navbar = () => {
  return (
    
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <a className="navbar-brand" href="#">
        <img src="../images/bene.png" width="60" height="60" className="rounded-circle"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="nav justify-content-center">
<li className="nav-item">
    <a className="nav-link active" href="#">Home</a>
</li>
<li className="nav-item">
    <a className="nav-link" href="https://github.com/benetesla">Portfolio</a>
</li>
<li className="nav-item">
    <a className="nav-link" href="https://www.linkedin.com/in/bene-tesla/">linkedin</a>
</li>

<li className="nav-item">
    <a className="nav-link" href="https://api.whatsapp.com/send?phone=5519999528951&text=Obrigador%20por%20entrar%20em%20contato%20comigo%2C%20em%20que%20eu%20posso%20te%20ajudar%3F">whatsapp</a>
    
</li>

<li className="nav-item">
    <a className="nav-link" href="https://www.instagram.com/bene_tesla/">instagram</a>

</li>
<li className="nav-item">
    <a className="nav-link" href="https://drive.google.com/file/d/1H2e-fLDEC0b2n88lc8M1fRXkYOaS5uQ5/view?usp=sharing">Resume</a>
</li>
</ul>
</div>
</div>
</nav>
  )
}



export default navbar