
import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function CardGerenciarEquipe() {
    return (
        <div className="card card-membro">
            <img className="img-fluid" src={semFoto} alt="foto membro" />

            <div className="col d-flex flex-column justify-content-evenly">
                <p className="">Nome</p>
                <p className="">Cargo</p>
                <p className="">Data de ingresso</p>
            </div>
            <hr />
            <div className="text-center">
                <p>
                <a href="#" className="btn btn-success">
                    Atribuir Tarefa
                </a>
                </p>
                <p>
                <a href="#" className="btn btn-danger">
                    Excluir Membro
                </a>
                </p>
            </div>
        </div>

    );
}

export default CardGerenciarEquipe;