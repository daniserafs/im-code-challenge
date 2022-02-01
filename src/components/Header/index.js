import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/" className="Link">
            Inicio
          </Link>
          <Link to="/projeto" className="Link">
            Projeto
          </Link>
          <Link to="/contato" className="Link">
            Contato
          </Link>
          <Link to="/equipe" className="Link">
            Equipe
          </Link>
        </nav>
      </BrowserRouter>
    </>
  );
}

export default Header;
