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
              Passionné d'informatique
              depuis toujours, j'ai lancé ma reconversion dans le développement
              web en 2020.
              <br />
              <br />
              Suite à des formations en autodidacte sur internet, j'ai participé à la
              formation du Bocal Academy de Nice en développement web Fullstack Javascript.
              <br />
              <br />
              Depuis, je continue d'apprendre en réalisant des formations, des
              projets et en apprenant de nouvelles technologies.
              <br />
              <br />
              Je suis également en Freelance depuis mars 2022 en réalisant des sites internet pour des particuliers.
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
