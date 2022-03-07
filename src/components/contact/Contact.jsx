import React, { useRef } from "react"
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_0j2ma3b",
      "template_ID",
      form.current,
      "user_x9TAIhS4ZaZpYeGWrxTT9"
    )
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hhasona@gmail.com</h5>
            <a target="_blank" href="mailto:hhasona@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+972533332942</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+972533332942"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} action="">
          <input
            type="text"
            placeholder="Your Full Name"
            required
            name="name"
          />
          <input type="email" placeholder="Your Email" required name="email" />
          <textarea
            placeholder="Your Message"
            required
            name="message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
