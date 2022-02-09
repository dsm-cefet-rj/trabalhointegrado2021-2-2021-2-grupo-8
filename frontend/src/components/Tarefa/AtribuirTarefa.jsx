import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import { getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import { updateTarefaServer } from "../../storeConfig/tarefasSlice";

function AtribuirTarefa() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);

  const [resultado, setResultado] = useState([]);
  const [membros, setMembros] = useState([]);

  const location = useLocation();
  const { tarefa } = location.state;

  const token = useSelector((state) => state.loggedUser.token);

  let busca = "";

  useEffect(() => {
    let members = [...equipeAtiva.equipe.membros];
    setMembros(members);
    setResultado(members);
  }, [equipeAtiva]);

  const handleBusca = (user) => {
    const regex = new RegExp(busca, "i");
    return regex.test(user.nome) || regex.test(user.id);
  };

  const handleAtribuirTarefa = (idUser) => {
    const novaTarefa = { ...tarefa, responsavel: idUser };
    dispatch(updateTarefaServer({ tarefa: novaTarefa, token }));
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Selecione o Membro</h3>

        <section className="container mb-3 text-center">
          <input
            type="text"
            className="text-center form-control mb-3"
            placeholder="Buscar usuário"
            onChange={(e) => {
              busca = e.target.value;
            }}
          />
          <span
            className="btn btn-primary"
            onClick={() => {
              setResultado(membros.filter(handleBusca));
            }}
          >
            Buscar
          </span>
        </section>

        <section className="d-flex flex-wrap justify-content-evenly">
          {resultado.map((r) => {
            return (
              <div
                className="card card-membro d-flex justify-content-center"
                key={r.id}
              >
                <img className="img-fluid" src={semFoto} alt="foto membro" />

                <div className="mt-2">
                  <p className="text-center">ID: {r.id}</p>
                  <p className="text-center">{r.nome}</p>
                </div>
                <hr />
                <Link to={"/" + equipeAtiva.equipe.id + "/home"}>
                  <div className="text-center">
                    <span
                      className="btn btn-success"
                      onClick={() => handleAtribuirTarefa(r.id)}
                    >
                      Atribuir
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>

        <section className="menu">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              navigate(-2);
            }}
          >
            Voltar
          </button>
        </section>
      </main>
    </div>
  );
}

export default AtribuirTarefa;
