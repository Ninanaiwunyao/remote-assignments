import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MobileMenu from "./Components/MobileMenu";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [boxDisplay, setBoxDisplay] = useState("none");

  useEffect(() => {
    const handleResize = () => {
      if (boxDisplay !== "none") {
        if (window.innerWidth < 500) {
          setBoxDisplay("flex");
        } else {
          setBoxDisplay("grid");
        }
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [boxDisplay]);

  const handleCTAClick = () => {
    setBoxDisplay("grid");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <Navbar showMenu={showMenu} toggleMenu={toggleMenu} />
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Header />
      <MainContent handleCTAClick={handleCTAClick} boxDisplay={boxDisplay} />
    </div>
  );
}

export default App;
