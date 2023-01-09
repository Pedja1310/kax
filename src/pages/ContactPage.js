import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
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
    <main className="pr-90 contact-us-page">
      <section
        className="heading-content-section mb-60 wow fadeIn"
        data-wow-delay="1.5s"
        data-wow-duration="1s"
      >
        <div className="container heading-container">
          <div className="row heading-content">
            <div className="col-12 heading-content-item">
              <div className="heading-holder">
                <h1 className="txt-underline">Get in Touch</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-section pl-400 contact-logo-bg pt-70">
        <div
          className="container-fluid contact-info-container wow fadeIn"
          data-wow-delay="2s"
        >
          <div className="row contact-info-content w-500 mb-200">
            <div className="col-12 contact-info-item">
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vulputate felis ut sem convallis, mattis aliquam magna
                ullamcorper. In vitae arcu ex.
              </p>
              <Link to="#">office@kaxlifestyle.com</Link>
              <h4>FAQ</h4>
              <p>
                Your frequent asked questions <Link to="#">here</Link>.
              </p>
              <h4>Social links:</h4>
              <div className="links-holder">
                <Link target="_blank" to="#" className="txt-underline">
                  Instagram
                </Link>
                <Link target="_blank" to="#" className="txt-underline">
                  LinkedIn
                </Link>
                <Link target="_blank" to="#" className="txt-underline">
                  YouTube
                </Link>
              </div>
            </div>
          </div>
          <div className="row contact-form-content">
            <div className="col-12 contact-form-item">
              <div className="heading-holder mb-60">
                <h3 className="txt-underline">Send us Link direct message</h3>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>What's your name?</label>
                  <input
                    value={formData.name}
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
  );
};

export default ContactPage;
