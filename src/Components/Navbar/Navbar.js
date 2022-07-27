import React, { useState } from "react";
import "./Navbar.css";

import cv from "../../assets/CV-Lois-Bonsignore.pdf";
import list from "../../assets/list.svg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-title">
          <a href="#home" className="menu-a">
            <h2>Loïs Bonsignore</h2>
          </a>
        </div>
        <div className="navbar-menu">
          <a href="#comp" className="menu-a">
            <p className="menu-option">Compétences</p>
          </a>
          <a href="#portfolio" className="menu-a">
            <p className="menu-option">Portfolio</p>
          </a>
          <a href="#formation" className="menu-a">
            <p className="menu-option">Formation</p>
          </a>
          <a href="#contact" className="menu-a">
            <p className="menu-option">Contact</p>
          </a>
          <a href={cv} download className="button-cv">
            <p>Télechargez mon CV</p>
          </a>
        </div>
      </div>
      <div className="hidden-nav-container">
        {menu ? (
          <div className="hidden-navbar-container">
            <div className="menu-button-container-after">
              <img
                src={list}
                alt=""
                onClick={() => setMenu((current) => !current)}
                className="menu-button"
              />
            </div>
            <div className="hidden-nav-menu">
              <a href="#comp" className="menu-a">
                <p className="navbar-menu-element">Compétences</p>
              </a>
              <a href="#formation" className="menu-a">
                <p className="navbar-menu-element">Formation</p>
              </a>
              <a href="#portfolio" className="menu-a">
                <p className="navbar-menu-element">Portfolio</p>
              </a>
              <a href="#contact" className="menu-a">
                <p className="navbar-menu-element">Contact</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="menu-button-container">
            <img
              src={list}
              alt=""
              onClick={() => setMenu((current) => !current)}
              className="menu-button"
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
