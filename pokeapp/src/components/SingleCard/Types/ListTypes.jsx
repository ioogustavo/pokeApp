import React from "react";
import "./style.css";

export default function ListAbilities(props) {
  return (
    <div className="listTypes">
      <h5>Tipos:</h5>
      <div className="listTypesBadge">
        {props &&
          props.props.map((e) => {
            return (
              <>
                <span className="badge badge-secondary">{e}</span>
                <br />
              </>
            );
          })}
      </div>
    </div>
  );
}
