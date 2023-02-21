import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import Cardsprojests from '../../components/CardsProjects/Cardsprojests'
const Project = () => {
  return (
    <>
      <Navbar />
      <Projects
        Heading="Projects"
        text="Some of my recent projects"
      />
      <Cardsprojests />
      <Footer />
    </>
  )
}

export default Project