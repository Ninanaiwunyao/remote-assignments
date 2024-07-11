import React from "react";

const MobileMenu = ({ showMenu, toggleMenu }) => {
  return (
    <nav className={`mobile-menu ${showMenu ? "show" : ""}`}>
      {showMenu && (
        <div className="close-btn" onClick={toggleMenu}>
          &times;
        </div>
      )}
      <ul className="mobile-list">
        <li><a href="#">item1</a></li>
        <li><a href="#">item2</a></li>
        <li><a href="#">item3</a></li>
        <li><a href="#">item4</a></li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
