import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getIsGerente } from "../../storeConfig/loggedUserSlice";
import {
  deleteTarefaServer,
  updateTarefaServer,
} from "../../storeConfig/tarefasSlice";

function MenuTarefa({ tarefa }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.loggedUser.id);
  const isGerente = useSelector(getIsGerente);
  const [minha, setMinha] = useState(-1);

  useEffect(() => {
    idUser === tarefa.responsavel ? setMinha(1) : setMinha(0);
  }, [idUser, tarefa.responsavel]);

  const handleAceitarTarefa = () => {
    dispatch(updateTarefaServer({ ...tarefa, responsavel: idUser }));
    navigate(-1);
  };

  const handleDevolverTarefa = () => {
    dispatch(updateTarefaServer({ ...tarefa, responsavel: 0 }));
    navigate(-1);
  };

  const hadleExcluirTarefa = () => {
    dispatch(deleteTarefaServer(tarefa));
    navigate(-1);
  };

  if (isGerente) {
    if (minha) {
      return (
        <section className="menu">
          <button
            type="button"
            className="btn btn-success"
            onClick={hadleExcluirTarefa}
          >
            Finalizar tarefa
          </button>

          <button
            type="button"
            className="btn btn-warning"
            onClick={handleDevolverTarefa}
          >
            Devolver Tarefa
          </button>

          <Link
            to={"/" + tarefa.equipe + "/task/" + tarefa.id + "/atribuir"}
            state={{ tarefa }}
          >
            <button type="button" className="btn btn-primary">
              Atribuir Tarefa
            </button>
          </Link>

          <Link to={"/" + tarefa.equipe + "/formTarefa"} state={{ tarefa }}>
            <button type="button" className="btn btn-primary">
              Editar Tarefa
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-danger"
            onClick={hadleExcluirTarefa}
          >
            Excluir tarefa
          </button>
        </section>
      );
    } else {
      return (
        <section className="menu">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAceitarTarefa}
          >
            Aceitar tarefa
          </button>

          <button
            type="button"
            className="btn btn-warning"
            onClick={handleDevolverTarefa}
          >
            Devolver Tarefa
          </button>

          <Link
            to={"/" + tarefa.equipe + "/task/" + tarefa.id + "/atribuir"}
            state={{ tarefa }}
          >
            <button type="button" className="btn btn-primary">
              Atribuir tarefa
            </button>
          </Link>

          <Link to={"/" + tarefa.equipe + "/formTarefa"} state={{ tarefa }}>
            <button type="button" className="btn btn-primary">
              Editar Tarefa
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-danger"
            onClick={hadleExcluirTarefa}
          >
            Excluir tarefa
          </button>
        </section>
      );
    }
  } else {
    if (minha) {
      return (
        <section className="menu">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleDevolverTarefa}
          >
            Devolver Tarefa
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={hadleExcluirTarefa}
          >
            Finalizar tarefa
          </button>
        </section>
      );
    } else {
      return (
        <section className="menu">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAceitarTarefa}
          >
            Aceitar tarefa
          </button>
        </section>
      );
    }
  }
}

export default MenuTarefa;
