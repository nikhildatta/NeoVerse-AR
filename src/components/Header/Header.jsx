import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const navigationLinks = [
    { label: "Home", Path: "/" },
    { label: "About", Path: "/about" },
    { label: "Feedback", Path: "/feedback" },
    { label: "SignIn", Path: "/sign-in" },
  ];
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);
  const handleItemClick = () => {
    setShowMobileSidebar(true);
  };
  return (
    <header>
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
          <h3>
            <Link
              to="/"
              onClick={() => showMobileSidebar && setShowMobileSidebar(false)}
              className="project-title"
            >
              NeoVerse AR lite
            </Link>
          </h3>
          <div
            className={`mobile-menu-icon ${!showMobileSidebar ? "active" : ""}`}
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            {Array.from({ length: 2 + showMobileSidebar }, (_, i) => (
              <div
                key={i}
                className={
                  i === 0 ? "firstbar" : i === 1 ? "secondbar" : "lastbar"
                }
              />
            ))}
            {/* If the condition is true, only the first, second, and last div elements will be rendered. */}
          </div>
        </div>
        {/* Desktop Navigation */}
      </nav>
      <ul className={`desktop-nav ${showMobileSidebar ? "" : "show"}`}>
        {navigationLinks.map((items, key) => {
          return (
            <li key={key} onClick={handleItemClick}>
              <Link to={items.Path}>{items.label}</Link>
            </li>
          );
          /* activeStyle={{ color: "blue", textDecoration: "underline" }} */
        })}
      </ul>
    </header>
  );
};

export default Header;
