import React from "react";

function NovoEvento({NovoEvento}) {

    let newEvent = {
      nome: "",
      inicio:"",
      fim:"",
      urgencia:"",
      descricao: ""
    }


  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Novo Evento</h3>

        <section className="d-flex flex-column">
          <label className="mb-4">
            Nome do Evento:
            <input
              type="text"
              className="input-novo w-50"
              placeholder="Digite o nome do evento"
              onChange={(e)=>{
                newEvent.nome = e.target.value;
                console.log(newEvent.nome)
              }}
            />
          </label>

          <label className="mb-4">
            Início:
            <input
              className="input-novo"
              type="datetime-local"
              name="inicio-evento"
              onChange={(e)=>{
                newEvent.inicio = e.target.value;
                console.log(newEvent.inicio)
              }}
            />
          </label>

          <label className="mb-4">
            Fim:
            <input
              className="input-novo"
              type="datetime-local"
              name="inicio-evento"
              onChange={(e)=>{
                newEvent.fim = e.target.value;
                console.log(newEvent.fim)
              }}
            />
          </label>

          <label className="mb-4">
            Importância:
            <select className="input-novo" name="urgencia" id="urgencia" onChange={(e)=>{
                newEvent.urgencia = e.target.value;
                console.log(newEvent.urgencia)
              }}>
              <option value="#"></option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baixa">Baixa</option>
            </select>
          </label>

          <label>
            Descrição:
            <textarea
              className="input-descricao"
              name="descricao"
              placeholder="Digite a descrição do evento"
              onChange={(e)=>{
                newEvent.descricao = e.target.value;
                console.log(newEvent.descricao)
              }}
            ></textarea>
          </label>
        </section>

        <section className="menu">
          <button type="button" className="btn btn-success" onClick={NovoEvento(newEvent)}>
            Criar Evento
          </button>
        </section>
      </main>
    </div>
  );
}

export default NovoEvento;
