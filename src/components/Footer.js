import React from "react";

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container-fluid footer-container wow fadeIn">
        <div class="row footer-content">
          <div class="col footer-content-item footer-social-content mw-600">
            <div class="heading-holder">
              <h3>Follow us:</h3>
            </div>
            <div class="links-holder">
              <a target="_blank" href="javascript:;" class="txt-underline">
                Instagram
              </a>
              <a target="_blank" href="javascript:;" class="txt-underline">
                LinkedIn
              </a>
              <a target="_blank" href="javascript:;" class="txt-underline">
                YouTube
              </a>
            </div>
            <div class="logo-holder">
              <a href="/">
                <img src="images/footer-logo.png" alt="KAX" class="img-fluid" />
              </a>
              <p>© 2022 KAX Holding LLC.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
          <div class="col footer-content-item footer-newsletter-content">
            <div class="heading-holder">
              <h3 class="txt-underline">Get more travel inspiration</h3>
            </div>
            <div class="txt-holder">
              <p class="mw-290 text-align-justify">
                Join our newsletter for insirational contents about magical
                location and possibilites around the world.
              </p>
              <div class="newsletter-holder">
                <form
                  action="javascript;;"
                  method="post"
                  class="newsletter-form"
                  id="newsletter_form"
                >
                  <input
                    type="text"
                    class="custom-input"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <button class="btn hover-underline" type="submit">
                    Join
                  </button>
                </form>
              </div>
            </div>
            <div class="row links-holder">
              <ul class="col-3">
                <li>
                  <h3>
                    <a class="hover-underline" href="about-us.php">
                      KAX World
                    </a>
                  </h3>
                </li>
                <li>
                  <a class="hover-underline" href="default-page.php">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a class="hover-underline" href="default-page.php">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <ul class="col-3">
                <li>
                  <h3>
                    <a class="hover-underline" href="endorsement.php">
                      Endorsement
                    </a>
                  </h3>
                </li>
                <li>
                  <a class="hover-underline" href="default-page.php">
                    Cookies
                  </a>
                </li>
                <li>
                  <a class="hover-underline" href="default-page.php">
                    Cancellation policy
                  </a>
                </li>
              </ul>
              <ul class="col-3">
                <li>
                  <h3>
                    <a class="hover-underline" href="start-a-journey.php">
                      Start a Journey
                    </a>
                  </h3>
                </li>
                <li>
                  <a class="hover-underline" href="contact-us.php">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul class="col-3">
                <li>
                  <h3>
                    <a class="hover-underline" href="news-group.php">
                      Diary
                    </a>
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
