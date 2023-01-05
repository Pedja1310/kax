import React from "react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <>
      <main class="pr-90 about-us-page">
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
                  class="page-submenu-item transition-page hover-underline active wow fadeIn"
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
                  <h1 class="txt-underline">Enjoy. Explore. Experience.</h1>
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
                    src="images/about-us-main-img.jpg"
                    alt="About Us"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container txt-editor-container mb-70 wow fadeIn">
            <div class="row txt-editor-content">
              <div class="col-12 txt-editor-item mw-600 m-auto align-justify">
                <p>
                  We like to see every vacation from the viewpoint of the
                  client. Creating a bespoke experience that matches the
                  expectations of the client. We confer with the client to
                  better recognize and observe the client’s character, your
                  needs, and preferences allows us to get singularly close to
                  the client’s wishes.
                </p>
                <p>
                  Accordingly, our goal is to create perfect luxury holidays;
                  yet it’s more than a holiday, it’s a journey. A journey to
                  enjoy, explore and experience. And as each client is
                  different, with different wishes,{" "}
                  <a href="javascript:;">each journey</a> is customized.{" "}
                </p>
                <p>
                  As we plan the details, the travel arrangements, the
                  accommodation, activities and facilities, we envisage the
                  client indulging in their every moment.
                </p>
                <p>
                  We like to invest our time in creating a journey of dreams
                  made reality: Time which we save the client.{" "}
                </p>
                <p>
                  In the first place, it’s a prerequisite that travel
                  arrangements are coherent and rational: Getting to and from
                  the airport, direct flights or private jet, supervision of
                  belongings and pets, in addition to the administration of
                  travel requirements for whichever part of the world.
                </p>
                <p>
                  The client’s accommodation is also a first concern, fulfilling
                  a preference for diverse considerations; such as style,
                  location and service.
                </p>
                <p>
                  When it comes to experiences, outdoor activities should be a
                  real adventure. We make sure the client knows exactly what is
                  involved, and whether, on the one hand, an initiation course
                  is required, and on the other, are they demanding enough for
                  the experienced; confident that the choices are consistent
                  with their aspirations.{" "}
                </p>
                <p>
                  For a luxury holiday to be memorable, it has to suit the mood
                  and fulfill the reason. Whether it is full-on relax, adventure
                  experiences or outdoor activity aficionados. KAX travel pursue
                  every minute detail to ensure there are no snags - no hiccups
                  - no regrets.{" "}
                </p>
                <p>The perfect luxury holiday is just a touch away.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="txt-img-section vision">
          <div class="container-fluid txt-img-container">
            <div class="row txt-img-content">
              <div class="col-8 txt-content second-bg-color">
                <div class="txt-content-wrap wow fadeIn">
                  <div class="heading-content">
                    <div class="heading-holder mb-60">
                      <h2 class="txt-underline">Vision The Scenario</h2>
                    </div>
                    <h4>
                      Create a scenario drawn from all that our world offers;
                      locations, amenities, activities and hospitality.
                    </h4>
                  </div>
                  <p>
                    KAX don’t do pre-established holiday packages. Luxury
                    holidays are created - drawing on all that our world offers
                    in locations, amenities, activities and hospitality.
                  </p>
                  <p>
                    Without a doubt, the closer the experience matches the
                    conception, the greater the encounter for the traveler. Free
                    to act out their vacation as they pictured it. A dream
                    vacation made reality.
                  </p>
                  <p>
                    Transported to a world that changes perception, whether
                    that’s through relax and wellness, where one can switch off
                    all thoughts of the outside world; recall becoming a haze -
                    or a re-invigorating vacation, with ventures, activities and
                    new experiences. And for many, the switch is in seeking a
                    quintessential combination of relaxation and entertainment.
                  </p>
                  <p>
                    Luxury tourism should afford a positive and professional
                    interaction with staff, where an impeccable and smooth
                    service leaves the guest never wanting for anything,
                    including the catering of culinary delights and wines that
                    accommodate the traveler’s taste
                  </p>
                </div>
                <div class="img-holder">
                  <div class="img-placeholder-container wow">
                    <div class="full-bg main-bg"></div>
                    <img
                      src="images/vision-section-main-img.jpg"
                      alt="Vision"
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

export default AboutUsPage;
