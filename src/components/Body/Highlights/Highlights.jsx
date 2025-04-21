import React from 'react'
import './style.css'

const Highlights = () => {
  return (
    <section id="highlight">
        <article className="highlight_title">
          <h2>Highlights</h2>
        </article>
        <article className="highlight_list">
          <h3 style={{ fontSize: '1.5em' }}>Why Choose Me</h3>
          <ul>
            <li>Commitment to Excellence</li>
            <p>
              As a full stack developer, I am deeply committed to delivering
              high-quality results. Whether it's front-end design or back-end
              functionality, I pour my heart and soul into every project,
              ensuring it meets the highest standards of excellence.
            </p>
            <li>Perfectionist Mindset</li>
            <p>
              I strive for perfection in every detail. From pixel-perfect
              designs to flawless code, I believe that excellence is in the
              details. My meticulous approach ensures that every project is
              polished and professional.
            </p>
            <li>Honesty & Mutual Respect</li>
            <p>
              I value honesty and mutual respect above all. Transparency and
              open communication are key to building strong relationships with
              my clients. I am dedicated to fostering a collaborative
              environment where trust and respect thrive.
            </p>
          </ul>
        </article>
    </section>
  )
}

export default Highlights