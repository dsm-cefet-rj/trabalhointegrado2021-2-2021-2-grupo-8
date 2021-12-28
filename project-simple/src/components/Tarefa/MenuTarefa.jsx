import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  atribuirTarefa,
  devolverTarefa,
  excluirTarefa
} from "../../storeConfig/equipeAtivaSlice";

function MenuTarefa({ tarefa }) {
  const dispatch = useDispatch();
  const isGerente = useSelector((state) => state.equipeAtiva.isGerente);
  const loggedUser = useSelector((state) => state.loggedUser);
  const [minha, setMinha] = useState(-1);

  useEffect(() => {
    loggedUser.id === tarefa.idResponsavel ? setMinha(1) : setMinha(0);
  }, []);

  const handleAceitarTarefa = () => {
    const novaTarefa = { ...tarefa };
    novaTarefa.idResponsavel = loggedUser.id;
    dispatch(atribuirTarefa(novaTarefa));
  };

  const handleDevolverTarefa = () => {
    dispatch(devolverTarefa(tarefa));
  };

  const hadleExcluirTarefa = () => {
    dispatch(excluirTarefa(tarefa));
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
