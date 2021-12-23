import React from "react";
import { useNavigate, Link } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";

function GerenciarEquipe({ membros, excluirMembro }) {
  const navigate = useNavigate();

  const handleExcluirMembro = (m) => {
    excluirMembro(m);
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Gerencie sua equipe</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          {membros.map((m) => {
            return (
              <div className="card card-membro" key={m.id}>
                <img className="img-fluid" src={semFoto} alt="foto membro" />

                <div className="col d-flex flex-column justify-content-evenly">
                  <p className="">{m.id}</p>
                  <p className="">{m.name}</p>
                  <p className="">{m.email}</p>
                  <p className="">{m.phone}</p>
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
