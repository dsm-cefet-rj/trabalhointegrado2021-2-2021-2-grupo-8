import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function MembroMinhaEquipe() {
  return (
    <div className="card card-equipe-membro">
      <img className="card-img-top" src={semFoto} alt="foto membro" />
      <p className="p-2">Nome</p>
    </div>
  );
}

export default MembroMinhaEquipe;
