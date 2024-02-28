import React, { useState } from 'react';
import './SearchBox.css';
const SearchBox = () => {
  const [isVisible, setIsVisible] = useState(true);
  const closeSearchBox = () => {
    setIsVisible(false);
  }
  return isVisible ? (
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <div className="cancel-btn" onClick={closeSearchBox}>X</div>
    </div>
  ) : null;
}

export default SearchBox;