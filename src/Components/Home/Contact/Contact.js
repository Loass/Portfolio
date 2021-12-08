import React from "react";

import "./Contact.css";

import send from "../../../assets/send.svg";
import phone from "../../../assets/phone.svg";
import mail from "../../../assets/envelope.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";

import cv from "../../../assets/CV_Bonsignore_Lois.pdf";

function Contact() {
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
          <a href="https://www.linkedin.com/in/lo%C3%AFs-bonsignore/" className="contact-info">
            <p className="links-option">
              <img src={linkedin} alt="linkedin" className="svg-logo" /> Loïs
              Bonsignore
            </p>
          </a>
          <a href={cv} download className="button-cv">
            <p>Télechargez mon CV</p>
          </a>
        </div>
        <div className="contact-form-container">
          <label for="name">Nom</label>
          <input id="name" type="text" />
          <label for="firstname">Prénom</label>
          <input id="firstname" type="text" />
          <label for="mail">Adresse email</label>
          <input id="mail" type="text" />
          <label for="message">Message</label>
          <textarea id="message" cols="30" rows="10"></textarea>
          <button>Envoyer</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
