import React from "react";
import { Link } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import MembroMinhaEquipe from "./MembroMinhaEquipe";
import tasksSheet from "../../data/dataTasks.json";
import eventsSheet from "../../data/dataEvents.json";
import { setEquipeAtiva } from "../../storeConfig/equipeAtivaSlice";
import { useDispatch, useSelector } from "react-redux";

function CardMinhaEquipe({ equipe, gerente, membros }) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const equipeAtiva = useSelector((state) => state.equipeAtiva);
  const dispatch = useDispatch();

  const handleEquipeAtiva = () => {
    let e = { ...equipeAtiva };
    e.eventos = eventsSheet.filter((event) => {
      return event.idTeam === equipe.id;
    });
    e.gerente = gerente;
    e.info = equipe;
    e.membros = membros;
    e.tarefas = tasksSheet.filter((t) => {
      return equipe.id === t.idTeam;
    });
    e.isGerente = loggedUser.id == equipe.gerente ? 1 : 0;

    dispatch(setEquipeAtiva(e));
  };

  return (
    <div className="card card-equipe">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={equipe.id + "/home"}
      >
        <div className="card-header" onClick={handleEquipeAtiva}>
          {equipe.name}
        </div>
      </Link>
      <div className="card-div container">
        <div className="row mt-2">
          <div className="col-5 text-center">
            <div className="card">
              <h6 className="mt-2">Gerente</h6>
              <img className="img-fluid p-2" src={semFoto} alt="" />
              <p className="pb-1">{gerente.name}</p>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <p className="card-text">Data de criação: {equipe.dataCriacao}</p>
            <br />
            <p className="card-text">{equipe.descricao}</p>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-evenly mb-2">
          <h5 className="mb-3">Membros</h5>
          {membros.map((membro) => {
            return <MembroMinhaEquipe key={membro.id} membro={membro} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CardMinhaEquipe;
