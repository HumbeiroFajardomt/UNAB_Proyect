import React, { useContext, useState } from "react";
import "./Components.css";
import Buttom from "../../components/forms/buttom";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/forms/Input";
import ComptsContext from "../../contexts/ComptsContext";
import NavBar from "../../components/NavBar";

function Components() {
  /*const { setUser } = useContext(UserContext);
  const [userID, setUserID] = useState("");
  const navigate = useNavigate(); 
  function onButtonClick(event) {
    event.preventDefault();
    setUser(userID);
    navigate("/clients");
  }
 */
  const { setCompts } = useContext(ComptsContext);
  const [comptsID, setComptsID] = useState("");
  const navigate = useNavigate();
  function onButtonClick(event) {
    event.preventDefault();
    setCompts(comptsID);
    navigate("/queryCompts");
  }
  return (
    <section className="container">
      <NavBar></NavBar>
      <div className="card">
        <div>
          <h1>The Proper Maintenance for your equipment</h1>
        </div>
      </div>

      <div className="label card">
        <Link to={"/regCompts"}>
          <Buttom style="fill">Components Registration</Buttom>
        </Link>
      </div>
      <form className="flex card form">
        <Input onChange={(event) => setComptsID(event.target.value)}>
          Id Component
        </Input>

        <Buttom onClick={onButtonClick} style="fill">
          Components Query
        </Buttom>
      </form>
    </section>
  );
}

export default Components;
