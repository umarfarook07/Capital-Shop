import React from 'react';
import Menu from './Menu/Menu.jsx';
import SwiperMenu from './Swiper/SwiperMenu.jsx';
import HeroSection from './Hero-Section/HeroSection.jsx';
import BenefitsSection from './Benefits-Section/BenefitsSection.jsx';

function Home() {
  return (
    <div>
      <Menu />
      <SwiperMenu />
      <HeroSection />
      <BenefitsSection />
    </div>
  );
}

export default Home;