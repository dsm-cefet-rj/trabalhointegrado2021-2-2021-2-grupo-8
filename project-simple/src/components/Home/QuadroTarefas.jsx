import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardTarefa from "./CardTarefa";

function QuadroTarefas() {
  const tarefas = useSelector((state) => state.tarefas);
  const isGerente = useSelector((state) => state.equipeAtiva.isGerente);

  const [display, setDisplay] = useState("");

  useEffect(()=>{
    setDisplay (isGerente? "" : "hide")
  },[isGerente])

  const mapTarefas = t => {
    return (
      <CardTarefa key={t.idTask} tarefa={t}/>
    );
  };

  return (
    <Fragment>
      <section className="mb-2">
        <div className="nome-tabela">
          <h2>Tarefas Disponíveis</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
          {tarefas.paradas.map(mapTarefas)}
        </div>
      </section>
      <section className={`mb-2 ${display}`}>
        <div className="nome-tabela">
          <h2>Tarefas em Andamento</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
          {tarefas.andamento.map(mapTarefas)}
        </div>
      </section>
      <section>
        <div className="nome-tabela">
          <h2>Minhas Tarefas</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
          {tarefas.minhas.map(mapTarefas)}
        </div>
      </section>
    </Fragment>
  );
}
export default QuadroTarefas;
