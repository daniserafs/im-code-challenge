import React from "react";
import "./styles/Home.css";
import SlideCard from "./SlideCard";

function Home() {
  return (
    <div className="Rectangle">
      <div className="AdaWendy">
        <p>Nós somos o futuro</p>
        <h1>
          Segurança do <br></br>Trabalho
        </h1>
        <p className="futuro">
          O projeto destinado a revolucionar <br></br> a área de segurança do
          trabalho
        </p>
      </div>
      <div className="Practicality">
        <h1>Praticidade</h1>
        <h2>
          Tudo que você precisa <br></br> na palma da sua mão.
        </h2>
        <p className="Practicality">
          Nosso aplicativo tem por objetivo proporcionar novas <br></br>{" "}
          experiências de controle dos equipamentos de proteção.
        </p>
        <ul>
          <li>Acesso Seguro</li>
          <li>Gestão de dados eficaz</li>
          <li>Acompanhamento de pedidos em tempo real</li>
        </ul>
        <p className="Practicality">
          O aplicativo será designado para iOS e Android
        </p>
      </div>
    </div>
  );
}

export default Home;
