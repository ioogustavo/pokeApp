import React from "react";
import "./style.css";

export default function ListAbilities(props) {
  return (
    <div className="listAbilities">
      <h5>Habilidades:</h5>
      <div className="listaAbilitiesBadge">
        {props &&
          props.props.map((e) => {
            return (
              <>
                <span className="badge badge-dark">{e}</span>
                <br />
              </>
            );
          })}
      </div>
    </div>
  );
}
