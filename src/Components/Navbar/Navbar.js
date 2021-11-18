import React, { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-title">
          <h2>Loïs Bonsignore</h2>
        </div>
        <div className="navbar-menu">
          <p className="navbar-menu-element">Portfolio</p>
          <p className="navbar-menu-element">Compétences</p>
          <p className="navbar-menu-element">CV</p>
          <p className="navbar-menu-element">Contact</p>
        </div>
      </div>
      <div className="hidden-nav-container">
      { menu ?
      <div>
          <button onClick={() => setMenu(current => !current)} className="menu-button">menu</button>
          <div className="hidden-nav-menu">
          <p className="navbar-menu-element">Portfolio</p>
          <p className="navbar-menu-element">Compétences</p>
          <p className="navbar-menu-element">CV</p>
          <p className="navbar-menu-element">Contact</p>
        </div>
      </div> :
      <div>
          <button onClick={() => setMenu(current => !current)} className="menu-button">menu</button>
      </div>
    }
    </div>
    </nav>
  );
}

export default Navbar;
