import React, { Fragment, useEffect, useState } from "react";
import CardTarefa from "./CardTarefa";

function QuadroTarefas({ tarefas, gerente, atribuirTarefa }) {
  const [arrayTarefas, setArrayTarefas] = useState();
  const [gerencia, setGerencia] = useState();

  useEffect(() => {
    if (gerente) setGerencia(1);
    else setGerencia(0);
    setArrayTarefas(tarefas);
  }, [tarefas, gerente]);

  if (gerencia) {
    return (
      <Fragment>
        <section className="mb-2">
          <div className="nome-tabela">
            <h2>Tarefas Disponíveis</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            {arrayTarefas.paradas.map((tarefa) => {
              return <CardTarefa key={tarefa.idTask} tarefa={tarefa} gerente={gerencia} atribuirTarefa={atribuirTarefa}/>;
            })}
          </div>
        </section>
        <section className="mb-2">
          <div className="nome-tabela">
            <h2>Tarefas em Andamento</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            {arrayTarefas.andamento.map((tarefa) => {
              return <CardTarefa key={tarefa.idTask} tarefa={tarefa} gerente={gerencia} />;
            })}
          </div>
        </section>
        <section>
          <div className="nome-tabela">
            <h2>Minhas Tarefas</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            {arrayTarefas.minhas.map((tarefa) => {
              return <CardTarefa key={tarefa.idTask} tarefa={tarefa} gerente={gerencia} />;
            })}
          </div>
        </section>
      </Fragment>
    );
  } else if (gerencia==0) {
    return (
      <Fragment>
        <section className="mb-2">
          <div className="nome-tabela">
            <h2>Tarefas Disponíveis</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            {arrayTarefas.paradas.map((tarefa) => {
              return <CardTarefa key={tarefa.idTask} tarefa={tarefa} gerente={gerencia} />;
            })}
          </div>
        </section>
        <section>
          <div className="nome-tabela">
            <h2>Minhas Tarefas</h2>
          </div>
          <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
            {arrayTarefas.minhas.map((tarefa) => {
              return <CardTarefa key={tarefa.idTask} tarefa={tarefa} gerente={gerencia}/>;
            })}
          </div>
        </section>
      </Fragment>
    );
  } else return <>Equipe não selecionada</>
}

export default QuadroTarefas;
