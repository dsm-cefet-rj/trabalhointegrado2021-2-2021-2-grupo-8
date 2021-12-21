import React, { useState } from "react";
import CardAddMembro from "./CardAddMembro";

function AdicionarMembro({ members }) {
  let busca = "";

  const [resultado, setResultado] = useState([]);

  const handleBusca = (user) => {
    const regex = new RegExp(busca, "i");
    return regex.test(user.name) || regex.test(user.id);
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
              setResultado(dataUser.filter(handleBusca));
            }}
          >
            Buscar
          </span>
        </section>

        <section className="d-flex flex-wrap justify-content-evenly">
          {resultado.map((r) => {
            return (
              <div className="card card-membro">
                <img className="img-fluid" src={semFoto} alt="foto membro" />

                <div className="col d-flex flex-column justify-content-evenly mt-2">
                  <p className="">{r.id}</p>
                  <p className="">{r.name}</p>
                </div>
                <hr />
                <div className="text-center">
                  <span className="btn btn-success">Adicionar Membro</span>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default AdicionarMembro;
