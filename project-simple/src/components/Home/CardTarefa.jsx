import React from "react";
import { Link } from "react-router-dom";

function CardTarefa({ tarefa }) {
  return (
    <div className="tarefa-card">
      <Link key={tarefa.idTask} to={"/" + tarefa.idTeam + "/task/" + tarefa.idTask}>
        {tarefa.name}
      </Link>
    </div>
  );
}

export default CardTarefa;
