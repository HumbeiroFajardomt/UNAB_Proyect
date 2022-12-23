import React from "react";

function UserData(props) {
  const { data } = props;
  const { id_User, name, password } = data;
  return (
    <div className="container">
      <p className="Name"> User : {id_User}</p>
      <p className="Name"> Name : {name}</p>
    </div>
  );
}
//<p className="Description"> Request Mantto : {password}</p>
export default UserData;
