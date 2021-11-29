import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div>
      <h2 className="comp-title">Contact</h2>
      <div className="general-contact-container">
        <div className="contact-links-container">
          <p>téléphone: 06.98.74.30.53</p>
          <p>bonsignore.lois@gmail.com</p>
          <p>GitHub: /LoisBonsignore</p>
          <p>Linkedin: Loïs Bonsignore</p>
          <button>Télécharger mon CV</button>
        </div>
        <div className="contact-form-container">
          <label>Nom</label>
          <input type="text" />
          <label>Prénom</label> 
          <input type="text" />
          <label>Adresse email</label>
          <input type="text" />
          <label>Message</label>
          <textarea cols="30" rows="10"></textarea>
          <button>Envoyer</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
