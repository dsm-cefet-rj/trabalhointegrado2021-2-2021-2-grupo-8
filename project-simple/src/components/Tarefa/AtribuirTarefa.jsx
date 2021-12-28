import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import { atribuirTarefa } from "../../storeConfig/equipeAtivaSlice";

function AtribuirTarefa() {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const equipeAtiva = useSelector(state => state.equipeAtiva)

  const [resultado, setResultado] = useState([]);
  const [membros, setMembros] = useState([]);

  const location = useLocation();
  const { tarefa } = location.state;

  let busca = "";

  useEffect(() => {
    let members = [... equipeAtiva.membros]
    members.push(equipeAtiva.gerente);
    setMembros(members);
    setResultado(members);
  }, [equipeAtiva]);

  const handleBusca = (user) => {
    const regex = new RegExp(busca, "i");
    return regex.test(user.name) || regex.test(user.id);
  };

  const handleAtribuirTarefa = (idUser) => {
    const novaTarefa = { ...tarefa };
    novaTarefa.idResponsavel = idUser;
    dispatch(atribuirTarefa(novaTarefa));
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
            onClick={(e) => {
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
                  <p className="text-center">{r.id}</p>
                  <p className="text-center">{r.name}</p>
                </div>
                <hr />
                <Link to={"/" + equipeAtiva.id + "/home"}>
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
