import React, { useState } from "react";
import CardAddMembro from "./CardAddMembro";

function AdicionarMembro() {

  function handleBusca(user) {
    return user.nome == busca;
  }
  
  const data = [
    {
      nome: "Edvaldo",
      cargo: "coordenador",
      dataIngresso: "13/08/19",
    },
    {
      nome: "Marta",
      cargo: "dev senior",
      dataIngresso: "14/02/20",
    },
    {
      nome: "Matheus",
      cargo: "dev junior",
      dataIngresso: "17/05/18",
    },
    {
      nome: "Andre",
      cargo: "dev",
      dataIngresso: "11/12/20",
    },
  ];

  let busca = "";

  const [resultado, setResultado] = useState ([])

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Adicione um Membro à sua Equipe</h3>

        <section className="container mb-3 text-center">
          <input
            type="text"
            className="text-center form-control mb-3"
            placeholder="Buscar usuário"
            onChange={(e)=>{
              busca = e.target.value;
            }}
          />
          <a href="#" className="btn btn-primary"
          onClick={(e)=>
          setResultado(data.filter(handleBusca))}>
            Buscar
          </a>
        </section>

        <section className="d-flex flex-wrap justify-content-evenly">
          {resultado.map((r, idx) => {
            return (
              <CardAddMembro
                key={idx}
                nome={r.nome}
                cargo={r.cargo}
                dataIngresso={r.dataIngresso}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default AdicionarMembro;
