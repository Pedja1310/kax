import React from "react";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";

const NewsFullPage = () => {
  return (
    <>
      <main>
        <section
          className="heading-content-section wow fadeIn"
          data-wow-delay="1.5s"
          data-wow-duration="1s"
        >
          <div className="container heading-container">
            <div className="row heading-content">
              <div className="col-12 heading-content-item">
                <div className="heading-holder mb-100">
                  <h1 className="txt-underline">
                    Islas Secas: <br />A Transcendent Destination
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-content-section news-full">
          <div className="container-fluid main-content-container p-0">
            <div className="row heading-content">
              <div
                className="col-3 desc-content wow fadeIn"
                data-wow-delay="2s"
              >
                <div className="desc-item">
                  <h4>Diary /</h4>
                  <p>Destinations</p>
                </div>
                <div className="desc-item">
                  <h4>Date /</h4>
                  <p>September 09, 2022</p>
                </div>
              </div>
              <div
                className="col-9 img-holder p-0 wow fadeIn"
                data-wow-delay="2s"
              >
                <img
                  src="images/news-full-main-img.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row main-content">
              <div className="col-12">
                <div className="lead-txt mw-750 wow fadeIn">
                  <p>
                    Traveling by boat, crystal-clear turquoise water brushes the
                    boat’s hull, while overhead, an equally impressive sapphire
                    blue sky commands length and breadth. In the distance,
                    appearing from nowhere, glimpses of greenery and the odd
                    rooftop rise out of the surface; approaching ever closer,
                    tropical emerald green and gleaming white sand now a
                    panorama. Destination reached - Islas Secas, Panama.
                  </p>
                </div>
              </div>
              <div className="col-12 main-content-item txt-editor-item mw-750 mb-100 wow fadeIn">
                <p>
                  Situated some 20 nautical miles south of mainland Panama in
                  the Pacific Ocean, this extraordinary archipelago harbors one
                  of the world’s choicest eco-resorts. Nestled on one of the 14
                  islands that make up this tiny cluster, this resort has nine
                  casitas with room for just 18 guests.
                  <br />
                  It should be mentioned, reaching Islas Secas by private plane
                  is also an option, flying directly to the island’s landing
                  strip from Panama City: The island’s Twin Otter plane, with
                  its twin turboprop engines, gets passengers quickly and safely
                  to and from this idyllic destination.
                </p>
                <img
                  src="images/news-full-inner-img-01.jpg"
                  alt="KAX"
                  className="img-fluid"
                />
                <h3>
                  <span>Welcome</span>
                </h3>
                <p>
                  It’s evident from the outset, the staff is extremely
                  welcoming; an ice-cold drink and a convivial smile included in
                  the initial greeting. The service is impeccable; smooth,
                  courteous, discreet and efficient to list just a few
                  complementary adjectives. Particularly impressive is their
                  deftness at knowing what the visitor requires and when; a sort
                  of sixth-sense. What’s equally impressive, staff remain
                  inconspicuous and unassuming. Yet, when comes a moment the
                  guest inquires about the how, when or where to fulfill any
                  whimsy, they go out of their way and the full extra-mile to
                  ensure the guest has everything they need. It is difficult to
                  ever want for anything here.
                </p>
                <h3>
                  <span>Fresh, local, healthy, simple yet creative</span>
                </h3>
                <p>
                  One of the most inspiring things about the Islas Secas’
                  cuisine is the way so many elements have come together to
                  create unique and ever-evolving culinary traditions.
                </p>
                <p>
                  Fresh is the order of the day with a daily-changing menu
                  inspired by the sea and deeply rooted in Panama’s culinary
                  heritage. Deftly presented ceviche and crispy fried snapper
                  with plantains, showcase the diverse cultural influences on
                  Panama’s dynamic cuisine – including Pacific, Caribbean,
                  Indigenous, Asian, and Creole flavors.
                </p>
                <p>
                  Lots of fish, crisp veggies and tropical fruit are cardinal in
                  the creation of many of the dishes tastefully prepared by the
                  head-chefs. By the by, much of the produce is grown on the
                  island.
                </p>
                <p>
                  Start the day with fresh fruit and yogurt, home-made pastries
                  and locally grown and roasted coffee. Made-to-order hot dishes
                  such as Panamanian specialties - beef empanadas and yucca
                  patties make up a well-rounded breakfast.
                </p>
                <p>
                  For lunch and dinner, native ingredients purchased from the
                  region’s indigenous communities go to make up refined island
                  classics which blend well with a selection of international
                  dishes such as lobster, Angus beef and even pizza.
                </p>
                <p>
                  Not only are the dishes sufficiently varied, there’s also a
                  choice of settings: the ocean-facing, open-air cathedral-like
                  Terraza restaurant with its soaring roof and bamboo structure
                  adjoined to a Hemingway style bar where aperitifs - Martini,
                  Gimlet, Frozen Daiquiri, to name but a few, can be enjoyed.
                  Customized barbecues on the beach or picnics on Isla Pargo’s
                  white beaches embody the idea of being part of a beautiful,
                  natural setting.
                </p>
                <div className="gallery-container">
                  <div className="gallery-content">
                    <div className="swiper txt-editor-slider">
                      <div className="swiper-wrapper">
                        <a
                          href="images/txt-editor-slider-img-01.jpg"
                          data-fancybox="gallery1"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-01.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-02.jpg"
                          data-fancybox="gallery1"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-02.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-03.jpg"
                          data-fancybox="gallery1"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-03.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-01.jpg"
                          data-fancybox="gallery1"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-01.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-02.jpg"
                          data-fancybox="gallery1"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-02.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-03.jpg"
                          data-fancybox="gallery1"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-03.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </div>
                  <a
                    href="javascipt:;"
                    data-fancybox-trigger="gallery1"
                    className="link holder"
                  >
                    <span>Gallery</span>
                    <img
                      src="images/gallery-icon.png"
                      alt="Open gallery"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <h3>
                  <span>A Pure Environment</span>
                </h3>
                <p>
                  Islas Secas, with its untamed, wild locale remains anchored to
                  a past purity where simplicity becomes demeanor. The
                  archipelago is an eco-destination with strong eco-reserve
                  endorsement: Very little has been touched - thick jungle,
                  sandy white coves, volcanic rock protruding here and there,
                  coconut trees and its crystal clear coastal waters - all as it
                  must have been for time eternity. To emphasize the point it is
                  estimated that before the resort was built, the last human
                  habitation was some 600 years ago.
                </p>
                <p>
                  The current residents are assuring they leave no footprint
                  that’s not eco-friendly either. Powered by 100%
                  solar-generated energy, the resort is fully eco-friendly.
                  Whatever food is left over is dehydrated and composted,
                  becoming fertilizer that will help grow the property’s on-site
                  organic garden to ensure many memorable meals to come while
                  the casitas and the furniture are made from reclaimed mahogany
                  from India.
                </p>
                <h3>
                  <span>An oasis within an oasis</span>
                </h3>
                <p>
                  A few man-made paths crisscross the island, connecting the
                  casitas to the hub of the island. The casitas are veiled from
                  all other occurrences on the island, creating a private oasis:
                  A perfect combination of privacy and space for bare-footed,
                  running free liberty. Guests hardly clap eyes on each other,
                  and there’s no need to fret about making too much noise. From
                  the casita, your field of view is the Pacific Ocean, a
                  scattering of miniscule islands dotted left and right and the
                  horizon.
                </p>
                <div className="gallery-container">
                  <div className="gallery-content">
                    <div className="swiper txt-editor-slider">
                      <div className="swiper-wrapper">
                        <a
                          href="images/txt-editor-slider-img-04.jpg"
                          data-fancybox="gallery2"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-04.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-05.jpg"
                          data-fancybox="gallery2"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-05.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-06.jpg"
                          data-fancybox="gallery2"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-06.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-04.jpg"
                          data-fancybox="gallery2"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-04.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-05.jpg"
                          data-fancybox="gallery2"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-05.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="images/txt-editor-slider-img-06.jpg"
                          data-fancybox="gallery2"
                          className="swiper-slide"
                        >
                          <img
                            src="images/txt-editor-slider-img-06.jpg"
                            alt="KAX"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </div>
                  <a
                    href="javascipt:;"
                    data-fancybox-trigger="gallery2"
                    className="link holder"
                  >
                    <span>Gallery</span>
                    <img
                      src="images/gallery-icon.png"
                      alt="Open gallery"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <h3>
                  <span>Wellness Spa</span>
                </h3>
                <p>
                  Islas Secas’ wellness experience is a haven of serenity and
                  seclusion; camouflaged and secluded amidst the dense jungle.
                  Its garden, a hideaway screened by lush tropical foliage, is
                  regularly visited by hummingbirds, which flit and hover over
                  the delicate flowers. In line with the resort’s eco-conscious
                  ethos, products are ethical, natural and organic, taking
                  inspiration from plants endemic to the island such as
                  coconuts, ylang ylang and wild jasmine. Massages, bamboo
                  rolling and cold stones to ease muscles and headaches along
                  with a deep relaxation treatment which helps guests reach a
                  meditative state even for the busiest of minds are just some
                  of the treatments for reviving mind and body.
                </p>
                <h3>
                  <span>Plan an Activity</span>
                </h3>
                <p>
                  In the evening, sit down with the staff to hatch a plan for
                  the next day since everything here is completely customized.
                  Furthermore, there’s definitely something for everyone
                  including teenagers and youngsters.
                </p>
                <p>
                  Venture into the fascinating world of coral reefs, tropical
                  fish - large and small - turtles, manta rays and dolphins and
                  discover their habitat through Scuba diving, an adventure for
                  first-timers and the fully initiated. Certainly, Islas Secas
                  offers a veritable catalog of activities -from fishing,
                  sailing and snorkeling among turtles to fun activities such as
                  wakeboarding, kayaking and paddleboarding. Whale watching
                  including studying humpback whales with a whale research
                  station go to make up a check-list of ventures for guests of
                  all ages and spirit.
                </p>
                <p>
                  Staff can assist in detailing what is involved and most
                  suitable, while planning activities round the guest’s personal
                  schedule and requirements.
                </p>
                <img
                  src="images/news-full-inner-img-02.jpg"
                  alt="KAX"
                  className="img-fluid"
                />
                <h3>
                  <span>Memorable</span>
                </h3>
                <p>
                  Here, a million miles away, time can be measured - employed to
                  the full for those pro-active, or shelved, leaving the visitor
                  to glide with not a care in the world.
                  <br />
                  When it comes time to leave, to return to the outer-world, it
                  is hard not to promise yourself to return, and once again be
                  immersed in a place of such natural beauty and heritage,
                  knowing the staff will be equally pleased to rekindle the
                  acquaintanceship.
                </p>
              </div>
              <div className="link-holder justify-content-center mb-100 wow fadeIn">
                <Link href="/news-group">
                  <span>Explore complete diary</span>
                  <img
                    src="images/explore-arrow-icon.png"
                    alt="Load more stories"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollDown />
    </>
  );
};

export default NewsFullPage;
