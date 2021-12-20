import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MenuTarefa({ login, tarefa, atribuirTarefa }) {
  const [minha, setMinha] = useState(-1);

  useEffect(() => {
    if (tarefa.idResponsavel == login.id) setMinha(1);
    else setMinha(0);
  }, [tarefa]);

  const handleAceitarTarefa = () => {
    atribuirTarefa(tarefa, login.id);
  };

  if (!minha) {
    return (
      <section className="menu">
        <Link to={"/" + tarefa.idTeam + "/home"}>
          <button
            type="button"
            className="btn btn-success"
            id="accept-task"
            onClick={handleAceitarTarefa}
          >
            Aceitar tarefa
          </button>
        </Link>
      </section>
    );
  } else {
    return (
      <section className="menu">
        
          <button
            type="button"
            className="btn btn-success"
            id="accept-task"
            onClick={handleAceitarTarefa}
          >
            Finalizar tarefa
          </button>
        
       
          <button
            type="button"
            className="btn btn-warning"
            id="accept-task"
            onClick={handleAceitarTarefa}
          >
            Reportar Problema
          </button>
        
      </section>
    );
  }
}

export default MenuTarefa;
