import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Buttom from "../../components/forms/buttom";
import Input from "../../components/forms/Input";
import NavBar from "../../components/NavBar";
import UserContext from "../../contexts/UserContext";
import ClientsData from "./ClientsData";

function Messages() {
  const id_Client = useContext(UserContext).user;
  async function fetchData() {
    const res = await fetch("http://localhost:8080/clients/" + id_Client);
    const documents = await res.json();
    setDocuments(documents);
    console.log(documents);
  }

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <section className="login">
        <div>
          {documents.map((document) => (
            <ClientsData data={document}></ClientsData>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Messages;
