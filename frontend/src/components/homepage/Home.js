import React from 'react'

import Navbar from '../common/Navbar'
import Title from './modules/Title'
import Hero from './modules/Hero'
import Featured from './modules/Featured'
import Worked from './modules/Worked'
import Other from './modules/Other'
import Footerdrk from '../common/Footerdrk'


const Home = () => {

  return (
    <section>
      <Navbar />
      <Title />
      <Hero />
      <Featured />
      <Worked />
      <Other />
      <Footerdrk />
    </section>
  )

}

export default Home