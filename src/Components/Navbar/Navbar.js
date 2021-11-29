import React, { useState } from "react";
import "./Navbar.css";

import list from "../../assets/list.svg"

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-title">
          <h2>Loïs Bonsignore</h2>
        </div>
        <div className="navbar-menu">
          <div id="navbar-menu-element-comp"><div className="navbar-menu-background"><h2>Compétences</h2></div></div>
          <div id="navbar-menu-element-portfolio"><div className="navbar-menu-background"><h2 >Portfolio</h2></div></div>
          <div id="navbar-menu-element-cv"><div className="navbar-menu-background"><h2>CV</h2></div></div>
          <div id="navbar-menu-element-contact"><div className="navbar-menu-background"><h2>Contact</h2></div></div>
        </div>
      </div>
      <div className="hidden-nav-container">
      { menu ?
      <div className="hidden-navbar-container">
        <div className="menu-button-container-after">
        <img src={list}  alt="" onClick={() => setMenu(current => !current)} className="menu-button" />
          </div>
          <div className="hidden-nav-menu">
          <p className="navbar-menu-element">Compétences</p>
          <p className="navbar-menu-element">Portfolio</p>
          <p className="navbar-menu-element">CV</p>
          <p className="navbar-menu-element">Contact</p>
        </div>
      </div> :
      <div className="menu-button-container">
          <img src={list}  alt="" onClick={() => setMenu(current => !current)} className="menu-button" />
      </div>
    }
    </div>
    </nav>
  );
}

export default Navbar;
