import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import Input from "../components/forms/Input";
import Buttom from "../components/forms/buttom";

import ClientsData from "./ClientsData";
import { useNavigate } from "react-router-dom";

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
    <div>
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
