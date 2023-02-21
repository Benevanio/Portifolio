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
        text=" 👨‍💻 I'm a Full Stack Web
                        Developer with a passion
                        for learning new technologies
                        and creating new things.
                        I'm currently working on
                        my skills and learning new
                        technologies to become
                        a better developer. 👨‍💻"
      />
     
      <Footer />
    </>
  )
}

export default About