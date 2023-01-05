import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar opened-menu">
      <Link
        class="navbar-brand logo-holder wow fadeInDown"
        data-wow-delay=".5s"
        to="/"
      >
        <img src="images/logo.svg" height="45" alt="" class="img-fluid" />
      </Link>
      <button class="navbar-toggler">
        <img src="images/mobile-menu-icon.png" alt="menu" class="img-fluid" />
      </button>
      <div class="collapse navbar-collapse open">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item wow fadeInDown" data-wow-delay=".5s">
            <Link class="nav-link transition-page pr-0 opacity-hover" to="/">
              <img src="images/home-icon.png" alt="" class="img-fluid" />
              <span class="mobile">Home</span>
            </Link>
          </li>
          <li class="nav-item wow fadeInDown" data-wow-delay=".6s">
            <Link
              class="nav-link transition-page hover-underline"
              to="/about-us"
            >
              KAX World
            </Link>
          </li>
          <li class="nav-item wow fadeInDown" data-wow-delay=".7s">
            <Link
              class="nav-link transition-page hover-underline"
              to="/endorsement"
            >
              Endorsement
            </Link>
          </li>
          <li class="nav-item wow fadeInDown" data-wow-delay=".8s">
            <Link
              class="nav-link transition-page hover-underline"
              to="/start-a-journey"
            >
              Start a Journey
            </Link>
          </li>
          <li class="nav-item wow fadeInDown" data-wow-delay=".9s">
            <Link
              class="nav-link transition-page hover-underline"
              to="/news-group"
            >
              Diary
            </Link>
          </li>
          <li class="nav-item wow fadeInDown" data-wow-delay="1s">
            <Link
              class="nav-link transition-page hover-underline"
              to="/contact-us"
            >
              Contact
            </Link>
          </li>
          <li class="nav-item wow fadeInDown" data-wow-delay="1.1s">
            <a class="nav-link opacity-hover" href="javascript:;">
              <img src="images/login-icon.png" alt="" class="img-fluid" />
              <span class="mobile">Account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
