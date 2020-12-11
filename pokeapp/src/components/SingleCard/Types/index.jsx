import React, { useEffect, useState } from "react";
import ListTypes from './ListTypes'

export default function Types(props) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    props && getTypes(props);
  }, []);

  function getTypes(data) {
    let nameTypes = data.props.map((e) => {
      return e.type.name;
    });
    setTypes(nameTypes);
  }

  return <div><ListTypes props={types} /></div>;
}
