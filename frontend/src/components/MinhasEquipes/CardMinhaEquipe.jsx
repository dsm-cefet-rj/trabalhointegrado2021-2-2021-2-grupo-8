import React from "react";
import { Link } from "react-router-dom";
import semFoto from "../../assets/sem-foto-homem.jpg";
import { setEquipeAtiva } from "../../storeConfig/loggedUserSlice";
import { useDispatch } from "react-redux";

function CardMinhaEquipe({ equipe }) {
  const dispatch = useDispatch();

  const handleEquipeAtiva = () => {
    dispatch(setEquipeAtiva(equipe));
  };

  const mapMembros = () => {
    if (equipe.membros.length < 1) {
      return (
        <h6 className="text-center">Esta equipe ainda não possui membros</h6>
      );
    } else {
      return equipe.membros.map((membro) => {
        return (
          <div key={membro.id} className="card card-equipe-membro mb-2">
            <img className="card-img-top" src={semFoto} alt="foto membro" />
            <h7 className="pt-1">{membro.nome}</h7>
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
              <h6 className="pb-1">{equipe.gerente.nome}</h6>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <h7 className="card-text">Data de criação: {equipe.dataCriacao}</h7>
            <br />
            <h7 className="card-text">{equipe.descricao}</h7>
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
