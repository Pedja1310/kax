import React from "react";
import { Link } from "react-router-dom";
import ScrollDown from "../components/ScrollDown";

const DefaultPage = () => {
  return (
    <>
      <main className="pr-90 default-page">
        <section
          className="main-content-section wow fadeIn"
          data-wow-delay="1.5s"
          data-wow-duration="1s"
        >
          <div className="container heading-container">
            <div className="row heading-content">
              <div className="col-12 heading-content-item">
                <div className="heading-holder mb-100">
                  <h1 className="txt-underline">Default page</h1>
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
                    src="images/about-us-main-img.jpg"
                    alt="Default page"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container txt-editor-container wow fadeIn">
            <div className="row txt-editor-content">
              <div className="col-12 txt-editor-item mw-600 m-auto align-justify">
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
                  <Link to="#">each journey</Link> is customized.{" "}
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
      </main>

      <ScrollDown />
    </>
  );
};

export default DefaultPage;
