import { React, useState, Fragment } from "react";
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
import ConfirmationModal from "../Reusable/ConfirmationModal";

function GerenciarEquipe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const tarefas = useSelector(selectAllTarefas);
  const eventos = useSelector(selectAllEventos);
  const equipe = useSelector((state) =>
    selectEquipeById(state, equipeAtiva.equipe.id)
  );

  const handleExcluirMembro = (m) => {
    tarefas
      .filter((t) => t.equipe === equipeAtiva.equipe.id)
      .forEach((t) => {
        if (t.responsavel === m.id) {
          let novaTarefa = { ...t, responsavel: 0 };
          dispatch(updateTarefaServer(novaTarefa));
        }
      });

    let equipeAtualizada = {
      ...equipe,
      membros: equipe.membros.filter((id) => id !== m.id),
    };

    dispatch(updateEquipeServer(equipeAtualizada));
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

  const [modalShow, setModalShow] = useState("");
  const [modalEquipe, setModalEquipe] = useState(false);

  return (
    <>
      <ConfirmationModal
        show={modalEquipe}
        handleClose={() => {
          setModalEquipe(false);
        }}
        callBack={() => {
          handleExcluirEquipe();
          navigate("/minhasEquipes")
        }}
        msg={
          "Deseja Excluir a equipe " +
          equipeAtiva.equipe.nome +
          " definitivamente?"
        }
      />
      <div className="corpo">
        <header className="container cabecalho">
          <h1 className="app-name">Project Simple</h1>
        </header>

        <main className="container">
          <h3 className="text-center my-3">Gerencie sua equipe</h3>
          <section className="d-flex flex-wrap justify-content-evenly">
            {equipeAtiva.equipe.membros.map((m) => {
              return (
                <Fragment key={m.id}>
                  <ConfirmationModal
                    show={modalShow === m.id ? true : false}
                    handleClose={() => {
                      setModalShow("");
                    }}
                    callBack={() => {
                      handleExcluirMembro(m);
                    }}
                    msg={"Deseja Excluir o membro " + m.nome + "?"}
                  />
                  <div className="card card-membro">
                    <img
                      className="img-fluid"
                      src={semFoto}
                      alt="foto membro"
                    />

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
                          setModalShow(m.id);
                        }}
                      >
                        Excluir Membro
                      </span>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </section>

          <section className="menu">
            <Link to={"addMembro"}>
              <button type="button" className="btn btn-success">
                Adicionar membro
              </button>
            </Link>
            
            <Link to={"/formEquipe"} state={{ equipe: equipe }}>
              <span className="btn btn-primary">Editar equipe</span>
            </Link>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setModalEquipe(true);
              }}
            >
              Excluir equipe
            </button>

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
    </>
  );
}

export default GerenciarEquipe;
