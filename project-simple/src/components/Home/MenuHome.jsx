import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MenuHome({ isGerente, idTeam }) {

  const [display, setDisplay] = useState("");
  

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [isGerente, idTeam]);

  
    return (
      <section className="menu">
        <Link to={"/"+ idTeam +"/novaTarefa"}>
          <span className="btn btn-primary">Criar Tarefa</span>
        </Link>
        <Link to={"/"+ idTeam +"/eventos"}>
          <span className="btn btn-primary">Eventos</span>
        </Link>
        <Link className={`${display}`} to={"/"+ idTeam + "/gerenciarEquipe"}>
          <span className="btn btn-primary">Gerenciar Equipe</span>
        </Link>  
        <Link to={"/"}>
          <span className="btn btn-secondary">Minhas Equipes</span>
        </Link>
      </section>
    );

  }


export default MenuHome;
