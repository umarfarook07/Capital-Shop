import { useState } from 'react'
import Header from './Header.jsx'
import "./responsive.css";
import "./reset.css";
import Menu from './Menu.jsx';
import './MenuStyles.css';
import Footer from './Footer/Footer.jsx';
function App() {
  
  return (
    <>
    <Header />
    <Menu />
    <Footer />
    </>
  )
}

export default App
