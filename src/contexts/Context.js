import React, { useState } from "react";

export const PesqContext = React.createContext();

export const PesqProvider = (props) => {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <PesqContext.Provider value={{ pesquisa, setPesquisa }}>
      {props.children}
    </PesqContext.Provider>
  );
};
