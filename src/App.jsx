import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/title/title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus photos'/>
      <Campus/>
      <Title subTitle='TESTIOMONIALS' title='What Students Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
      </div>
    </div>
  )
}

export default App
