import { useState } from "react";
import LogoImage from "./logos/logo.webp";
import "./Header.css";
import "./responsive.css";
import "./reset.css";
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
        <img className="logo-img" src={LogoImage} alt="Logo"></img>
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
          <a
            href="/User-registration-form/login.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <i className="bx bxs-user"></i>
            </button>
          </a>
        </div>

        <div className="cart-btn">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bx bxs-cart"></i>
            </button>
          </a>
        </div>
      </nav>
      <SearchBox show={showSearch} />
    </header>
  );
}

export default Header;
