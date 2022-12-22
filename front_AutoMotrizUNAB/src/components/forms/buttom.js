import React from "react";
import "./forms.css";

//todos los componenete de react ,props por defecto para hacerlo modular
//parametro standar proms, propiedad childrem
function Buttom(proms) {
  const { children, onClick, type, style } = proms;

  return (
    <button className={style + "-button"} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Buttom;
