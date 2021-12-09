import "./Contact.css";
import send from "../../../assets/send.svg";
import phone from "../../../assets/phone.svg";
import mail from "../../../assets/envelope.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import cv from "../../../assets/CV_Bonsignore_Lois.pdf";

import React, { useState } from "react";
const axios = require('axios')



function Contact() {
  const [contactInfo, setContactInfo] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });


const url = "http://localhost:9000/contact"

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    axios.post(url, contactInfo).then((res) =>   console.log(res))
  };

  return (
    <section>
      <h2 className="comp-title" id="contact">
        <img src={send} alt="send" className="svg" />
        {`Contact `}
      </h2>
      <div className="general-contact-container">
        <div className="contact-links-container">
          <p>
            <img src={phone} alt="phone" className="svg-logo" /> 06.98.74.30.53
          </p>
          <p>
            <img src={mail} alt="mail" className="svg-logo" />{" "}
            bonsignore.lois@gmail.com
          </p>
          <a href="https://github.com/LoisBonsignore" className="contact-info">
            <p className="links-option">
              <img src={github} alt="github" className="svg-logo" />{" "}
              /LoisBonsignore
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/lo%C3%AFs-bonsignore/"
            className="contact-info"
          >
            <p className="links-option">
              <img src={linkedin} alt="linkedin" className="svg-logo" /> Loïs
              Bonsignore
            </p>
          </a>
          <a href={cv} download className="button-cv">
            <p>Télechargez mon CV</p>
          </a>
        </div>
          <form className="contact-form-container" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="lastname">Nom</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              onChange={(e) =>
                setContactInfo({ ...contactInfo, lastname: e.target.value })
              }
            />
            <label htmlFor="firstname">Prénom</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              onChange={(e) =>
                setContactInfo({ ...contactInfo, firstname: e.target.value })
              }
            />
            <label htmlFor="email">Adresse email</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={(e) =>
                setContactInfo({ ...contactInfo, email: e.target.value })
              }
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              onChange={(e) =>
                setContactInfo({ ...contactInfo, message: e.target.value })
              }
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
    </section>
  );
}

export default Contact;
