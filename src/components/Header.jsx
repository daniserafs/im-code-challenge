import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  const headerInfo = ["Inicio", "Projeto", "Contato", "Equipe"];
  const headerRoutes = ["/", "/projeto", "/contato", "/equipe"];
  return (
    <BrowserRouter>
      <nav>
        {headerInfo.map(function iterateHeaderInfo(info, i) {
          const toProp = headerRoutes[i];
          return (
            <NavLink
              to={toProp}
              key={i}
              style={function isActiveStyler({ isActive }) {
                return {
                  color: isActive ? "red" : "#000",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              {info}
            </NavLink>
          );
        })}
      </nav>
    </BrowserRouter>
  );
}

export default Header;
