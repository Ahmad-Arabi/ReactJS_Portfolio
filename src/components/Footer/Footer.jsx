import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <section id="contact">
        <article className="title">
          <h2>Contact Me</h2>
        </article>
        <article className="form_container d-flex justify-content-center">
          <form className="form row row-cols-2 gap-3 justify-content-center align-items-center" action="email" method="post">
              <input className='col-5' type="text" placeholder="First Name*" required />
              <input className='col-5' type="text" placeholder="Second Name*" required />
              <input className='col-5' type="number" placeholder="Phone Number*" required />
              <input className='col-5' type="email" placeholder=" Email Address*" required />
            <textarea 
              className='col-10'
              name="description"
              placeholder="Write a message..."
            ></textarea>
            <button className="button col-5 mt-2">Send</button>
          </form>
        </article>
      </section>
      <section className="credit">© 2025 Ahmad Arabi. All rights reserved</section>
    </footer>
    </>
  )
}

export default Footer