import React from "react";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";

const EndorsmentPage = () => {
  return (
    <>
      <main className="pr-90 coresponding-page">
        <section
          className="main-content-section wow fadeIn"
          data-wow-delay="1.5s"
          data-wow-duration="1s"
        >
          <div className="container heading-container">
            <div className="row heading-content">
              <div className="col-12 heading-content-item">
                <div className="heading-holder mb-100">
                  <h1 className="txt-underline">Endorsement</h1>
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
                    src="images/endorsement-main-img.jpg"
                    alt="Endorsement"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="quotes-secion">
          <div className="container quotes-container">
            <div className="row quotes-content">
              <div className="col-12 lead-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate felis ut sem convallis, mattis aliquam magna
                  ullamcorper. In vitae arcu ex.
                </p>
              </div>
              <div>
                <div className="row grid quotes-content mb-100">
                  <div className="grid-item col-6 wow fadeIn">
                    <div className="quotes-item">
                      <div className="img-holder open-quotes">
                        <img
                          src="images/quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                      <div className="txt-holder">
                        <p>Hey Kyle-</p>
                        <p>
                          {" "}
                          First. Thank you. Thank You. Thank you. This was by
                          far the best travel experience in my lifetime. I have
                          never seen such luxury or been that pampered. The trip
                          was worth every penny in my opinion. If we went to a
                          restaurant, we had the best table. If we had a
                          transfer, we had the nicest car. The drivers were the
                          best. The hotels were amazing. We plan on using these
                          email to give google reviews to all of the places on
                          the itinerary.{" "}
                        </p>
                        <p>
                          13/13 flights on time and bags making it every time
                          helped. Also the weather was outstanding everywhere.
                        </p>
                      </div>
                      <div className="loacation-desc">
                        <p>Croatia / Greece Summer Travel</p>
                      </div>
                      <div className="img-holder close-quotes">
                        <img
                          src="images/close-quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-item col-6 wow fadeIn">
                    <div className="quotes-item">
                      <div className="img-holder open-quotes">
                        <img
                          src="images/quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                      <div className="txt-holder">
                        <p>
                          I don't even know where to start. This was by far the
                          best trip of our lives. We are so thankful to you and
                          your team for the work and care put into our
                          honeymoon. We learned, relaxed, and fell in love with
                          Naples, Rome, and Athens. I wanted to share a few of
                          our highlights.
                        </p>
                      </div>
                      <div className="loacation-desc">
                        <p>Italy / Greece Summer Travel</p>
                      </div>
                      <div className="img-holder close-quotes">
                        <img
                          src="images/close-quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-item col-6 wow fadeIn">
                    <div className="quotes-item">
                      <div className="img-holder open-quotes">
                        <img
                          src="images/quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                      <div className="txt-holder">
                        <p>Hi Kyle,</p>
                        <p>
                          We are still basking in the glow of a wonderful trip.
                          The flow was great and the food absolutely delicious,
                          I LOVED it - from the first restaurant we went to
                          CIMAS until the last breakfast on the balcony at The
                          Vintage House - food was a highlight. So happy we
                          stayed in Cascias on the water, kids loved the beach
                          and searching for creatures in the tide pools, and
                          having the pool at the hotel was perfect - also nice
                          to be able to walk on the water to the shops etc. in
                          town.
                        </p>
                        <p>
                          Food experience in Lisbon was cool and seeing the city
                          from the tuk tuks. Also the horse and carriage ride
                          was a nice touch in Sintra. A major highlight was
                          definitely cooking with Contessa experience - what a
                          property and what a personality! We all loved it,
                          especially the kids - who ended up in her pool after
                          dinner. We missed the mystical town of coimbra due to
                          the fires - but the flexibility and the
                          professionalism of all the drivers was great. They
                          were all so nice too! As were the tour guides!
                        </p>
                        <p>
                          The location of the hotel in Porto was perfect too.
                        </p>
                        <p>
                          Thanks again for giving us a wonderful trip - we are
                          cherishing all the memories! <br />
                          Cheers,
                        </p>
                      </div>
                      <div className="loacation-desc">
                        <p>Portugal Experience</p>
                      </div>
                      <div className="img-holder close-quotes">
                        <img
                          src="images/close-quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-item col-6 wow fadeIn">
                    <div className="quotes-item">
                      <div className="img-holder open-quotes">
                        <img
                          src="images/quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                      <div className="txt-holder">
                        <p>Hi Kyle,</p>
                        <p>
                          We are still basking in the glow of a wonderful trip.
                          The flow was great and the food absolutely delicious,
                          I LOVED it - from the first restaurant we went to
                          CIMAS until the last breakfast on the balcony at The
                          Vintage House - food was a highlight. So happy we
                          stayed in Cascias on the water, kids loved the beach
                          and searching for creatures in the tide pools, and
                          having the pool at the hotel was perfect - also nice
                          to be able to walk on the water to the shops etc. in
                          town.
                        </p>
                        <p>
                          Food experience in Lisbon was cool and seeing the city
                          from the tuk tuks. Also the horse and carriage ride
                          was a nice touch in Sintra. A major highlight was
                          definitely cooking with Contessa experience - what a
                          property and what a personality! We all loved it,
                          especially the kids - who ended up in her pool after
                          dinner. We missed the mystical town of coimbra due to
                          the fires - but the flexibility and the
                          professionalism of all the drivers was great. They
                          were all so nice too! As were the tour guides!
                        </p>
                        <p>
                          The location of the hotel in Porto was perfect too.
                        </p>
                        <p>
                          Thanks again for giving us a wonderful trip - we are
                          cherishing all the memories! <br />
                          Cheers,
                        </p>
                      </div>
                      <div className="loacation-desc">
                        <p>Portugal Experience</p>
                      </div>
                      <div className="img-holder close-quotes">
                        <img
                          src="images/close-quotes-icon.png"
                          alt="''"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-100 wow fadeIn">
                  <div className="col-12">
                    <Link
                      href="#"
                      className="link-holder justify-content-center"
                    >
                      <div className="link-btn d-flex align-items-center flex-direction-column">
                        <span className="hover-underline">
                          Load more quotes
                        </span>
                        <img
                          src="images/load-more-arrow-icon.png"
                          alt="Load more quotes"
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

      <ScrollDown />
    </>
  );
};

export default EndorsmentPage;
