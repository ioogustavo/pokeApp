import React from "react";
import "./style.css";
import Pokebola from "../../images/pokebola.png";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="http://localhost:3000">
        <img src={Pokebola} alt="Pokebola"/>
      </a>
    </div>
  );
}

export default Navbar;
