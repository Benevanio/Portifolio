import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import Aboutcontent from '../../components/About/Aboutcontent'
const About = () => {
  return (
    <>
      <Navbar />
      <Projects
        Heading="About"
        text=" 👨‍💻 I'm a Full Stack Web Developer 👨‍💻"
      />
      <Aboutcontent />
     
      <Footer />
    </>
  )
}

export default About