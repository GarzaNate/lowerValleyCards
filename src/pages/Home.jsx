import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ProductCard from '../components/ProductSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <About /> */}
      <ProductCard />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home