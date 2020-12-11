import React, { useEffect, useState } from "react";
import ListStats from "./ListStats";

export default function Abilities(props) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    props && getStats(props);
  }, [props]);

  function getStats(data) {
    let nameStats = data.props.slice(0, 3).map((e) => {
      return e.base_stat;
    });
    setStats(nameStats);
  }

  return (
    <div>
      <ListStats props={stats} />
    </div>
  );
}
