import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import $ from "jquery";

const CookiesPropmt = () => {
  const [cookieClosedClass, setCookieClosedClass] = useState("");

  useEffect(() => {
    if (getCookie("popupCookie") === "closed") {
      $("#cookie-msg-container").addClass("hide");
    } else {
      setTimeout(function () {
        setCookieClosedClass("");
      }, 3000);
    }
  }, []);

  const acceptAndCloseCookiesPrompt = (event) => {
    event.stopPropagation();
    setCookie("popupCookie", "closed", 1);
    setCookieClosedClass("hide");
  };

  const closeCookiesPrompt = (event) => {
    event.stopPropagation();
    setCookieClosedClass("hide");
  };

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  return (
    <div id="cookie-msg-container" className={cookieClosedClass}>
      <div className="txt-holder">
        <button
          className={`close-cookie ${cookieClosedClass}`}
          onClick={closeCookiesPrompt}
        >
          X
        </button>
        <div className="cookie-desc">
          <div className="heading-holder">
            <h3 className="txt-underline">Cookies Settings</h3>
          </div>
          <p>
            We use cookies to personalize your experience. Plase accept cookies
            for optimal performance.
          </p>
          <button
            className="link-holder accespt-btn"
            onClick={acceptAndCloseCookiesPrompt}
          >
            <span>Accept & Close</span>
            <img
              src="images/explore-arrow-icon.png"
              alt="Kax Life style"
              className="img-fluid"
            />
          </button>
          <button className="link-holder change-settings-btn">
            <span>Change Settings</span>
          </button>
        </div>
      </div>
      <div className="img-holder cookies-img">
        <img
          src="images/cookies-main-img.png"
          alt="cookie"
          className="img-responsive"
        />
      </div>
    </div>
  );
};

export default CookiesPropmt;
