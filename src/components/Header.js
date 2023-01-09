import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className={`navbar ${!isOpen ? "" : "opened-menu"}`}>
      <Link
        className="navbar-brand logo-holder wow fadeInDown"
        data-wow-delay=".5s"
        to="/"
      >
        <img src="images/logo.svg" height="45" alt="" className="img-fluid" />
      </Link>
      <button className="navbar-toggler" onClick={toggleMenu}>
        <img
          src="images/mobile-menu-icon.png"
          alt="menu"
          className="img-fluid"
        />
      </button>
      <div className={`navbar-collapse ${!isOpen ? "collapse" : ""}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item wow fadeInDown" data-wow-delay=".5s">
            <Link
              className="nav-link transition-page pr-0 opacity-hover"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              <img src="images/home-icon.png" alt="" className="img-fluid" />
              <span className="mobile">Home</span>
            </Link>
          </li>
          <li className="nav-item wow fadeInDown" data-wow-delay=".6s">
            <Link
              className="nav-link transition-page hover-underline"
              to="/about-us"
              onClick={() => setIsOpen(false)}
            >
              KAX World
            </Link>
          </li>
          <li className="nav-item wow fadeInDown" data-wow-delay=".7s">
            <Link
              className="nav-link transition-page hover-underline"
              to="/endorsment"
              onClick={() => setIsOpen(false)}
            >
              Endorsement
            </Link>
          </li>
          <li className="nav-item wow fadeInDown" data-wow-delay=".8s">
            <Link
              className="nav-link transition-page hover-underline"
              to="/start-a-journey"
              onClick={() => setIsOpen(false)}
            >
              Start a Journey
            </Link>
          </li>
          <li className="nav-item wow fadeInDown" data-wow-delay=".9s">
            <Link
              className="nav-link transition-page hover-underline"
              to="/news-group"
              onClick={() => setIsOpen(false)}
            >
              Diary
            </Link>
          </li>
          <li className="nav-item wow fadeInDown" data-wow-delay="1s">
            <Link
              className="nav-link transition-page hover-underline"
              to="/contact-us"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item wow fadeInDown" data-wow-delay="1.1s">
            <Link className="nav-link opacity-hover" to="#">
              <img src="images/login-icon.png" alt="" className="img-fluid" />
              <span className="mobile">Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
