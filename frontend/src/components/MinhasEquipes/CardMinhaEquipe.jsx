import React from "react";
import { Link } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import { setEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import { useDispatch } from "react-redux";

function CardMinhaEquipe({ equipe, gerente, membros }) {
  const dispatch = useDispatch();

  const handleEquipeAtiva = () => {
    dispatch(setEquipeAtiva(equipe, membros, gerente));
  };

  const mapMembros = () => {
    if (membros.length < 1) {
      return (
        <h6 className="text-center">Esta equipe ainda não possui membros</h6>
      );
    } else {
      return membros.map((membro) => {
        return (
          <div key={membro.id} className="card card-equipe-membro mb-2">
            <img className="card-img-top" src={semFoto} alt="foto membro" />
            <p className="pt-1">{membro.nome}</p>
          </div>
        );
      });
    }
  };

  return (
    <div className="card card-equipe">
      <Link to={"/" + equipe.id + "/home"}>
        <div className="card-header" onClick={handleEquipeAtiva}>
          {equipe.nome}
        </div>
      </Link>
      <div className="card-div container">
        <div className="row mt-2">
          <div className="col-5 text-center">
            <div className="card">
              <h6 className="mt-2">Gerente</h6>
              <img className="img-fluid p-2" src={semFoto} alt="" />
              <p className="pb-1">{gerente.nome}</p>
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
          {mapMembros()}
        </div>
      </div>
    </div>
  );
}

export default CardMinhaEquipe;
