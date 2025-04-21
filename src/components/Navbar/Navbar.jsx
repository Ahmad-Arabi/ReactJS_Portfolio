import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation">
      <div className="container-fluid">
        <h2 className="navbar-brand logo">Ahmad <span>Arabi</span></h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 nav_container">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#top">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#highlight">Highlight</a>
            </li>
            <li className="nav-item contactme">
              <a className="nav-link" href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar