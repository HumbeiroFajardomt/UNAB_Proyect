import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttom from "../../components/forms/buttom";
import Input from "../../components/forms/Input";
import UserContext from "../../contexts/UserContext";
import UserLogContext from "../../contexts/UserLogContext";
import "./Login.css";

function Login() {
  /*
  async function onSubmit(evento) {
    //Previene que se recarge la pag cuando se oprime el boton de log in
    evento.preventDefault();

    const res = await fetch("http://localhost:8080/login", { 
      method: "GET",
      mode: "cors",
      headers: {
        user: user,
        password: password,
      },
    });
    const data = await res.json();
    alert("Tu Token es:" + data.token);
  }

  const [user, setUser] = useState("");

  function onUserChange(e) {
    setUser(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  function onButtonClick(event) {
    event.preventDefault();
    setUser(userID);
    navigate("/user");
  }
*/

  const { setUserLog } = useContext(UserLogContext);
  const [userLogID, setUserLogID] = useState("");
  const navigate = useNavigate();

  function onButtonClick(event) {
    event.preventDefault();
    setUserLog(userLogID);
    navigate("/user");
  }

  return (
    <div>
      <section className="container">
        <h1>Welcome in AutoMotriz Platform</h1>
        <div className="login">
          <form className="flex form">
            <Input onChange={(event) => setUserLogID(event.target.value)}>
              Company ID User
            </Input>
            <Input
              type="password"
              //onChange={(e) => setPassword(e.target.value)}
            >
              Password
            </Input>
            <Buttom onClick={onButtonClick} style="wire" type="submit">
              Sing In
            </Buttom>
          </form>
        </div>
      </section>
      ;
    </div>
  );
}

export default Login;
