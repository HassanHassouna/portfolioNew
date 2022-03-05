import React from "react"
import Typed from "react-typed"
import CTA from "./CTA"
import ME from "../../assets/mee.png"
import HeaderSocials from "./HeaderSocials"
import "./header.css"
const Header = () => {
  return (
    <header>
      <div className="header__container container">
        <h5>Hello I'm</h5>
        <h1>Hassan Hassouna</h1>
        <h5 className="text-light">
          <Typed
            className="typed_text"
            strings={["Full Stack Developer", "Web Design", "Web Development"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down{" "}
        </a>
      </div>
    </header>
  )
}

export default Header
