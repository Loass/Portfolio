import React from "react";
// img
import Uppertown from "../../../assets/Uppertown_2.PNG";
import DeLivreIum from "../../../assets/De-livre-ium.PNG";
import AppMeteo from "../../../assets/App_meteo.PNG";
import Blog from "../../../assets/Blog.PNG";
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
                <p>Technos: React, CSS, Node, Express, MongoDB</p>
                <p>Réalisé en Novembre 2021</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/LoisBonsignore/App-Meteo_React-Native"
              className="project-link"
            >
              <div className="individual-portfolio-container">
                <h4>App meteo</h4>
                <div className="image-div">
                  <img
                    src={AppMeteo}
                    alt="projet meteo"
                    className="individual-portfolio-image-app"
                  />
                </div>
                <p>Application météo utilisant une API (OpenWeather).</p>
                <p>Techno: React Native</p>
                <p>Réalisé en Octobre 2021</p>
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
                <p>Technos: React, CSS, Node, Express, MongoDB</p>
                <p>Réalisé en Octobre 2021</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/LoisBonsignore/Blog"
              className="project-link"
            >
              <div className="individual-portfolio-container">
                <h4>Blog</h4>
                <div className="image-div">
                  <img
                    src={Blog}
                    alt="projet blog"
                    className="individual-portfolio-image"
                  />
                </div>
                <p>Site de création d'articles façon blog.</p>
                <p>Techno: React</p>
                <p>Réalisé en Septembre 2021</p>
              </div>
            </a>
          </div>
        </div>
        <div className="more-container">
          <a href="https://github.com/LoisBonsignore">
            <p>
              Vous pouvez consulter mes autres projets sur mon profil GitHub{" "}
              <img src={GitHub} alt="github" className="icon-github" />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
