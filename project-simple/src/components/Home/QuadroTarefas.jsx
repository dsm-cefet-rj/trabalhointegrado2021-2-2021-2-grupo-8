import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEquipeAtiva,
  getIsGerente,
} from "../../storeConfig/loggedUserSlice";
import { selectTarefasByTeam } from "../../storeConfig/tarefasSlice";
import CardTarefa from "./CardTarefa";

function QuadroTarefas() {
  const dispatch = useDispatch();
  const equipeAtiva = useSelector(getEquipeAtiva);
  const isGerente = useSelector(getIsGerente);
  const tarefas = useSelector(selectTarefasByTeam(equipeAtiva));

  const [display, setDisplay] = useState("");

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [equipeAtiva, dispatch]);

  return (
    <Fragment>
      <section className="mb-2">
        <div className="nome-tabela">
          <h2>Tarefas Disponíveis</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
          {tarefas.disponiveis.map((t) => (
            <CardTarefa key={t.id} tarefa={t} />
          ))}
        </div>
      </section>
      <section className={`mb-2 ${display}`}>
        <div className="nome-tabela">
          <h2>Tarefas em Andamento</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly"></div>
      </section>
      <section>
        <div className="nome-tabela">
          <h2>Minhas Tarefas</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly"></div>
      </section>
    </Fragment>
  );
}
export default QuadroTarefas;
