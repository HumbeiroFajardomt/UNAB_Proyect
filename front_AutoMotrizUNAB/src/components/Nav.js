import React from "react";
import { Link } from "react-router-dom";
import Buttom from "./forms/buttom";
import Logo from "./forms/Logo";

function Nav() {
  return (
    <nav className="nav">
      <ul className="container flex">
        <li>
          <Link to={"/"}>
            {" "}
            <Logo></Logo>{" "}
          </Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link to={"/clients"}>Clients</Link>
        </li>
        <li>
          <Link to={"/components"}>Components</Link>
        </li>

        <li>
          <Link to={"/login"}>
            <Buttom style="wire">Log in</Buttom>
          </Link>
        </li>
      </ul>
    </nav>

    /*
    <nav className="nav">
      <ul className="container flex">
        <li>
          <Link to={"/"}>
            {" "}
            <Logo></Logo>{" "}
          </Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>{" "}
        </li>

        <li>
          <Link to={"/login"}>
            <Buttom style="wire">Log in</Buttom>
          </Link>
        </li>
      </ul>
    </nav>
    */
  );
}

export default Nav;
