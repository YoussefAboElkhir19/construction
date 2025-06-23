import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Abouthero from '../components/common/Abouthero'
import Team from '../components/common/Team'
import Hero from '../components/common/Hero'

function About() {
  return (
    <>
      <Header />
      <main>
        <Hero
          preheading='Quality. Integrity. Vakue.'
          heading='About Us'
          text='We are the best construction company in Egypt <br /> We are the best construction company in Egypt'
        />

        <Abouthero />
        {/* Team Section */}
        <Team />



      </main>
      <Footer />
    </>
  )
}

export default About
