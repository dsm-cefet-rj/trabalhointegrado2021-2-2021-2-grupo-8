import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function MembroMinhaEquipe({ membro }) {
  return (
    <div className="card card-equipe-membro mb-2">
      <img className="card-img-top" src={semFoto} alt="foto membro" />
      <p>{membro.name}</p>
    </div>
  );
}

export default MembroMinhaEquipe;
