import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

import ClientsData from "./ClientsData";

function Clients() {
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
    <section className="login">
      <div>
        {documents.map((document) => (
          <ClientsData data={document}></ClientsData>
        ))}
      </div>
    </section>
  );
}

export default Clients;
