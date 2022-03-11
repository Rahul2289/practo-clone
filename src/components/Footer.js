import React, { useState } from "react";
import "./Styles/FooterStyles.css";
const Footer = () => {
  const [display, setDisplay] = useState(true);
  const Toogle = () => {
    setDisplay(!display);
  };
  return (
    <div className="footer-container">
      <div className="footer-link-container">
        <div>
          <h3 onClick={Toogle}>Practo</h3>
          <div className={display ? "none" : "block"}>
            <p>About</p>
            <p>Blog</p>
            <p>Carrers</p>
            <p>Press</p>
            <p>Contact us</p>
          </div>
        </div>
        <div>
          <h3 onClick={Toogle}>For patients</h3>
          <div className={display ? "none" : "block"}>
            <p>Search for doctors</p>
            <p>Search for clinics</p>
            <p>Search for hospitals</p>
            <p>Book Full Body Checkups</p>
            <p>Practo Plus</p>
            <p>Covid Hospital listing</p>
            <p>Read health articles</p>
            <p>Practo drive</p>
            <p>Health app</p>
          </div>
        </div>
        <div>
          <h3 onClick={Toogle}>For doctors</h3>
          <div className={display ? "none" : "block"}>
            <p>Practo profile</p>
            <h3>For clinics</h3>
            <p>Ray by Practo</p>
            <p>Practo Reach</p>
            <p>Ray Tab</p>
            <p>Practo Pro</p>
          </div>
        </div>
        <div>
          <h3 onClick={Toogle}>For hospitals</h3>
          <div className={display ? "none" : "block"}>
            <p>Insta by Practo</p>
            <p>Qikwell by Practo</p>
            <p>Practo Reach</p>
            <p>Practo Profile</p>
            <p>Practo Drive</p>
          </div>
        </div>
        <div>
          <h3 onClick={Toogle}>More</h3>
          <div className={display ? "none" : "block"}>
            <p>Help</p>
            <p>Developers</p>
            <p>Privacy Policy</p>
            <p>Terms & Condictions</p>
            <p>Healthcare Directory</p>
            <p>practo Health Wiki</p>
            <p>Coporate Wellness</p>
          </div>
        </div>
        <div>
          <h3 onClick={Toogle}>Social</h3>
          <div className={display ? "none" : "block"}>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Youtube</p>
            <p>Github</p>
          </div>
        </div>
      </div>
      <div className="footer-logo-container">
        <h5>practo</h5>
        <strong>Copyright © 2017, Practo. All rights reserved.</strong>
      </div>
    </div>
  );
};

export default Footer;
