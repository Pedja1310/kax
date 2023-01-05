import React from "react";
import { Link } from "react-router-dom";

const KeyPeoplePage = () => {
  return (
    <>
      <main class="pr-90 key-people-page">
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
                  class="page-submenu-item transition-page hover-underline wow fadeIn"
                  data-wow-delay="1.5s"
                  to="/kyle"
                >
                  Kyle Seltzer
                </Link>
                <Link
                  class="page-submenu-item transition-page hover-underline active wow fadeIn"
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
                  <h1 class="txt-underline">Key People</h1>
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
                    src="images/key-people-main-img.jpg"
                    alt="Key People"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="txt-img-section key-people">
          <div class="container-fluid txt-img-container">
            <div class="row txt-img-content">
              <div class="col-7 txt-content second-bg-color">
                <div class="txt-content-wrap wow fadeIn">
                  <div class="heading-content">
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

        <section class="slider-section key-people-slider ml--90 wow fadeIn">
          <div class="container-fluid slider-container">
            <div class="row slider-content">
              <div class="col-12 slider-item p-0">
                <div class="swiper key-people-slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="img-holder">
                        <img
                          src="images/key-people-slider-img-01.jpg"
                          alt="Key People"
                          class="img-fluid"
                        />
                      </div>
                      <div class="txt-holder">
                        <h3 class="txt-underline">Daniela Ratner</h3>
                        <h4>Travel Agent</h4>
                        <p>Americas, Familiy Travel, Food & Wine</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img-holder">
                        <img
                          src="images/key-people-slider-img-02.jpg"
                          alt="Key People"
                          class="img-fluid"
                        />
                      </div>
                      <div class="txt-holder">
                        <h3 class="txt-underline">Daniela Ratner5</h3>
                        <h4>Travel Agent</h4>
                        <p>Americas, Familiy Travel, Food & Wine</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img-holder">
                        <img
                          src="images/key-people-slider-img-03.jpg"
                          alt="Key People"
                          class="img-fluid"
                        />
                      </div>
                      <div class="txt-holder">
                        <h3 class="txt-underline">Daniela Ratner6</h3>
                        <h4>Travel Agent</h4>
                        <p>Americas, Familiy Travel, Food & Wine</p>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
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

export default KeyPeoplePage;
