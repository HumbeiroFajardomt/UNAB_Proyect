import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Input from "../../components/forms/Input";
import Buttom from "../../components/forms/buttom";

import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

function Clients() {
  const { setUser } = useContext(UserContext);
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  function onButtonClick(event) {
    event.preventDefault();
    setUser(userID);
    navigate("/messages");
  }

  ///////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="container">
      <NavBar></NavBar>
      <form className="flex card form">
        <Input onChange={(event) => setUserID(event.target.value)}>
          Id Client
        </Input>

        <Buttom onClick={onButtonClick} type="submit" style="fill">
          Clients Search
        </Buttom>
      </form>
    </div>
  );
}

export default Clients;
