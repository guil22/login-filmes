import React, { useState, useContext } from "react";
import "./style.css";
import { AuthContext } from "../../contexts/auth";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password });
    login(email, password); // integração c context e api
  };

  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <p>{String(authenticated)} </p>
      <form className="form" onSubmit={handleSubmit}>
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
      <div>
        <h3>Ainda não é registrado?</h3>
        <Link to={`/Cadastro`} className="btn" type="submit">
          Criar conta
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
