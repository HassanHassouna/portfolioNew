import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
