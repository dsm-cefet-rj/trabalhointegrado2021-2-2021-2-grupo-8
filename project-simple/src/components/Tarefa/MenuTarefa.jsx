import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MenuTarefa({ tarefa, isGerente }) {
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.loggedUser.id);
  const [minha, setMinha] = useState(-1);

  useEffect(() => {
    idUser === tarefa.idResponsavel ? setMinha(1) : setMinha(0);
  }, []);

  const handleAceitarTarefa = () => {
    console.log(tarefa);
  };

  const handleDevolverTarefa = () => {
    console.log(tarefa);
  };

  const hadleExcluirTarefa = () => {
    console.log(tarefa);
  };

  if (isGerente) {
    if (minha) {
      return (
        <section className="menu">
          <Link to={"/" + tarefa.idTeam + "/home"}>
            <button
              type="button"
              className="btn btn-success"
              onClick={hadleExcluirTarefa}
            >
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

          <Link
            to={"/" + tarefa.idTeam + "/task/" + tarefa.idTask + "/atribuir"}
            state={{ tarefa }}
          >
            <button type="button" className="btn btn-primary">
              Atribuir tarefa
            </button>
          </Link>

          <Link to={"/" + tarefa.idTeam + "/home"}>
            <button
              type="button"
              className="btn btn-danger"
              onClick={hadleExcluirTarefa}
            >
              Excluir tarefa
            </button>
          </Link>
        </section>
      );
    } else {
      return (
        <section className="menu">
          <Link to={"/" + tarefa.idTeam + "/home"}>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAceitarTarefa}
            >
              Aceitar tarefa
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

          <Link
            to={"/" + tarefa.idTeam + "/task/" + tarefa.idTask + "/atribuir"}
            state={{ tarefa }}
          >
            <button type="button" className="btn btn-primary">
              Atribuir tarefa
            </button>
          </Link>

          <Link to={"/" + tarefa.idTeam + "/home"}>
            <button
              type="button"
              className="btn btn-danger"
              onClick={hadleExcluirTarefa}
            >
              Excluir tarefa
            </button>
          </Link>
        </section>
      );
    }
  } else {
    if (minha) {
      return (
        <section className="menu">
          <Link to={"/" + tarefa.idTeam + "/home"}>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleDevolverTarefa}
            >
              Devolver Tarefa
            </button>
          </Link>

          <Link to={"/" + tarefa.idTeam + "/home"}>
            <button
              type="button"
              className="btn btn-success"
              onClick={hadleExcluirTarefa}
            >
              Finalizar tarefa
            </button>
          </Link>
        </section>
      );
    } else {
      return (
        <section className="menu">
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
    }
  }
}

export default MenuTarefa;
