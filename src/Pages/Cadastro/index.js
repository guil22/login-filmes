import React, { useState, useContext } from "react";
import "./style.css";
import { AuthContext } from "../../contexts/auth";

function Cadastro() {
  const { cadastro } = useContext(AuthContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password, userName });
    cadastro(userName, email, password);
  };

  return (
    <div id="cadastro">
      <h1 className="title">Cadastro</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="userName">Nome de Usuário</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
