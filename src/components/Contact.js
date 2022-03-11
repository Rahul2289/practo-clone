import React from "react";
import "./Styles/ContactStyle.css";
import img from "./images/footer-img.png";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-img-container">
        <img src={img} alt="footerimg" className="" />
      </div>
      <div className="contact-info-container">
        <h3>Download the Practo app</h3>
        <p>
          Access video consultation with India’s top doctors on the Practo app.
          Connect with doctors online, available 24/7, from the comfort of your
          home.
        </p>
        <h6>Get the link to download the app</h6>
        <form>
          <div>
            +91
            <input placeholder="type your phone number" />
          </div>
          <button type="submit" className="button-1">
            send SMS
          </button>
        </form>
        <div className="contact-btn-container">
          <div>
            <ShopIcon className="icon" />
            <button>Google play</button>
          </div>
          <div>
            {" "}
            <AppleIcon className="icon" />
            <button>App store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
