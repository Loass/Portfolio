import React from "react";

import Uppertown from '../../../assets/Uppertown.png';

import './Portfolio.css';

function Portfolio() {

    return(
        <div className="portfolio-general-container">
            <h2 className="comp-title">Portfolio</h2>
            <div className="portfolio-container">
                <div className="individual-portfolio-container">
                    <img src={Uppertown} alt="projet uppertown" />
                    <h4>Uppertown</h4>
                    <p>Site web d'investissement immobilier en crowdfunding.</p>
                    <p>React, CSS, Node, Express, MongoDB</p>
                    <p>Réalisé en Novembre 2021</p>
                </div>
                <div className="individual-portfolio-container">
                    <img src={Uppertown} alt="projet uppertown" />
                    <h4>Uppertown</h4>
                    <p>Site web d'investissement immobilier en crowdfunding sous forme de tokens.</p>
                    <p>React, CSS, Node, Express, MongoDB</p>
                    <p>Réalisé en Novembre 2021</p>
                </div>
                <div className="individual-portfolio-container">
                    <img src={Uppertown} alt="projet uppertown" />
                    <h4>Uppertown</h4>
                    <p>Site web d'investissement immobilier en crowdfunding sous forme de tokens.</p>
                    <p>React, CSS, Node, Express, MongoDB</p>
                    <p>Réalisé en Novembre 2021</p>
                </div>
                <div className="individual-portfolio-container">
                    <img src={Uppertown} alt="projet uppertown" />
                    <h4>Uppertown</h4>
                    <p>Site web d'investissement immobilier en crowdfunding sous forme de tokens.</p>
                    <p>React, CSS, Node, Express, MongoDB</p>
                    <p>Réalisé en Novembre 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;