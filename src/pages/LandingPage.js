import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <main class="pr-90 index-page">
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
                    If time be of all things the most precious, wasting time
                    must be the greatest prodigality.
                  </h1>
                  <h6>Benjamin Franklin </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid hero-container">
            <div class="row hero-content">
              <div class="col-12 hero-content-item p-0">
                <div class="img-placeholder-container wow">
                  <div class="full-bg main-bg"></div>
                  <img
                    src="images/index-main-img.jpg"
                    alt="KAX"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="txt-img-section kax-lifestyle mb-200">
          <div class="container txt-img-container">
            <div class="row txt-img-content">
              <div class="col-12 txt-content">
                <div class="img-holder order-md-2">
                  <div class="img-placeholder-container wow">
                    <div class="full-bg main-bg"></div>
                    <img
                      src="images/index-kax-life-style-img.jpg"
                      alt="What is KAX Lifestyle?"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="txt-content-wrap wow fadeIn">
                  <div class="heading-content">
                    <h2 class="txt-underline">What is KAX Lifestyle?</h2>
                  </div>
                  <p>
                    Sed mollis rhoncus facilisis. Ut at mauris vel tellus
                    molestie condimentum ac non ipsum. Suspendisse pretium
                    ultricies orci id commodo.
                  </p>
                  <div class="link-holder">
                    <Link to="/about-us" class="hover-underline">
                      <span>Read more</span>
                      <img
                        src="images/explore-arrow-icon.png"
                        alt="Kax Lifestyle"
                        class="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="big-img-txt-section mb-200">
          <div class="container w-1400 big-img-txt-container mr-0">
            <div class="row big-img-txt-content">
              <div class="col-12 big-img-txt-item">
                <div class="img-holder wow fadeIn">
                  <img
                    src="images/index-kyle-maestro-img.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="txt-holder wow fadeIn" data-wow-delay=".5s">
                  <div class="heading-holder">
                    <h3 class="txt-underline">
                      Kyle Seltzer <br />
                      Manifesto
                    </h3>
                  </div>
                  <p>
                    A holiday destination should not be based on a series of
                    ticks on an itinerary, there’s the nature, history, art,
                    culture and character - elements that go to create a
                    complete experience.
                  </p>
                  <div class="link-holder">
                    <Link to="/kyle" class="hover-underline">
                      <span>Read more</span>
                      <img
                        src="images/explore-arrow-icon.png"
                        alt="Kax Lifestyle"
                        class="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="news-group-section pl-90">
          <div class="container w-1400">
            <div class="row news-group-content">
              <div class="heading-holder mb-70">
                <h2 class="txt-underline wow fadeIn">
                  Latest <br />
                  diary notes
                </h2>
              </div>
            </div>
          </div>
          <div class="container news-group-container">
            <div class="row news-group-content grid mb-50">
              <div class="col-6 grid-item wow fadeIn">
                <a href="news-full.php" class="news-group-item">
                  <div class="img-holder">
                    <div class="hover-content">
                      <div class="link-holder">
                        <div class="link-btn hover-underline">
                          <span>Read article</span>
                          <img
                            src="images/explore-arrow-main-color-icon.png"
                            alt="Kax diary"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="images/index-blog-full-img-01.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="txt-content">
                    <h4>Destinations</h4>
                    <h3>
                      Islas Secas: <br />A Transcendent Destination
                    </h3>
                  </div>
                </a>
              </div>
              <div class="col-6 grid-item wow fadeIn">
                <a href="news-full.php" class="news-group-item">
                  <div class="img-holder">
                    <div class="hover-content">
                      <div class="link-holder">
                        <div class="link-btn hover-underline">
                          <span>Read article</span>
                          <img
                            src="images/explore-arrow-main-color-icon.png"
                            alt="Kax diary"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="images/index-blog-full-img-02.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="txt-content">
                    <h4>Inspiration</h4>
                    <h3>
                      Nullam ante neque, gravida id lacus et, gravida ultricies
                      neque
                    </h3>
                  </div>
                </a>
              </div>
              <div class="col-6 grid-item wow fadeIn">
                <a href="news-full.php" class="news-group-item">
                  <div class="img-holder">
                    <div class="hover-content">
                      <div class="link-holder">
                        <div class="link-btn hover-underline">
                          <span>Read article</span>
                          <img
                            src="images/explore-arrow-main-color-icon.png"
                            alt="Kax diary"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="images/index-blog-full-img-03.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="txt-content">
                    <h4>News</h4>
                    <h3>Sed eget iaculis nisi</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="row wow fadeIn">
              <div class="col-12 mb-100">
                <a
                  href="blog-group.php"
                  class="link-holder justify-content-center"
                >
                  <div class="link-btn hover-underline">
                    <span>Explore complete diary</span>
                    <img
                      src="images/explore-arrow-icon.png"
                      alt="Explore complete diary"
                      class="img-fluid"
                    />
                  </div>
                </a>
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

export default LandingPage;
