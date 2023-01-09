import React, { useState } from "react";
import ScrollDown from "../components/ScrollDown";

const StartAJourneyPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    phone_2: "",
    travel_start: "",
    travel_end: "",
    passangers: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // will console.log form values on send (no backend service)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <main className="start-a-jurney-page">
        <section
          className="heading-content-section wow fadeIn mb-200"
          data-wow-delay="1.5s"
          data-wow-duration="1s"
        >
          <div className="container heading-container">
            <div className="row heading-content">
              <div className="col-12 heading-content-item">
                <div className="heading-holder">
                  <h1 className="txt-underline">Let's Start a Journey</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact-form-section pl-400 wow fadeIn"
          data-wow-delay="2s"
        >
          <div className="container-fluid contact-form-container">
            <div className="row contact-form-content">
              <div className="col-12 contact-form-item p-0">
                <form
                  onSubmit={handleSubmit}
                  className="contact-form start-a-journey-form"
                >
                  <div className="form-group">
                    <label>What's your name?</label>
                    <input
                      value={formData.fullname}
                      type="text"
                      name="fullname"
                      className="custom-input"
                      placeholder="John Doe *"
                      onChange={handleChange}
                    />
                    <span id="fullname_error" className="field_error"></span>
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      value={formData.email}
                      type="text"
                      name="email"
                      className="custom-input"
                      placeholder="john@doe.com *"
                      onChange={handleChange}
                    />
                    <span id="email_error" className="field_error"></span>
                  </div>
                  <div className="form-group">
                    <label>Phone number</label>
                    <input
                      value={formData.phone}
                      type="text"
                      name="phone"
                      className="custom-input"
                      placeholder="+1 (123) 456 7890*"
                      onChange={handleChange}
                    />
                    <span id="email_error" className="field_error"></span>
                  </div>
                  <div className="form-group">
                    <label>Phone number</label>
                    <input
                      value={formData.phone_2}
                      type="text"
                      name="phone_2"
                      className="custom-input"
                      placeholder="+1 (123) 456 7890*"
                      onChange={handleChange}
                    />
                    <span id="email_error" className="field_error"></span>
                  </div>
                  <div className="form-group">
                    <label className="mb-50 d-block">Date of travel</label>
                    <div className="row">
                      <div className="col-3">
                        <label>From</label>
                        <div className="input-img-holder">
                          <input
                            value={formData.travel_start}
                            type="text"
                            name="travel_start"
                            className="custom-input datepicker departure_date"
                            placeholder="mm / dd / yyyy"
                            onChange={handleChange}
                          />
                          <img
                            src="images/calendar-icon.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <label>To</label>
                        <div className="input-img-holder">
                          <input
                            value={formData.travel_end}
                            type="text"
                            name="travel_end"
                            className="custom-input datepicker return_date"
                            placeholder="mm / dd / yyyy"
                            onChange={handleChange}
                          />
                          <img
                            src="images/calendar-icon.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Number of passengers</label>
                    <input
                      value={formData.passangers}
                      type="text"
                      name="passangers"
                      className="custom-input"
                      placeholder="How many people?"
                      onChange={handleChange}
                    />
                    <span id="email_error" className="field_error"></span>
                  </div>
                  <div className="form-group">
                    <label>Destination</label>
                    <input
                      value={formData.destiantion}
                      type="text"
                      name="destination"
                      className="custom-input"
                      placeholder="Place, country, continent"
                      onChange={handleChange}
                    />
                    <span id="email_error" className="field_error"></span>
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <textarea
                      value={formData.message}
                      name="message"
                      className="custom-textarea"
                      rows="6"
                      placeholder="More explanation"
                      onChange={handleChange}
                    ></textarea>
                    <span id="message_error" className="field_error"></span>
                  </div>
                  <div className="form-group no-border">
                    <button type="submit" className="">
                      Send It{" "}
                      <img
                        src="images/explore-arrow-icon.png"
                        alt="Send It"
                        className="img-fluid"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollDown />
    </>
  );
};

export default StartAJourneyPage;
