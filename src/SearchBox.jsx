// SearchBox.js
import React from 'react';

function SearchBox({ show }) {
  if (!show) {
    return null;
  }

  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBox;
