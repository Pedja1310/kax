import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  // will console.log email(no backend service)
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <footer className="footer-section">
      <div className="container-fluid footer-container wow fadeIn">
        <div className="row footer-content">
          <div className="col footer-content-item footer-social-content mw-600">
            <div className="heading-holder">
              <h3>Follow us:</h3>
            </div>
            <div className="links-holder">
              <Link target="_blank" className="txt-underline">
                Instagram
              </Link>
              <Link target="_blank" className="txt-underline">
                LinkedIn
              </Link>
              <Link target="_blank" className="txt-underline">
                YouTube
              </Link>
            </div>
            <div className="logo-holder">
              <Link to="/">
                <img
                  src="images/footer-logo.png"
                  alt="KAX"
                  className="img-fluid"
                />
              </Link>
              <p>© 2022 KAX Holding LLC.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
          <div className="col footer-content-item footer-newsletter-content">
            <div className="heading-holder">
              <h3 className="txt-underline">Get more travel inspiration</h3>
            </div>
            <div className="txt-holder">
              <p className="mw-290 text-align-justify">
                Join our newsletter for insirational contents about magical
                location and possibilites around the world.
              </p>
              <div className="newsletter-holder">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="newsletter-form"
                  id="newsletter_form"
                >
                  <input
                    type="text"
                    className="custom-input"
                    name="email"
                    placeholder="Enter email address"
                    onChange={handleEmailInput}
                  />
                  <button className="btn hover-underline" type="submit">
                    Join
                  </button>
                </form>
              </div>
            </div>
            <div className="row links-holder">
              <ul className="col-3">
                <li>
                  <h3>
                    <Link className="hover-underline" to="/about-us">
                      KAX World
                    </Link>
                  </h3>
                </li>
                <li>
                  <Link className="hover-underline" to="/default-page">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link className="hover-underline" to="/default-page">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              <ul className="col-3">
                <li>
                  <h3>
                    <Link className="hover-underline" to="/endorsment">
                      Endorsement
                    </Link>
                  </h3>
                </li>
                <li>
                  <Link className="hover-underline" to="/default-page">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link className="hover-underline" to="/default-page">
                    Cancellation policy
                  </Link>
                </li>
              </ul>
              <ul className="col-3">
                <li>
                  <h3>
                    <Link className="hover-underline" to="/start-a-journey">
                      Start A Journey
                    </Link>
                  </h3>
                </li>
                <li>
                  <Link className="hover-underline" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="col-3">
                <li>
                  <h3>
                    <Link className="hover-underline" to="/news-group">
                      Diary
                    </Link>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
