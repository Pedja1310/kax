import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ScrollDown from "../components/ScrollDown";

const StartAJourneyPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    travel_start: "",
    travel_end: "",
    passengers: "",
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
                  <CustomInput
                    formData={formData}
                    type="text"
                    name="fullname"
                    placeholder={"John Doe *"}
                    handleChange={handleChange}
                    label={"What's your name?"}
                  />
                  <CustomInput
                    formData={formData}
                    type="email"
                    name="email"
                    placeholder={"john@doe.com"}
                    handleChange={handleChange}
                    label="Email address"
                  />
                  <CustomInput
                    formData={formData}
                    type="text"
                    name="phone"
                    placeholder={"+1 (123) 456 789"}
                    label="Phone number"
                    handleChange={handleChange}
                  />
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
                  <CustomInput
                    formData={formData}
                    type="text"
                    name="passengers"
                    placeholder={"How many people?"}
                    label="Number of passengers"
                    handleChange={handleChange}
                  />
                  <CustomInput
                    formData={formData}
                    type="text"
                    name="destination"
                    placeholder="Place, country, continent"
                    label="Destianation"
                    handleChange={handleChange}
                  />
                  <CustomInput
                    formData={formData}
                    type="textarea"
                    name="message"
                    placeholder="More explanation"
                    handleChange={handleChange}
                    label="Message:"
                  />
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
