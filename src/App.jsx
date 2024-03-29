import "./Styles/reset.css";
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
import AddProductForm from './Components/Collections/AddProductForm';
import MensCollection from './Components/Collections/MensCollection';
import { WomensCollection } from "./Components/Collections/WomensCollection";
import { BabyCollection } from "./Components/Collections/BabyCollection";

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
        <Route path="/MensCollection" element={<Collections />} />
        <Route path="/WomensCollection" element={<Collections />} />
        <Route path="/BabyCollection" element={<Collections />} />
        <Route path="*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
