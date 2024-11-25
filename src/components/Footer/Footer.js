import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/"> Home </Link>
          <Link
            to="/about"
          >
            About
          </Link>
          <Link to="/"> FAQ </Link>
          <Link to="/"> Services </Link>
        </div>

        <div className="contact-content">
          <Link to="/feedback"> Feedback </Link>
        </div>
      </div>

      <div class="action">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input type="submit" name="submit" value="Submit" required></input>
        
        </form>
      </div>
      <div className="last">
        <p>&#169; {currentYear} AR-Website | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
