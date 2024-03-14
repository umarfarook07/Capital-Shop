import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
