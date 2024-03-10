import Header from './Header/Header.jsx';
import Menu from './Menu/Menu.jsx';
import HeroSection from './Hero-Section/HeroSection.jsx';
import Footer from './Footer/Footer.jsx';
import "./Styles/responsive.css";
import SwiperMenu from './Swiper/SwiperMenu.jsx';
import "./Styles/reset.css";
import BenefitsSection from './BenefitsSection.jsx'
function App() {
  return (
    <>
      <Header />
      <Menu />
      <SwiperMenu />
      <HeroSection />
      <BenefitsSection />
      <Footer />
    </>
  );
}

export default App
