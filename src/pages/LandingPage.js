import React from "react";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";

const LandingPage = () => {
  return (
    <>
      <nav className="pr-90">
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
                    If time be of all things the most precious, wasting time
                    must be the greatest prodigality.
                  </h1>
                  <h6>Benjamin Franklin </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid hero-container">
            <div className="row hero-content">
              <div className="col-12 hero-content-item p-0">
                <div className="img-placeholder-container wow">
                  <div className="full-bg main-bg"></div>
                  <img
                    src="images/index-main-img.jpg"
                    alt="KAX"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="txt-img-section kax-lifestyle mb-200">
          <div className="container txt-img-container">
            <div className="row txt-img-content">
              <div className="col-12 txt-content">
                <div className="img-holder order-md-2">
                  <div className="img-placeholder-container wow">
                    <div className="full-bg main-bg"></div>
                    <img
                      src="images/index-kax-life-style-img.jpg"
                      alt="What is KAX Lifestyle?"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="txt-content-wrap">
                  <div className="heading-content">
                    <h2 className="txt-underline">What is KAX Lifestyle?</h2>
                  </div>
                  <p>
                    Sed mollis rhoncus facilisis. Ut at mauris vel tellus
                    molestie condimentum ac non ipsum. Suspendisse pretium
                    ultricies orci id commodo.
                  </p>
                  <div className="link-holder">
                    <Link to="/about-us" className="hover-underline">
                      <span>Read more</span>
                      <img
                        src="images/explore-arrow-icon.png"
                        alt="Kax Lifestyle"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="big-img-txt-section mb-200">
          <div className="container w-1400 big-img-txt-container mr-0">
            <div className="row big-img-txt-content">
              <div className="col-12 big-img-txt-item">
                <div className="img-holder wow fadeIn">
                  <img
                    src="images/index-kyle-maestro-img.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="txt-holder wow fadeIn" data-wow-delay=".5s">
                  <div className="heading-holder">
                    <h3 className="txt-underline">
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
                  <div className="link-holder">
                    <Link to="/kyle" className="hover-underline">
                      <span>Read more</span>
                      <img
                        src="images/explore-arrow-icon.png"
                        alt="Kax Lifestyle"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="news-group-section pl-90">
          <div className="container w-1400">
            <div className="row news-group-content">
              <div className="heading-holder mb-70">
                <h2 className="txt-underline wow fadeIn">
                  Latest <br />
                  diary notes
                </h2>
              </div>
            </div>
          </div>
          <div className="container news-group-container">
            <div className="row news-group-content grid mb-50">
              <div className="col-6 grid-item wow fadeIn">
                <Link to="/news-full" className="news-group-item">
                  <div className="img-holder">
                    <div className="hover-content">
                      <div className="link-holder">
                        <div className="link-btn hover-underline">
                          <span>Read article</span>
                          <img
                            src="images/explore-arrow-main-color-icon.png"
                            alt="Kax diary"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="images/index-blog-full-img-01.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="txt-content">
                    <h4>Destinations</h4>
                    <h3>
                      Islas Secas: <br />A Transcendent Destination
                    </h3>
                  </div>
                </Link>
              </div>
              <div className="col-6 grid-item wow fadeIn">
                <Link href="/news-full" className="news-group-item">
                  <div className="img-holder">
                    <div className="hover-content">
                      <div className="link-holder">
                        <div className="link-btn hover-underline">
                          <span>Read article</span>
                          <img
                            src="images/explore-arrow-main-color-icon.png"
                            alt="Kax diary"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="images/index-blog-full-img-02.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="txt-content">
                    <h4>Inspiration</h4>
                    <h3>
                      Nullam ante neque, gravida id lacus et, gravida ultricies
                      neque
                    </h3>
                  </div>
                </Link>
              </div>
              <div className="col-6 grid-item wow fadeIn">
                <Link href="/news-full.php" className="news-group-item">
                  <div className="img-holder">
                    <div className="hover-content">
                      <div className="link-holder">
                        <div className="link-btn hover-underline">
                          <span>Read article</span>
                          <img
                            src="images/explore-arrow-main-color-icon.png"
                            alt="Kax diary"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="images/index-blog-full-img-03.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="txt-content">
                    <h4>News</h4>
                    <h3>Sed eget iaculis nisi</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row wow fadeIn">
              <div className="col-12 mb-100">
                <Link
                  href="/blog-group"
                  className="link-holder justify-content-center"
                >
                  <div className="link-btn hover-underline">
                    <span>Explore complete diary</span>
                    <img
                      src="images/explore-arrow-icon.png"
                      alt="Explore complete diary"
                      className="img-fluid"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </nav>

      <ScrollDown />
    </>
  );
};

export default LandingPage;
