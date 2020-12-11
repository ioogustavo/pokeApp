import React, { useEffect, useState } from "react";
import ListAbilities from "./ListAbilities";

export default function Abilities(props) {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    props && getAbilities(props);
  }, []);

  function getAbilities(data) {
    let nameAbilities = data.props.map((e) => {
      return e.ability.name;
    });
    setAbilities(nameAbilities);
  }

  return (
    <div>
      <ListAbilities props={abilities} />
    </div>
  );
}
