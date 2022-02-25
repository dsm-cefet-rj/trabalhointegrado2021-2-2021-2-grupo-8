import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import {
  selectEquipeById,
  updateEquipeServer,
} from "../../storeConfig/equipesSlice";
import { addMember, getEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import { selectAllUsuarios } from "../../storeConfig/usuariosSlice";

function AdicionarMembro() {
  let busca = "";

  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const equipe = useSelector((state) =>
    selectEquipeById(state, equipeAtiva.equipe.id)
  );
  const usuarios = useSelector(selectAllUsuarios);
  const navigate = useNavigate();

  const [resultado, setResultado] = useState([]);

  const handleBusca = () => {
    let membros = [...equipeAtiva.equipe.membros];
    membros.push(equipeAtiva.equipe.gerente);

    const regex = new RegExp(busca, "i");

    let parcial = usuarios
      .filter((user) => {
        return (
          regex.test(user.nome) || regex.test(user.id) || regex.test(user.email)
        );
      })
      .filter((u) => !membros.includes(u));

    setResultado(parcial);
  };

  const handleAddMembro = (member) => {
    let equipeAtualizada = {
      ...equipe,
      membros: [...equipe.membros, member.id],
    };
    dispatch(updateEquipeServer(equipeAtualizada));
    dispatch(addMember(member))
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
          <section className="menu">
            <button type="button" className="btn btn-primary" onClick={handleBusca}>
              Buscar
            </button>

          </section>
          
        </section>

        <section className="d-flex flex-wrap justify-content-evenly">
          {resultado.slice(0, 10).map((r) => {
            return (
              <div className="card card-membro" key={r.id}>
                <img className="img-fluid" src={semFoto} alt="foto membro" />

                <div className="text-center pt-2">
                  <p className="">ID: {r.id}</p>
                  <p className="">{r.nome}</p>
                  <p className="">{r.email}</p>
                  <p className="">{r.tel}</p>
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
        <section className="container mb-3 text-center">
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
        </section>
      </main>
    </div>
  );
}

export default AdicionarMembro;
