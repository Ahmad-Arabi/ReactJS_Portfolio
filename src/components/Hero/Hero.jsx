import React from 'react'
import github from '../../assets/images/github.svg'
import profilePic from '../../assets/images/profile.png'
import './style.css'

const Hero = () => {
  return (
    <header className="container px-4 header mt-lg-4">
      <div className="row row-cols-2 align-items-center justify-content-between pt-5 mt-5">
        <div className="col-12 col-lg-8 d-flex justify-content-center my-4 my-lg-3">
          <section className="header_text container px-3">
            <h2>I'm</h2>
            <h1><span>Ahmad</span> Arabi</h1>
            <p>Full-Stack Developer</p>
            <p className="description">
              Turning visions into reality, one line of code at a time.
            </p>
            <a
              className="social"
              href="https://github.com/Ahmad-Arabi"
              target="_blank"
            >
              <img src={ github } alt="github logo" />
            </a>
          </section>
        </div>
        <div className="col-4 profile_image_con">
          <img
            src={ profilePic }
            alt="profile picture"
            className="img-fluid"
            style={{ borderRadius: '50%', border: '2px solid rgba(141, 187, 244, 0.8)', opacity: '0.8', height: '300px'}}
          />
        </div>
      </div>
    </header>
  )
}

export default Hero