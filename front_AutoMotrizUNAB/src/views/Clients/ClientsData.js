import React from "react";

function ClientsData(props) {
  const { data } = props;
  const { id_Client, name, age, email, password } = data;
  return (
    <div className="container">
      <p className="Name"> Client : {id_Client}</p>
      <p className="Name"> Name : {name}</p>
      <p className="Brand"> Age : {age}</p>
      <p className="MFG Date">Email : {email}</p>
    </div>
  );
}
//<p className="Description"> Request Mantto : {password}</p>
export default ClientsData;
