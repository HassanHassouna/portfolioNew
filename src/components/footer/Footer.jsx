import React from "react"
import "./footer.css"
import { BsLinkedin, BsGithub } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hassouna
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/hassan-hassouna-junior-full-stack-developer/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/hhasona" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Hassan Hassouna. All rights reserved</small>
      </div>
    </footer>
  )
}
export default Footer
