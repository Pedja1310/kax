import React from "react";
import { Link } from "react-router-dom";

const KylePage = () => {
  return (
    <>
      <main class="pr-90 kyle-page">
        <section class="page-submenu-section">
          <div class="container page-submenu-container">
            <div class="row page-submenu-content">
              <div class="col-12 page-submenu-items">
                <Link
                  class="page-submenu-item wow fadeIn"
                  data-wow-delay="1.3s"
                  to="/"
                >
                  KAX World /
                </Link>
                <Link
                  class="page-submenu-item transition-page hover-underline wow fadeIn"
                  data-wow-delay="1.4s"
                  to="/about-us"
                >
                  About us
                </Link>
                <Link
                  class="page-submenu-item transition-page hover-underline active wow fadeIn"
                  data-wow-delay="1.5s"
                  to="/kyle"
                >
                  Kyle Seltzer
                </Link>
                <Link
                  class="page-submenu-item transition-page hover-underline wow fadeIn"
                  data-wow-delay="1.6s"
                  to="/key-people"
                >
                  Key people
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          class="main-content-section wow fadeIn"
          data-wow-delay="1.5s"
          data-wow-duration="1s"
        >
          <div class="container heading-container">
            <div class="row heading-content">
              <div class="col-12 heading-content-item">
                <div class="heading-holder mb-100">
                  <h1 class="txt-underline">
                    Kyle Seltzer - Journeys
                    <br /> embodied in full-color
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid hero-container mb-90">
            <div class="row hero-content">
              <div class="col-12 hero-content-item p-0">
                <div class="img-placeholder-container wow">
                  <div class="full-bg main-bg"></div>
                  <img
                    src="images/kyle-main-img.jpg"
                    alt="Kyle"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container txt-editor-container mb-200 wow fadeIn">
            <div class="row txt-editor-content">
              <div class="col-12 txt-editor-item mw-600 m-auto align-justify">
                <p>
                  From the beginning, and only using a white canvass with which
                  to depict the journey and destination, Kyle and his customer,
                  guided by a vision of subject and style, sketch the rudiments.
                </p>
                <p>
                  More vibrant or subtle shades, Kyle follows the customer’s
                  wishes while maybe suggesting more detail with an element,
                  more light and shade to another section.
                </p>
                <p>
                  Kyle likes to listen to and connect with the customer; only
                  then can there be a personal understanding. Preferences,
                  previous experiences and personal needs are elements that make
                  up a highly customized approach.
                </p>
                <p>
                  Committed to producing only bespoke travel experiences, Kyle
                  draws on his vast personal knowledge. Through his compulsion
                  to travel, he has observed and experienced many of the most
                  amazing holiday destinations across the globe; an Instinctive
                  wish to savor luxurious destinations set in natural
                  surroundings while enjoying first-class facilities, activities
                  and cuisine.
                </p>
                <p>
                  There are many elements that make up a truly memorable
                  vacation, each integral to the other and carefully forming a
                  faultless holiday scene which, by design, is unique and
                  exclusive to the client’s making.
                </p>
                <p>
                  The whole vacation experience becomes something besides the
                  parts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="txt-img-section manifesto">
          <div class="container-fluid txt-img-container">
            <div class="row txt-img-content">
              <div class="col-12 txt-content">
                <div class="txt-content-wrap wow fadeIn">
                  <div class="heading-content">
                    <h2>Kyle’s Manifesto</h2>
                  </div>
                  <p>
                    From the beginning, and only using a white canvass with
                    which to depict the journey and destination, Kyle and his
                    customer, guided by a vision of subject and style, sketch
                    the rudiments.
                  </p>
                  <p>
                    More vibrant or subtle shades, Kyle follows the customer’s
                    wishes while maybe suggesting more detail with an element,
                    more light and shade to another section.
                  </p>
                  <p>
                    Kyle likes to listen to and connect with the customer; only
                    then can there be a personal understanding. Preferences,
                    previous experiences and personal needs are elements that
                    make up a highly customized approach.
                  </p>
                  <p>
                    Committed to producing only bespoke travel experiences, Kyle
                    draws on his vast personal knowledge. Through his compulsion
                    to travel, he has observed and experienced many of the most
                    amazing holiday destinations across the globe; an
                    Instinctive wish to savor luxurious destinations set in
                    natural surroundings while enjoying first-class facilities,
                    activities and cuisine.
                  </p>
                  <p>
                    There are many elements that make up a truly memorable
                    vacation, each integral to the other and carefully forming a
                    faultless holiday scene which, by design, is unique and
                    exclusive to the client’s making.
                  </p>
                  <p>
                    The whole vacation experience becomes something besides the
                    parts.
                  </p>
                </div>
                <div class="img-holder">
                  <div class="img-placeholder-container wow">
                    <div class="full-bg main-bg"></div>
                    <img
                      src="images/kyle-manifesto-main-img.jpg"
                      alt="Kyle’s Manifesto"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div class="scroll-down-container">
        <span>Scroll down</span>
        <img
          src="images/scroll-down-icon.png"
          alt="Scroll down"
          class="img-fluid"
        />
      </div>
    </>
  );
};

export default KylePage;
