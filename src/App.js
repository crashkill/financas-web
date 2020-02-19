import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC " />
      <div className="content">
        <p>
          O sistema de <strong>Gerenciamento Financeiro</strong> dos projetos
          internos da <strong>GlobalHitss</strong>
        </p>
        <form>
          <label htmlFor="email">Digite o e-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite o seu e-mail corporativo"
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
