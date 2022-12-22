import React, { useState, useContext, useEffect } from "react";
import UserLogContext from "../contexts/UserLogContext";
import UserData from "./UserData";

function UserView() {
  const id_User = useContext(UserLogContext).userLog;
  async function fetchData() {
    const res = await fetch("http://localhost:8080/user/" + id_User);
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
          <UserData data={document}></UserData>
        ))}
      </div>
    </section>
  );
}

export default UserView;
