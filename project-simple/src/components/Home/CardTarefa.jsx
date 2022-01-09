import React from "react";
import { Link } from "react-router-dom";

function CardTarefa({ tarefa }) {
  return (
    <Link
      className="tarefa-card"
      to={"/" + tarefa.equipe + "/task/" + tarefa.id}
      state={{ tarefa: tarefa }}
    >
      {tarefa.nome}
    </Link>
  );
}

export default CardTarefa;
