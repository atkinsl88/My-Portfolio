import React from 'react'

import Navbardrk from '../common/Navbardrk'
import Title from './modules/Title'
import Hero from './modules/Hero'
import Skills from './modules/Skills'
import Txtimg from './modules/Txtimg'
import Imgtxt from './modules/Imgtxt'
import Txtimg2 from './modules/Txtimg2'
import Summary from './modules/Summary'
import Footerdrk from '../common/Footerdrk'


const Home = () => {

  return (
    <section>
      <Navbardrk />
      <Title />
      <Hero />
      <Skills />
      <Txtimg />
      <Imgtxt />
      <Txtimg2 />
      <Summary />
      <Footerdrk />
    </section>
  )

}

export default Home