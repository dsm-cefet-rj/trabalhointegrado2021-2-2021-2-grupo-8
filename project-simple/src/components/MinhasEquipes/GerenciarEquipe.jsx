import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";

function GerenciarEquipe() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const equipeAtiva = useSelector((state) => state.equipeAtiva);

  const handleExcluirMembro = (m) => {
    console.log(m)
    //let tasks = [...equipeAtiva.tarefas];
    //tasks.forEach(t => {
    //  if (t.idResponsavel === m.id){
    //    dispatch(excluirTarefa(t));
    //    let task = {...t}
    //    task.idResponsavel=0;
    //    dispatch(addTarefa(task));
    //  }
    //});

    //dispatch(excluirMembro(m));
  };

  const handleExcluirEquipe = () => {
    console.log(equipeAtiva)
  }

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Gerencie sua equipe</h3>
        <section className="d-flex flex-wrap justify-content-evenly">
          {equipeAtiva.membros.map((m) => {
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
          <Link to={"/"}>
            <button type="button" className="btn btn-danger" onClick={handleExcluirEquipe}>
              Excluir Equipe
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
