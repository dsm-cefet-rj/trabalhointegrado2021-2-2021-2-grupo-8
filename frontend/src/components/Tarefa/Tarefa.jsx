import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import {
  getEquipeAtiva,
  getIsGerente,
} from "../../storeConfig/loggedUserSlice";
import MenuTarefa from "./MenuTarefa";

function Tarefa() {
  const navigate = useNavigate();

  const location = useLocation();
  const { tarefa } = location.state;

  const equipeAtiva = useSelector(getEquipeAtiva);
  const isGerente = useSelector(getIsGerente);
  const [responsavel, setResponsavel] = useState({});
  

  useEffect(() => {
    if (tarefa.responsavel !== "0") {
      const membros = [...equipeAtiva.equipe.membros];
      membros.push(equipeAtiva.equipe.gerente);
      setResponsavel(membros.find((m) => m.id === tarefa.responsavel));
    }
  }, [equipeAtiva, tarefa, isGerente]);

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-4">{tarefa.nome}</h3>

        <section className="container">
          <div className="text-center">
            <label className="d-inline-block mb-3">
              Prazo:
              <span className="span-tarefa mx-1">
                {tarefa.dataPrazo + " " + tarefa.horaPrazo}
              </span>
            </label>
            <label className="d-inline-block mb-3">
              Urgência:
              <span className="span-tarefa mx-1">{tarefa.urgencia}</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="mb-1">Descrição:</label>
            <span className="span-tarefa descricao-tarefa">
              {tarefa.descricao}
            </span>
          </div>
        </section>

        {tarefa.responsavel !== "0" && isGerente &&(
          <div className="d-flex justify-content-center mt-2">
            <div className="card card-membro">
              <p className="text-center py-1">Responsável</p>
              <img className="img-fluid" src={semFoto} alt="foto membro" />
              <div className="my-2">
                <p className="text-center">ID: {responsavel.id}</p>
                <p className="text-center">{responsavel.nome}</p>
                <hr />
                <p className="text-center">Contatos:</p>
                <p className="text-center">{responsavel.email}</p>
                <p className="text-center">{responsavel.tel}</p>
              </div>
            </div>
          </div>
        )}

        <MenuTarefa tarefa={tarefa} isGerente={isGerente} />

        <div className="menu">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Voltar
          </button>
        </div>
      </main>
    </div>
  );
}

export default Tarefa;
