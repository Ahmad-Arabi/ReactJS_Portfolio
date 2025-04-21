import React from 'react'
import Card from '../Card/Card'
import HTMLogo from '../../../assets/images/html5-balck-icon.png'
import CSSLogo from '../../../assets/images/css.svg'
import Photoshop from '../../../assets/images/photoshop.svg'
import Office from '../../../assets/images/microsoft-office.svg'
import JSLogo from '../../../assets/images/javascript.svg'
import PHPLogo from '../../../assets/images/php-logo.png'
import LaravelLogo from '../../../assets/images/laravel.svg'
import ReactLogo from '../../../assets/images/logo-react.svg'
import './style.css'

const Skills = () => {
  return (
    <section id="skills">
        <article className="skills_title">
          <h2>Skills</h2>
        </article>
        <article className="skills_list d-flex justify-content-center align-items-center flex-wrap gap-2">
        <Card
            imageClass="skills_img"
            imageSrc= { HTMLogo }
            alt="html icon"
            title="HTML"
        />
        <Card
            imageClass="skills_img"
            imageSrc= { CSSLogo }
            alt="css icon"
            title="CSS"
        />
        <Card
            imageClass="skills_img"
            imageSrc= { JSLogo }
            alt="JavaScript icon"
            title="JavaScript"
        />
        <Card
            imageClass="skills_img"
            imageSrc= { PHPLogo }
            alt="php icon"
            title="PHP"
        />
        <Card
            imageClass="skills_img"
            imageSrc= { LaravelLogo }
            alt="laravel icon"
            title="Laravel"
        />
        <Card
            imageClass="skills_img"
            imageSrc= { ReactLogo }
            alt="react icon"
            title="React JS"
        />
        <Card
            imageClass="skills_img"
            imageSrc= { Photoshop }
            alt="photoshop icon"
            title="Photoshop"
        />
        <Card
            imageClass="skills_img"
            imageSrc= { Office }
            alt="office icon"
            title="Microsoft Office"
        />
        </article>
      </section>
  )
}

export default Skills