import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Home from './Home/Home.jsx';
import "./Styles/responsive.css";
import "./Styles/reset.css";

// Create a browser router instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // You can add more routes here
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;