
import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function CardGerenciarEquipe() {

    const handleExcluirMembro = () => {
        console.log("membro excluido")
    }

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
                <span className="btn btn-danger" onClick={handleExcluirMembro}>
                    Excluir Membro
                </span>
            </div>
        </div>

    );
}

export default CardGerenciarEquipe;