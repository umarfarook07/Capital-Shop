// Header.jsx

import { useState } from "react";
import LogoImage from "./logos/logo.webp";
import "./Header.css";
import MenuNav from "./MenuNav";
import SearchBox from "./SearchBox";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

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
          <button aria-label="Search" className="search-btn" onClick={toggleSearch}>
            <i className="bx bx-search"></i>
          </button>
        </div>

        <div className="user-btn">
            <button>
              <i className="bx bxs-user"></i>
            </button>
        </div>

        <div className="cart-btn">
            <button>
              <i className="bx bxs-cart"></i>
            </button>
        </div>
      </nav>

      <SearchBox show={showSearch} onClose={toggleSearch} />
    </header>
  );
}

export default Header;
