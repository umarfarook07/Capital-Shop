import React from 'react'; // Ensure React is imported if you're using a version before React 17 or not using the new JSX transform
import './MenuRow.css';


function MenuRow() {
    return (
        <div className="menu-row">
            <div className="menu-div">
                <button className="menu-btn" id="js-menu-btn">
                    MENU<i className='bx bx-menu'></i>
                </button>
            </div>
            <div className="menu-list" id="js-menu-list">
            </div>
        </div>
    );
}

export default MenuRow;
