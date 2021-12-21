import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MenuHome({ isGerente, equipe }) {

  const [display, setDisplay] = useState("");

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [isGerente]);

  return (
    <section className="menu">
      <span className="btn btn-primary">Eventos</span>
      <Link to={"/"}>
        <span className="btn btn-primary">Minhas Equipes</span>
      </Link>
      <Link className={`${display}`} to={"/" + equipe.id + "/gerenciarEquipe"}>
        <span className="btn btn-primary">Gerenciar Equipe</span>
      </Link>
    </section>
  );
}

export default MenuHome;
