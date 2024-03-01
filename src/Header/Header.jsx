import { useState } from "react";
import LogoImage from "/src/logos/logo.webp";
import "./Header.css";
import MenuNav from "./MenuNav";
import SearchBox from "./SearchBox";
import LoginForm from "../User-registration-form/login.html";

function Header() {
  const [showSearch, setShowSearch] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header>
      <div className="product-logo">
        <img className="logo-img" src={LogoImage} alt="Logo" />
      </div>

      <MenuNav />

      <nav className="nav-bar">
        <div className="search-btn-div">
          <button
            className="search-btn"
            id="js-search-btn"
            onClick={toggleSearch}
          >
            <i className="bx bx-search"></i>
          </button>
        </div>

        <div className="user-btn">
          <button onClick={() => setShowLoginForm(true)}>
            <i className="bx bxs-user"></i>
          </button>
          {showLoginForm && (
            <div style={{ position: "absolute", zIndex: 1 }}>
              <LoginForm />
            </div>
          )}
        </div>

        <div className="cart-btn">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bx bxs-cart"></i>
            </button>
          </a>
        </div>
      </nav>

      <SearchBox show={showSearch} onClose={toggleSearch} />
    </header>
  );
}

export default Header;