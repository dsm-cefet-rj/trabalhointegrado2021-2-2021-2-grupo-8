import React from "react";
import { Link } from "react-router-dom";

function CardTarefa({ tarefa }) {
  return (
    <Link
      key={tarefa.idTask}
      className="tarefa-card"
      style={{ textDecoration: "none", color: "black" }}
      key={tarefa.idTask}
      to={"/" + tarefa.idTeam + "/task/" + tarefa.idTask}
      state={{ tarefa: tarefa }}
    >
      {tarefa.name}
    </Link>
  );
}


export default CardTarefa;
