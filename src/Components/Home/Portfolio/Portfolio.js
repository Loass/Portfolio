import React from "react";
// img
import Uppertown from "../../../assets/Uppertown_2.PNG";
import DeLivreIum from "../../../assets/De-livre-ium.PNG";
import RecipeHub from "../../../assets/RecipeHub.png";
import MyMoney from "../../../assets/MyMoney.png";
import appMeteo from "../../../assets/App_meteo.PNG";
import book from "../../../assets/book.svg";
import GitHub from "../../../assets/github.svg";
// styles
import "./Portfolio.css";

function Portfolio() {
  return (
    <section>
      <div id="portfolio"></div>
      <div className="portfolio-general-container">
        <h2 className="comp-title">
          <img src={book} alt="book" className="svg" /> {` Portfolio`}
        </h2>
        <div className="portfolio-container">
          <div>
            <a
              href="https://github.com/LoisBonsignore/UpperTown-front"
              className="project-link"
            >
              <div className="individual-portfolio-container">
                <h4>UpperTown</h4>
                <div className="image-div">
                  <img
                    src={Uppertown}
                    alt="projet uppertown"
                    className="individual-portfolio-image"
                  />
                </div>
                <p>Site web d'investissement immobilier en crowdfunding.</p>
                <p className="technos-p">Technos: React, CSS, Node, Express, MongoDB</p>
                <p>Réalisé en Novembre 2021</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/LoisBonsignore/Recipe-hub"
              className="project-link"
            >
              <div className="individual-portfolio-container">
                <h4>RecipeHub</h4>
                <div className="image-div">
                  <img
                    src={RecipeHub}
                    alt="projet meteo"
                    className="individual-portfolio-image"
                  />
                </div>
                <p>Application de création et consultation de recettes de cuisine.</p>
                <p className="technos-p">Techno: React Js, Css, Firestore</p>
                <p>Réalisé en Avril 2022</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/LoisBonsignore/My-money"
              className="project-link"
            >
              <div className="individual-portfolio-container">
                <h4>MyMoney</h4>
                <div className="image-div">
                  <img
                    src={MyMoney}
                    alt="projet blog"
                    className="individual-portfolio-image"
                  />
                </div>
                <p>Site de financial tracker personnel.</p>
                <p className="technos-p">Techno: React JS, Css, Firestore</p>
                <p>Réalisé en Février 2022</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/LoisBonsignore/Delivrium-front"
              className="project-link"
            >
              <div className="individual-portfolio-container">
                <h4>De-livre-ium</h4>
                <div className="image-div">
                  <img
                    src={DeLivreIum}
                    alt="projet de-livre-ium"
                    className="individual-portfolio-image"
                  />
                </div>
                <p>Réseau social de critique de livres.</p>
                <p className="technos-p">Technos: React, CSS, Node, Express, MongoDB</p>
                <p>Réalisé en Octobre 2021</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/LoisBonsignore/App-Meteo_React-Native"
              className="project-link"
            >
              <div className="individual-portfolio-container">
                <h4>App Meteo</h4>
                <div className="image-div">
                  <img
                    src={appMeteo}
                    alt="projet de-livre-ium"
                    className="individual-portfolio-image-app"
                  />
                </div>
                <p>Application météo réalisé avec l'API OpenWeather</p>
                <p className="technos-p">Technos: React Native, Expo, API OpenWeather</p>
                <p>Réalisé en Octobre 2021</p>
              </div>
            </a>
          </div>
        </div>
        <div className="more-container">
          <a href="https://github.com/LoisBonsignore">
            <h4>
              Vous pouvez consulter mes autres projets sur mon profil GitHub{" "}
              <img src={GitHub} alt="github" className="icon-github" />
            </h4>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
