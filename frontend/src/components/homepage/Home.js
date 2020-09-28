import React from 'react'

import Navbar from '../common/Navbar'
import Title from './modules/Title'
import Hero from './modules/Hero'
import Featured from './modules/Featured'
import Worked from './modules/Worked'
import Footer from '../common/Footer'


const Home = () => {

  return (
    <section>
      <Navbar />
      <Title />
      <Hero />
      <Featured />
      <Worked />
      <Footer />
    </section>
  )

}

export default Home