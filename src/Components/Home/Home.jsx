import React from 'react'

import Menu from './Menu/Menu'
import BenefitsSection from './Benefits-Section/BenefitsSection'
import SwiperMenu from './Swiper/SwiperMenu'
import HeroSection from './Hero-Section/HeroSection'

const Home = () => {
  return (
    <>
    <Menu />
    <SwiperMenu />
    <HeroSection />
    <BenefitsSection />
    </>
  )
}

export default Home
