import React from "react";

const Popups = () => {
  return (
    <>
      <div id="log-overlay"></div>

      <div className="popup-wrap">
        <div className="popup-wrap-content">
          <div className="popup login-meni">
            <div className="popup-header">
              <div className="icon-holder">
                <img src="images/login-icon.png" alt="Login" />
              </div>
              <h3>
                h2<strong>heading</strong>
              </h3>
              <span className="close-popup">×</span>
            </div>
            <div className="popup-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popups;
