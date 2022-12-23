import React from "react";
import logo from "./Mechanic.jpg";
import logo1 from "./Mechanic1.jpg";

import "../Nav.css";

function Logo() {
  const imgStyle = {
    width: "9rem",
    height: "9rem",
  };

  const style = { alignItems: "center", gap: "0.5rem" };

  return (
    <div className="logo flex" style={style}>
      <img src={logo} style={imgStyle}></img>
      <h1>AutoMotriz</h1>
    </div>
  );
}

export default Logo;
