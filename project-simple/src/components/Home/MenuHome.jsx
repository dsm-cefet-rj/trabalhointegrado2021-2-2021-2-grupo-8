import React from "react";
import { Link } from "react-router-dom";

function MenuHome({ gerente, equipe }) {
  if (gerente) {
    return (
      <section className="menu">
        <span className="btn btn-primary">Eventos</span>
        <Link to={"/" + equipe.id + "/gerenciarEquipe"}>
          <span className="btn btn-primary">Gerenciar Equipe</span>
        </Link>
        <Link to={"/"}>
          <span className="btn btn-primary">Minhas Equipes</span>
        </Link>
      </section>
    );
  } else {
    return (
      <section className="menu">
        <span className="btn btn-primary">Eventos</span>
        <Link to={"/"}>
          <span className="btn btn-primary">Minhas Equipes</span>
        </Link>
      </section>
    );
  }
}

export default MenuHome;
