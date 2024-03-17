import "./Styles/reset.css";
import "./Styles/responsive.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Menu from "./Components/Home/Menu/Menu.jsx";
import Footer from './Components/Footer/Footer.jsx';
import Login from './Components/Registration/Login.jsx';
import Signup from './Components/Registration/Signup.jsx';
import ForgotPassword from './Components/Registration/ForgotPassword.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Collections from './Components/Collections/Collections.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forgot-password' element ={ <ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
