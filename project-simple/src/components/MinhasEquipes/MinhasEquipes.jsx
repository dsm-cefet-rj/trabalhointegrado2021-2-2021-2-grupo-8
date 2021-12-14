import React from 'react';
import semFoto from "../../assets/sem-foto-homem.jpg";

function MinhasEquipes() {
    return (
<body className="corpo">

<header className="container cabecalho">
    <h1 className="app-name">Project Simple</h1>
</header>

<main className="container">

    <section className="lista-equipes d-flex flex-column">
        <h3 className="text-center my-3">Equipes que você gerencia</h3>
        <div className="card card-equipe">
            <div className="card-header">
                Nome da Equipe
            </div>
            <div className="card-body container">
                <div className="row">
                    <div className="col-5 text-center">
                        <div className="card">
                            <h6 className="mt-2">Gerente</h6>
                            <img className="img-fluid p-2" src={semFoto} alt=""/>
                            <p className="pb-1">Nome do gerente</p>
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <p className="card-text">Data de criação: 25/12/21</p>
                        <br/>
                        <p className="card-text">Objetivos e responsabilidades</p>
                    </div>
                </div>
                <hr/>
                <div className="row d-flex justify-content-evenly">
                    <h5 className="mb-3">Membros</h5>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr/>
    <section className="lista-equipes d-flex flex-column mt-5">
        <h3 className="text-center my-3">Equipes em que você é membro</h3>
        <div className="card card-equipe">
            <div className="card-header">
                Nome da Equipe
            </div>
            <div className="card-body container">
                <div className="row">
                    <div className="col-5 text-center">
                        <div className="card">
                            <h6 className="mt-2">Gerente</h6>
                            <img className="img-fluid p-2" src={semFoto} alt=""/>
                            <p className="pb-2">Nome do gerente</p>
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <p className="card-text">Data de criação: 25/12/21</p>
                        <br/>
                        <p className="card-text">Objetivos e responsabilidades</p>
                    </div>
                </div>
                <hr/>
                <div className="row d-flex justify-content-evenly">
                    <h6 className="mb-3">Membros</h6>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                    <div className="card card-equipe-membro">
                        <img className="card-img-top" src={semFoto} alt="foto membro"/>
                            <p className="p-2">Nome</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>


</main>

</body>
    );
}

export default MinhasEquipes;