import React, { useState } from "react";

const ComptsContext = React.createContext();

export function ComptsProvider(props) {
  const { children } = props;

  const [compts, setCompts] = useState("");

  return (
    <ComptsContext.Provider value={{ compts, setCompts }}>
      {children}
    </ComptsContext.Provider>
  );
}

export default ComptsContext;
