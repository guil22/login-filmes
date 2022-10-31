import React, { useState, useContext } from "react";
import "./style.css";
import { AuthContext } from "../../contexts/auth";

function Cadastro() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password });
    login(email, password); // integração c context e api
  };

  return (
    <div id="login">
      <h1 className="title">Cadastro</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="user">Nome de Usuário</label>
          <input
            type="user"
            name="user"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
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
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
