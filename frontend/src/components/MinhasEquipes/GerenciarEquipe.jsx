import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import {
  deleteEquipeServer,
  selectEquipeById,
  updateEquipeServer,
} from "../../storeConfig/equipesSlice";
import {
  deleteEventoServer,
  selectAllEventos,
} from "../../storeConfig/eventosSlice";
import {
  getEquipeAtiva,
  removeMember,
} from "../../storeConfig/loggedUserSlice";
import {
  deleteTarefaServer,
  selectAllTarefas,
  updateTarefaServer,
} from "../../storeConfig/tarefasSlice";

function GerenciarEquipe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const tarefas = useSelector(selectAllTarefas);
  const eventos = useSelector(selectAllEventos);
  const equipe = useSelector((state) =>
    selectEquipeById(state, equipeAtiva.equipe.id)
  );
  const token = useSelector(state => state.loggedUser.token)

  const handleExcluirMembro = (m) => {
    tarefas
      .filter((t) => t.equipe === equipeAtiva.equipe.id)
      .forEach((t) => {
        if (t.responsavel === m.id) {
          let novaTarefa = { ...t, responsavel: 0 };
          dispatch(updateTarefaServer({tarefa: novaTarefa, token}));
        }
      });

    let equipeAtualizada = {
      ...equipe,
      membros: equipe.membros.filter((id) => id !== m.id),
    };

    dispatch(updateEquipeServer({equipe:equipeAtualizada, token}));
    dispatch(removeMember(m.id));
  };

  const handleExcluirEquipe = () => {
    tarefas
      .filter((t) => t.equipe === equipeAtiva.equipe.id)
      .forEach((t) => {
        dispatch(deleteTarefaServer(t));
      });
    eventos
      .filter((e) => e.equipe === equipeAtiva.equipe.id)
      .forEach((e) => {
        dispatch(deleteEventoServer(e));
      });
    dispatch(deleteEquipeServer(equipeAtiva.equipe.id));
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Gerencie sua equipe</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          {equipeAtiva.equipe.membros.map((m) => {
            return (
              <div className="card card-membro" key={m.id}>
                <img className="img-fluid" src={semFoto} alt="foto membro" />

                <div className="text-center pt-2">
                  <p className="">ID: {m.id}</p>
                  <p className="">{m.nome}</p>
                  <p className="">{m.email}</p>
                  <p className="">{m.tel}</p>
                </div>
                <hr />
                <div className="text-center">
                  <span
                    className="btn btn-danger"
                    onClick={() => {
                      handleExcluirMembro(m);
                    }}
                  >
                    Excluir Membro
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        <section className="menu">
          <Link to={"addMembro"}>
            <button type="button" className="btn btn-primary">
              Adicionar membro
            </button>
          </Link>
          <Link to={"/"}>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleExcluirEquipe}
            >
              Excluir equipe
            </button>
          </Link>
          <Link to={"/formEquipe"} state={{ equipe: equipe }}>
            <span className="btn btn-primary">Editar equipe</span>
          </Link>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Voltar
          </button>
        </section>
      </main>
    </div>
  );
}

export default GerenciarEquipe;
