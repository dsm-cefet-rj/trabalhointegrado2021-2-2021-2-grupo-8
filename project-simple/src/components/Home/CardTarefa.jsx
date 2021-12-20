import React from "react";
import { Link } from "react-router-dom";

function CardTarefa({ tarefa, gerente }) {
  return (
    <div key={tarefa.idTask} className="tarefa-card">
      <Link
        key={tarefa.idTask}
        to={"/" + tarefa.idTeam + "/task/" + tarefa.idTask}
        state={{ tarefa: tarefa, gerente: gerente }}
      >
        {tarefa.name}
      </Link>
    </div>
  );
}

export default CardTarefa;
