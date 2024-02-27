// SearchBox.js
import React from 'react';

function SearchBox({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <div className="cancel-btn" onClick={onClose}>X</div>
    </div>
  );
}

export default SearchBox;
