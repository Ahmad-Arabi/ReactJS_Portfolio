import React from 'react'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import Highlights from './Highlights/Highlights'
import Testimonials from './Testimonials/Testimonials'
import Projects from './Projects/Projects'
import './style.css'

const Body = () => {
  return (
    <main className="main_container py-lg-5">
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Highlights />
    </main>
  )
}

export default Body