import React from "react";
import "./style.css";

export default function ListAbilities(props) {
  return (
    <div className="listAbilities">
      <h5>Habilidades:</h5>
      <div className="listaAbilitiesBadge">
        {props.props &&
          props.props.map((e, i) => {
            return (
              <div key={i}>
                <span className="badge badge-dark">{e}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
