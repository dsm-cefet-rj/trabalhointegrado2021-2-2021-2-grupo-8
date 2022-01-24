import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";

function MenuHome() {
  const equipeAtiva = useSelector(getEquipeAtiva);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    equipeAtiva.isGerente ? setDisplay("") : setDisplay("hide");
  }, [equipeAtiva]);

  return (
    <section className="menu ">
      <Link
        className={`${display}`}
        to={"/" + equipeAtiva.info.id + "/formTarefa"}
        state={{tarefa:{}}}
      >
        <span className="btn btn-primary">Criar Tarefa</span>
      </Link>
      <Link to={"/" + equipeAtiva.info.id + "/eventos"}>
        <span className="btn btn-primary">Eventos</span>
      </Link>
      <Link
        className={`${display}`}
        to={"/" + equipeAtiva.info.id + "/gerenciarEquipe"}
      >
        <span className="btn btn-primary">Gerenciar Equipe</span>
      </Link>
      <Link to={"/"}>
        <span className="btn btn-secondary">Minhas Equipes</span>
      </Link>
    </section>
  );
}

export default MenuHome;
