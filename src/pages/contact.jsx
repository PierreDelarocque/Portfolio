import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import cv from "../image/cvdelarocque.jpg";

function Contact() {
  const [value, setValue] = useState();
  return (
    <>
      <div className="contact-container">
        <address>
          <a href="tel:0658581189">06.58.58.11.89</a>

          <a href="mailto:delarocque..pierre@gmail.com" target="_blank">
            Email
          </a>

          <a href="https://github.com/PierreDelarocque" target="_blank">
            {" "}
            Github{" "}
          </a>
          {""}
          <a
            href="https://www.linkedin.com/in/pierre-delarocque-972740aa/"
            target="_blank"
          >
            Linkedin
          </a>
        </address>
      </div>
      <div>
        <h2
          className="title-h2
      "
        >
          Mon CV
        </h2>
        <img className="cv-img" src={cv} alt="cv" />
      </div>
    </>
  );
}
export default Contact;
