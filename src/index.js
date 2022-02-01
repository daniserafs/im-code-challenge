import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Inicio from "./components/Inicio";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Inicio />
  </React.StrictMode>,
  document.getElementById("root")
);
