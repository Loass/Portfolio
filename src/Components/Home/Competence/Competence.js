import React from "react";

import "./Competence.css";

import gear from "../../../assets/gear.svg";

function Competence() {
  return (
    <section>
      <div id="comp"></div>
      <h2 className="comp-title">
        <img src={gear} alt="gear" className="svg" />
        {` Compétences et Technologies`}
      </h2>
      <div className="comp-container">
        <div className="front-comp-container">
          <h3>Front-end</h3>
          <div className="comp-list">
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                alt="html"
              />
              <p>HTML</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                alt="css"
              />
              <p>CSS</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="javascript"
              />
              <p>Javascript</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="react"
              />
              <p>React Js</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                alt="next"
              />
              <p>Next Js</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="sass"
              />
              <p>Sass</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="react-native"
              />
              <p>React Native</p>
            </span>
          </div>
        </div>
        <div className="back-comp-container">
          <h3>Back-end</h3>
          <div className="comp-list">
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="node"
              />
              <p>Node</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="express"
              />
              <p>Express</p>
            </span>
          </div>
        </div>
        <div className="tools-comp-container">
          <h3>Outils</h3>
          <div className="comp-list">
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="git"
              />
              <p>Git / GitLab / GitHub</p>
            </span>
            <span className="individual-comp-list">
              <img
                className="icon-comp"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="mongoDb"
              />
              <p>MongoDB / Mongo Compass</p>
            </span>
            <span className="individual-comp-list">
              <p>Postman</p>
            </span>
            <span className="individual-comp-list">
              <p>SCRUM / Agile</p>
            </span>
            <span className="individual-comp-list">
              <p>Office</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competence;
