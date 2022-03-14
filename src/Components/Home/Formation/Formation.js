import React from "react";
// img
import study from "../../../assets/study.svg";
// styles
import "./Formation.css";

export default function Formation() {
  return (
    <section>
      <div id="formation"></div>
      <div className="formation-general-container">
        <h2 className="comp-title">
          <img src={study} alt="study" className="svg" /> {`Formation`}
        </h2>
        <div className="formation-individual-container">
          <h3>
            Formation de développeur FullStack Javascript, au Bocal Academy de
            Nice
          </h3>
          <p>Septembre - Novembre 2021</p>
          <p>
            Formation FullStack en télé-présentiel avec cours théoriques et
            réalisation de plusieurs projets seul mais surtout en équipe.
            Obtention de l'Attestation de compétences du Bocal Academy.
          </p>
          <ul>
            <li>Construire une page web avec les langages HTML et CSS</li>
            <li>Algorithmie</li>
            <li>Maîtriser les bases de Javascript</li>
            <li>
              Savoir développer une application web front-end avec React JS
            </li>
            <li>Maîtriser le fonctionnement de base de Node JS</li>
            <li>
              Savoir utiliser et créer une base de donnée avec MongoDB (Compass)
            </li>
            <li>
              Maîtriser le développement d'une application mobile simple avec
              React Native
            </li>
            <li>Initiation aux méthodes Agile / SCRUM</li>
            <li>Mener un projet web Fullstack en autonomie</li>
          </ul>
        </div>
        <div className="formation-individual-container">
          <h3>Formation Udemy "Modern Javascript"</h3>
          <p>Janvier 2022</p>
          <p>
            Formation en ligne d'approfondissement en Javascript, sous forme de
            vidéos de théorique, challenges et projets.
          </p>
          <ul>
            <li>JavaScript (mise à jour EcmaScript)</li>
            <li>Utilisation et mise en place de WebPack</li>
            <li>Utilisation et mise en place de Babel</li>
            <li>Création d'une base de données en Firebase</li>
            <li>Bibilothèque de modification de UI en JavaScript</li>
            <li>Création de divers projets en lien avec la formation</li>
          </ul>
        </div>
        <div className="formation-individual-container">
          <h3>Formation Udemy "Build Web Apps with React & Firebase"</h3>
          <p>Février 2022</p>
          <p>
            Formation en ligne d'approfondissement en React, sous forme de
            vidéos de théorique, challenges et projets.
          </p>
          <ul>
            <li>Approfondissement des concepts de React</li>
            <li>
              Approfondissement des Hooks (useState, useEffect, useContext)
            </li>
            <li>Hooks supplémentaires (useLocation, useParams, etc...)</li>
            <li>Hooks personnalisés</li>
            <li>Firebase</li>
            <li>Création de divers projets en lien avec la formation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
