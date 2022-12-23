import React, { useContext, useEffect, useState } from "react";
import "../RegCompts/RegCompts.css";
import "../../components/forms/Input";
import QueryData from "./QueryData";
import ComptsContext from "../../contexts/ComptsContext";
import UserContext from "../../contexts/UserContext";
import NavBar from "../../components/NavBar";

function RegCompts() {
  const id_component = useContext(ComptsContext).compts;

  async function fetchData() {
    const res = await fetch("http://localhost:8080/components/" + id_component);
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
            <QueryData data={document}></QueryData>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RegCompts;
