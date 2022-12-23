import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import UserLogContext from "../../contexts/UserLogContext";
import UserData from "./UserData";

function UserView() {
  const id_User = useContext(UserLogContext).userLog;
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  if (!id_User) {
    return navigate("/login");
  }
  async function fetchData() {
    const res = await fetch("http://localhost:8080/user/" + id_User);
    const documents = await res.json();
    setDocuments(documents);
    console.log(documents);
  }

  return (
    <div className="container">
      <NavBar></NavBar>
      <section className="login">
        <div>
          {documents.map((document) => (
            <UserData data={document}></UserData>
          ))}
        </div>
      </section>
    </div>
  );
}

export default UserView;
