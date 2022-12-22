import React from "react";
import "../QueryCompts/QueryCompts.css";

function QueryData(props) {
  const { data } = props;
  const { name, brand, year, description, id_component } = data;

  return (
    <div className="dataQueries grid">
      <p className="id_component"> Id Component : {id_component}</p>
      <p className="Name"> Name : {name}</p>
      <p className="Brand"> Brand : {brand}</p>
      <p className="MFG Date">MFG Year {year}</p>
      <p className="Description">{description}</p>
    </div>
  );
}

export default QueryData;
