import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
const Project = () => {
  return (
    <>
      <Navbar />
      <Projects
        Heading="Projects"
        text="Some of my recent projects"
      />
      <Footer />
    </>
  )
}

export default Project