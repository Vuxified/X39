import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lifewave from "../images/test.png";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScrollToTestimonials = () => {
    const testimonialsSection = document.getElementById("testimonials");
    testimonialsSection.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={lifewave} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/Homepage" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <span
              className="nav-links"
              onClick={handleScrollToTestimonials}
            >
              Testimonials
            </span>
          </li> */}
          <li className="nav-item">
            <Link
              to="https://lifewave.com/kristinasimms"
              target="_blank"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Buy Now
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="https://thisisitinfo.com/"
              target="_blank"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Learn More
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
