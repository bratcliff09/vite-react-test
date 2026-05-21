import React from "react";
import { useParams } from "react-router";

function Dyna() {
  const { id } = useParams();

  return (
    <div>
      <h1>Dyna</h1>
      <p>id: {id} </p>
    </div>
  );
}

export default Dyna;
