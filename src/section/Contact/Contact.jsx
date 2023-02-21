import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
import Contact1 from '../../components/Contact/Contact';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Projects
        Heading="Contact"
        text="Get in touch with me"
      />
      <Contact1 />
      <Footer />
    </>
  )
}

export default Contact