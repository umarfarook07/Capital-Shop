import Header from './Header/Header.jsx';
import Menu from './Menu/Menu.jsx';
import HeroSection from './Hero-Section/HeroSection.jsx';
import Footer from './Footer/Footer.jsx';
import "./Styles/responsive.css";
import SwiperMenu from './Swiper/SwiperMenu.jsx';
import "./Styles/reset.css";
import BenefitsSection from './Benefits-Section/BenefitsSection.jsx'
import NewsletterSubscription from './NewsletterSubscription/NewsletterSubscription.jsx'

function App() {
  return (
    <>
      <Header />
      <Menu />
      <SwiperMenu />
      <HeroSection />
      <BenefitsSection />
      <NewsletterSubscription />
      <Footer />
    </>
  );
}

export default App
