import React from "react";
import Heart from "../../../images/heart.png";
import Attack from "../../../images/attack.png";
import Defense from "../../../images/defense.jpeg";
import "./style.css";

export default function ListAbilities(props) {
  return (
    <div>
      <h5>Estadisticas:</h5>
      {props && (
        <div className="listStats">
          <div className="heart">
            <img className="heart-img" src={Heart} alt="heart" />
            <h4>{props.props[0]}</h4>
          </div>

          <div className="attack">
            <img className="attack-img" src={Attack} alt="attack" />
            <h4>{props.props[1]}</h4>
          </div>

          <div className="defense">
            <img className="defense-img" src={Defense} alt="defense" />
            <h4>{props.props[2]}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
