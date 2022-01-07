import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";


function AdicionarMembro() {
  let busca = "";

  const dispatch = useDispatch();
  const equipeAtiva = useSelector(state => state.equipeAtiva)
  const navigate = useNavigate();

  const [resultado, setResultado] = useState([]);

  const handleBusca = () => {
    /*const regex = new RegExp(busca, "i");

    let parcial = userSheet.filter((user) => {
      return regex.test(user.name) || regex.test(user.id) || regex.test(user.email);
    });


    let members = [...equipeAtiva.membros];
    members.push(equipeAtiva.gerente);

    parcial.forEach((r, idx) => {
      members.forEach((m) => {
        if (r.id == m.id) {
          parcial.splice(idx, 1);
        }
      });
    });

    setResultado(parcial);*/ console.log(equipeAtiva)
  };

  const handleAddMembro = (member) => {
    console.log(member)
    navigate(-1);
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Adicione um Membro à sua Equipe</h3>

        <section className="container mb-3 text-center">
          <input
            type="text"
            className="text-center form-control mb-3"
            placeholder="Buscar usuário"
            onChange={(e) => {
              busca = e.target.value;
            }}
          />
          <span className="btn btn-primary" onClick={handleBusca}>
            Buscar
          </span>
        </section>

        <section className="d-flex flex-wrap justify-content-evenly">
          {resultado.slice(0,10).map((r) => {
            return (
              <div className="card card-membro" key={r.id}>
                <img className="img-fluid" src={semFoto} alt="foto membro" />

                <div className="col d-flex flex-column justify-content-evenly mt-2">
                  <p className="">{r.id}</p>
                  <p className="">{r.name}</p>
                  <p className="">{r.email}</p>
                </div>
                <hr />
                <div className="text-center">
                  <span
                    className="btn btn-success"
                    onClick={() => {
                      handleAddMembro(r);
                    }}
                  >
                    Adicionar Membro
                  </span>
                </div>
              </div>
            );
          })}
        </section>
        <section className="menu">
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

export default AdicionarMembro;
