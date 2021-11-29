import React from "react";

import "./Competence.css";

function Competence() {
  return (
    <div>
      <h2 className="comp-title">Compétences et Technologies</h2>
      <div className="comp-container">
        <div className="front-comp-container">
          <h3>Front-end</h3>
          <div className="comp-list">
            <p className="individual-comp-list">HTML / CSS</p>
            <p className="individual-comp-list">Javascript</p>
            <p className="individual-comp-list">React Js</p>
            <p className="individual-comp-list">React Native</p>
          </div>
        </div>
        <div className="back-comp-container">
          <h3>Back-end</h3>
          <div className="comp-list">
            <p className="individual-comp-list">Node</p>
            <p className="individual-comp-list">Express</p>
          </div>
        </div>
        <div className="tools-comp-container">
          <h3>Outils</h3>
          <div className="comp-list">
            <p className="individual-comp-list">Git / GitLab / GitHub</p>
            <p className="individual-comp-list">MongoDB / Mongo Compass</p>
            <p className="individual-comp-list">Postman</p>
            <p className="individual-comp-list">SCRUM / Agile</p>
            <p className="individual-comp-list">Office</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competence;
