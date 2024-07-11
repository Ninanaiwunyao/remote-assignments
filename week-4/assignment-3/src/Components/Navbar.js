import React from "react";

const Navbar = ({ showMenu, toggleMenu }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <p>Website Title / Logo</p>
      </div>
      <ul className="menu">
        <li><a href="#">item1</a></li>
        <li><a href="#">item2</a></li>
        <li><a href="#">item3</a></li>
        <li><a href="#">item4</a></li>
      </ul>
      {!showMenu && (
        <div className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </div>
      )}
    </nav>
  );
};

export default Navbar;
