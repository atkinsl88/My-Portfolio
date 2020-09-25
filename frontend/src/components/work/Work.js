import React from 'react'

import Navbar from '../common/Navbar'
import Title from './modules/Title'
import Titletxt from './modules/Titletxt'
import Smallindex from './modules/Smallindex'
import Largeindex from './modules/Largeindex'
import Footerdrk from '../common/Footerdrk'


const Home = () => {

  return (
    <section>
      <Navbar />
      <Title />
      <Titletxt />
      <Largeindex />
      <Smallindex />
      <Footerdrk />
    </section>
  )

}

export default Home