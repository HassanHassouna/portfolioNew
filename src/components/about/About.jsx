import React from "react"
import "./about.css"
import ME from "../../assets/me2.jpeg"
import { FaReact, FaNode } from "react-icons/fa"
import { SiPostgresql } from "react-icons/si"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaReact className="about__icon" />
              <h5>React.Js</h5>
            </article>
            <article className="about__card">
              <FaNode className="about__icon" />
              <h5>Node.Js</h5>
            </article>
            <article className="about__card">
              <SiPostgresql className="about__icon" />
              <h5>PostgreSQL</h5>
            </article>
          </div>

          <p>
            Hello! I am Hassan. I have finished recently a Full Stack Bootcamp
            and looking for my first position as a Full Stack Developer.
            Technologies I learned is MERN(MongoDB, Express, ReactJS and
            NodeJS). I create responsive websites that are displayed on all
            devices desktops and smartphones. Of course, before I begin
            developing any webapp, Landing Page, Business Website or E-commerce,
            I need to have a ready-made project layout (sketch). I’m ready to
            learn more everyday and looking for improve and show my skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
