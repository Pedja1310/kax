import React from "react";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";

const KeyPeoplePage = () => {
  return (
    <>
      <main className="pr-90 key-people-page">
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
                  className="page-submenu-item transition-page hover-underline wow fadeIn"
                  data-wow-delay="1.5s"
                  to="/kyle"
                >
                  Kyle Seltzer
                </Link>
                <Link
                  className="page-submenu-item transition-page hover-underline active wow fadeIn"
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
                  <h1 className="txt-underline">Key People</h1>
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
                    src="images/key-people-main-img.jpg"
                    alt="Key People"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="txt-img-section key-people">
          <div className="container-fluid txt-img-container">
            <div className="row txt-img-content">
              <div className="col-7 txt-content second-bg-color">
                <div className="txt-content-wrap wow fadeIn">
                  <div className="heading-content">
                    <h4>
                      Curabitur est nisi, pellentesque eu augue vitae, aliquam
                      consequat elit.
                    </h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque dictum ex velit, eget fermentum ligula egestas
                    non. Maecenas et mollis diam. Proin eu ligula porta, laoreet
                    nisi eget, sagittis metus. Etiam ultricies sollicitudin
                    ipsum in porta. Duis a elementum neque. In hac habitasse
                    platea dictumst. Quisque maximus urna vel tempor lacinia.
                    Etiam egestas sed nisi et dictum. Sed mollis rhoncus
                    facilisis. Ut at mauris vel tellus molestie condimentum ac
                    non ipsum. Suspendisse pretium ultricies orci id commodo.
                    Nullam viverra quis tellus vitae imperdiet.
                  </p>
                  <p>
                    Nam interdum neque eu pellentesque fringilla. Nunc posuere
                    risus sit amet nisl consectetur finibus. Nam suscipit, purus
                    sed dapibus convallis, purus massa elementum risus, et
                    placerat leo dui ac lectus. Pellentesque rhoncus diam et
                    venenatis interdum.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slider-section key-people-slider ml--90 wow fadeIn">
          <div className="container-fluid slider-container">
            <div className="row slider-content">
              <div className="col-12 slider-item p-0">
                <div className="swiper key-people-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="img-holder">
                        <img
                          src="images/key-people-slider-img-01.jpg"
                          alt="Key People"
                          className="img-fluid"
                        />
                      </div>
                      <div className="txt-holder">
                        <h3 className="txt-underline">Daniela Ratner</h3>
                        <h4>Travel Agent</h4>
                        <p>Americas, Familiy Travel, Food & Wine</p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="img-holder">
                        <img
                          src="images/key-people-slider-img-02.jpg"
                          alt="Key People"
                          className="img-fluid"
                        />
                      </div>
                      <div className="txt-holder">
                        <h3 className="txt-underline">Daniela Ratner5</h3>
                        <h4>Travel Agent</h4>
                        <p>Americas, Familiy Travel, Food & Wine</p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="img-holder">
                        <img
                          src="images/key-people-slider-img-03.jpg"
                          alt="Key People"
                          className="img-fluid"
                        />
                      </div>
                      <div className="txt-holder">
                        <h3 className="txt-underline">Daniela Ratner6</h3>
                        <h4>Travel Agent</h4>
                        <p>Americas, Familiy Travel, Food & Wine</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
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

export default KeyPeoplePage;
