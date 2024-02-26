import React, { useState } from 'react';


const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <section className="menu-row">
      <div className="menu-div">
        <button className="menu-btn" onClick={toggleMenu}>
          MENU<i className='bx bx-menu'></i>
        </button>
      </div>
      {isMenuVisible && (
        <ul className="menu-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Baby Collection</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
      )}
    </section>
  );
};

export default Menu;