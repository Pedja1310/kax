import React from "react";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";

const KylePage = () => {
  return (
    <>
      <main className="pr-90 kyle-page">
        <section className="page-submenu-section">
          <div className="container page-submenu-container">
            <div className="row page-submenu-content">
              <div className="col-12 page-submenu-items">
                <Link
                  className="page-submenu-item wow fadeIn"
                  data-wow-delay="1.3s"
                  to="/"
                >
                  KAX World /
                </Link>
                <Link
                  className="page-submenu-item transition-page hover-underline wow fadeIn"
                  data-wow-delay="1.4s"
                  to="/about-us"
                >
                  About us
                </Link>
                <Link
                  className="page-submenu-item transition-page hover-underline active wow fadeIn"
                  data-wow-delay="1.5s"
                  to="/kyle"
                >
                  Kyle Seltzer
                </Link>
                <Link
                  className="page-submenu-item transition-page hover-underline wow fadeIn"
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
          className="main-content-section wow fadeIn"
          data-wow-delay="1.5s"
          data-wow-duration="1s"
        >
          <div className="container heading-container">
            <div className="row heading-content">
              <div className="col-12 heading-content-item">
                <div className="heading-holder mb-100">
                  <h1 className="txt-underline">
                    Kyle Seltzer - Journeys
                    <br /> embodied in full-color
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid hero-container mb-90">
            <div className="row hero-content">
              <div className="col-12 hero-content-item p-0">
                <div className="img-placeholder-container wow">
                  <div className="full-bg main-bg"></div>
                  <img
                    src="images/kyle-main-img.jpg"
                    alt="Kyle"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container txt-editor-container mb-200 wow fadeIn">
            <div className="row txt-editor-content">
              <div className="col-12 txt-editor-item mw-600 m-auto align-justify">
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
                  surroundings while enjoying first-className facilities,
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
            </div>
          </div>
        </section>

        <section className="txt-img-section manifesto">
          <div className="container-fluid txt-img-container">
            <div className="row txt-img-content">
              <div className="col-12 txt-content">
                <div className="txt-content-wrap wow fadeIn">
                  <div className="heading-content">
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
                    natural surroundings while enjoying first-className
                    facilities, activities and cuisine.
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
                <div className="img-holder">
                  <div className="img-placeholder-container wow">
                    <div className="full-bg main-bg"></div>
                    <img
                      src="images/kyle-manifesto-main-img.jpg"
                      alt="Kyle’s Manifesto"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollDown />
    </>
  );
};

export default KylePage;
