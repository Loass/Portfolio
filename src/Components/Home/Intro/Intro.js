import React from "react";
import "./Intro.css";

import profilePic from "../../../assets/profile-pic.png";
import cv from "../../../assets/CV-Lois-Bonsignore.pdf";

function Intro() {
  return (
    <section>
      <div className="wallpaper-general-container" id="home">
        <div className="wallpaper-container">
          <div className="wallpaper-title">
            <h1>Développeur Fullstack Javascript</h1>
            <p>
              Anciennement artisan à mon compte et passionné d'informatique
              depuis toujours, j'ai lancé ma reconversion dans le développement
              web en 2020.
              <br />
              <br />
              Suite à des formations en autodidacte, j'ai réalisé la formation
              du Bocal Academy en développement web Fullstack.
            </p>
          </div>
          <img src={profilePic} alt="profil" className="ppic" />
        </div>
        <div className="button-container">
          <a href={cv} download className="button-cv">
            <p>Télechargez mon CV</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
