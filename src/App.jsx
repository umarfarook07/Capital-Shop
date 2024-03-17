// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Menu from "./Components/Home/Menu/Menu";
import Footer from './Components/Footer/Footer';
import Login from './Components/Registration/Login';
import Signup from './Components/Registration/Signup';
import ForgotPassword from './Components/Registration/ForgotPassword';
import Cart from './Components/Cart/Cart';
import Collections from './Components/Collections/Collections';
import "./Styles/reset.css";
import "./Styles/responsive.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
