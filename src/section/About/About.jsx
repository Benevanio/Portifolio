import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
const About = () => {
  return (
    <>
      <Navbar />
      <Projects
        Heading="About"
        text="I am a MERN stack developer, MongoDB, Express, React, NodeJS"
      />
     
      <Footer />
    </>
  )
}

export default About