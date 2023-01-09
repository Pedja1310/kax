import React from "react";
import { Link } from "react-router-dom";

const NewsGroupPage = () => {
  return (
    <main>
      <section className="news-group-section">
        <div className="container-fluid news-group-container">
          <div className="row news-group-content">
            <div className="col-3 page-sidemenu-items">
              <Link
                className="page-sidemenu-item wow fadeIn"
                data-wow-delay="2s"
                to="#"
              >
                Diary /
              </Link>
              <Link
                className="page-sidemenu-item transition-page hover-underline active wow fadeIn"
                data-wow-delay="2.2s"
                to="/news-group"
              >
                All
              </Link>
              <Link
                className="page-sidemenu-item transition-page hover-underline wow fadeIn"
                data-wow-delay="2.4s"
                to="/news-group"
              >
                News
              </Link>
              <Link
                className="page-sidemenu-item transition-page hover-underline wow fadeIn"
                data-wow-delay="2.6s"
                to="/news-group"
              >
                Destinations
              </Link>
              <Link
                className="page-sidemenu-item transition-page hover-underline wow fadeIn"
                data-wow-delay="2.8s"
                to="/news-group"
              >
                Insights
              </Link>
              <Link
                className="page-sidemenu-item transition-page hover-underline wow fadeIn"
                data-wow-delay="3s"
                to="/news-group"
              >
                Inspiration
              </Link>
              <Link
                className="page-sidemenu-item transition-page hover-underline wow fadeIn"
                data-wow-delay="3.2s"
                to="/news-group"
              >
                Review
              </Link>
            </div>
            <div className="col-9 last-news-container">
              <div className="row mb-60">
                <div className="col-12 grid-item">
                  <Link to="/news-full" className="news-group-item">
                    <div className="img-holder">
                      <div
                        className="hover-content wow fadeIn"
                        data-wow-delay="2s"
                      >
                        <div className="txt-content">
                          <h4>Destinations</h4>
                          <h1 className="txt-underline">
                            Islas Secas: <br />A Transcendent Destination
                          </h1>
                        </div>
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
                        src="images/blog-group-last-news-img.jpg"
                        alt=""
                        className="img-fluid wow fadeIn"
                        data-wow-delay="2s"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="row news-group-content grid mb-100 wow fadeIn"
                data-wow-delay="2s"
              >
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
                        src="images/blog-group-img-01.jpg"
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
                  <Link Link="/news-full" className="news-group-item">
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
                        src="images/blog-group-img-02.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="txt-content">
                      <h4>Inspiration</h4>
                      <h3>
                        Nullam ante neque, gravida id lacus et, gravida
                        ultricies neque
                      </h3>
                    </div>
                  </Link>
                </div>
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
                        src="images/blog-group-img-03.jpg"
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
                        src="images/blog-group-img-04.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="txt-content">
                      <h4>Insights</h4>
                      <h3>
                        Donec in odio condimentum, vehicula ligula iaculis,
                        tristique augue
                      </h3>
                    </div>
                  </Link>
                </div>
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
                        src="images/blog-group-img-05.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="txt-content">
                      <h4>Inspiration</h4>
                      <h3>
                        Aenean Link neque mollis, varius lectus sit amet,
                        pellentesque purus
                      </h3>
                    </div>
                  </Link>
                </div>
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
                        src="images/blog-group-img-06.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="txt-content">
                      <h4>News</h4>
                      <h3>Cras id scelerisque ex, vitae aliquet nunc</h3>
                    </div>
                  </Link>
                </div>
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
                        src="images/blog-group-img-07.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="txt-content">
                      <h4>Destinations</h4>
                      <h3>Vestibulum consequat erat neque</h3>
                    </div>
                  </Link>
                </div>
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
                        src="images/blog-group-img-08.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="txt-content">
                      <h4>Destination</h4>
                      <h3>Fusce id bibendum lectus</h3>
                    </div>
                  </Link>
                </div>
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
                        src="images/blog-group-img-09.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="txt-content">
                      <h4>Review</h4>
                      <h3>Vestibulum consequat erat neque</h3>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row mb-100 wow fadeIn">
                <div className="col-12">
                  <Link to="#" className="link-holder justify-content-center">
                    <div className="link-btn d-flex align-items-center flex-direction-column">
                      <span className="hover-underline">Load more stories</span>
                      <img
                        src="images/load-more-arrow-icon.png"
                        alt="Load more stories"
                        className="img-fluid"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsGroupPage;
