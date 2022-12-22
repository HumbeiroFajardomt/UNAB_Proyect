import React, { useState } from "react";

const UserLogContext = React.createContext();

export function UserLogProvider(props) {
  const { children } = props;

  const [userLog, setUserLog] = useState("");

  return (
    <UserLogContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </UserLogContext.Provider>
  );
}

export default UserLogContext;
