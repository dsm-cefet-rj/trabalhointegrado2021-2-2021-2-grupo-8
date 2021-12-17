import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";
import MembroMinhaEquipe from "./MembroMinhaEquipe";
import userData from "../../data/dataUser.json";

function CardMinhaEquipe({equipe}) {

  const nomeGerente = () => {
    userData.filter((user) => {return user.id == equipe.gerente;})
  }

  console.log (nomeGerente);

  return (
    <div className="card card-equipe">
      <div className="card-header">Nome da Equipe</div>
      <div className="card-div container">
        <div className="row mt-2">
          <div className="col-5 text-center">
            <div className="card">
              <h6 className="mt-2">Gerente</h6>
              <img className="img-fluid p-2" src={semFoto} alt="" />
              <p className="pb-1">{nomeGerente}</p>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <p className="card-text">Data de criação: 25/12/21</p>
            <br />
            <p className="card-text">Objetivos e responsabilidades</p>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-evenly mb-2">
          <h5 className="mb-3">Membros</h5>
          <MembroMinhaEquipe />
          <MembroMinhaEquipe />
          <MembroMinhaEquipe />
          <MembroMinhaEquipe />
        </div>
      </div>
    </div>
  );
}

export default CardMinhaEquipe;
