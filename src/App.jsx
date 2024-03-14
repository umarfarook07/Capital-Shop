import React from 'react';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Login from './Components/Registration/Login.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Collections from './Components/Collections/Collections.jsx';
import "./Styles/reset.css";
import "./Styles/responsive.css";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
