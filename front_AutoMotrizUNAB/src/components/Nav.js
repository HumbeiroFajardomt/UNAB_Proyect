import React from "react";
import { Link } from "react-router-dom";
import Home from "../views/Home/Home";
import Buttom from "./forms/buttom";
import Logo from "./forms/Logo";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <ul className="container flex">
          <li>
            <Link to={"/"}>
              {" "}
              <Logo></Logo>{" "}
            </Link>
          </li>

          <li>
            <Link to={"/login"}>
              <Buttom style="wire">Log in</Buttom>
            </Link>
          </li>
        </ul>
      </nav>
      <Home></Home>
    </div>

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
