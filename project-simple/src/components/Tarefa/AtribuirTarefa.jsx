import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";

function AtribuirTarefa({ equipe, atribuirTarefa }) {
  let busca = "";

  const [resultado, setResultado] = useState([]);
  const [membros, setMembros] = useState([]);

  const location = useLocation();
  const { tarefa, isGerente } = location.state;

  useEffect(() => {
    setMembros(equipe.membros);
    setResultado(equipe.membros);
  }, [equipe]);

  const handleBusca = (user) => {
    const regex = new RegExp(busca, "i");
    return regex.test(user.name) || regex.test(user.id);
  };

  const handleAtribuirTarefa = (id) => {
    atribuirTarefa(tarefa, id);
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
              <div className="card card-membro" key={r.id}>
                <img className="img-fluid" src={semFoto} alt="foto membro" />

                <div className="col d-flex flex-column justify-content-evenly mt-2">
                  <p className="">{r.id}</p>
                  <p className="">{r.name}</p>
                </div>
                <hr />
                <Link to={"/" + equipe.id + "/home"}>
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
      </main>
    </div>
  );
}

export default AtribuirTarefa;
