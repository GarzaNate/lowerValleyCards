import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductSection'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <ProductCard />
      {/* <Footer /> */}
    </div>
  )
}

export default Home