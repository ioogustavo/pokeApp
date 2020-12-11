import React from "react";
import "./style.css";
import Pokebola from "../../images/pokebola.png";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/">
        <img src={Pokebola} alt="Pokebola"/>
      </NavLink>
    </div>
  );
}

export default Navbar;
