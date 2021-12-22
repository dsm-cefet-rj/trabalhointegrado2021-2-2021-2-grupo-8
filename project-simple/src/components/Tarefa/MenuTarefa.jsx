import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MenuTarefa({ login, tarefa, atribuirTarefa, devolverTarefa }) {
  const navigate = useNavigate();

  const [minha, setMinha] = useState(-1);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (tarefa.idResponsavel == login.id) setMinha(1);
    else if (tarefa.idResponsavel != 0) {
      setDisplay("hide");
      setMinha(0);
    } else setMinha(0);
  }, [tarefa, login.id]);

  const handleAceitarTarefa = () => {
    atribuirTarefa(tarefa, login.id);
  };

  const handleDevolverTarefa = () => {
    devolverTarefa(tarefa);
  };

  if (!minha) {
    return (
      <section className={`menu ${display}`}>
        <Link to={"/" + tarefa.idTeam + "/home"}>
          <button
            type="button"
            className="btn btn-success"
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
        <Link to="form">
          <button type="button" className="btn btn-success">
            Finalizar tarefa
          </button>
        </Link>

        <Link to={"/" + tarefa.idTeam + "/home"}>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleDevolverTarefa}
          >
            Devolver Tarefa
          </button>
        </Link>
      </section>
    );
  }
}

export default MenuTarefa;
