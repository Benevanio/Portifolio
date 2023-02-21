import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
const Contact = () => {
  return (
    <>
      <Navbar />
      <Projects
        Heading="Contact"
        text="Get in touch with me"
      />
      <Footer />
    </>
  )
}

export default Contact