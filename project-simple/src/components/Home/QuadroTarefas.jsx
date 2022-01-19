import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEquipeAtiva,
  getIdUser,
  getIsGerente,
} from "../../storeConfig/loggedUserSlice";
import { selectAllTarefas } from "../../storeConfig/tarefasSlice";
import CardTarefa from "./CardTarefa";

function QuadroTarefas() {
  const idUser = useSelector(getIdUser);
  const equipeAtiva = useSelector(getEquipeAtiva);
  const isGerente = useSelector(getIsGerente);
  const allTarefas = useSelector(selectAllTarefas);
  const statusTarefas = useSelector((state) => state.tarefas.status);

  const [display, setDisplay] = useState("");

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [statusTarefas, allTarefas, equipeAtiva]);

  const quadro = (mode) => {
    if (statusTarefas === "succeeded" || statusTarefas === "updated") {
      let arrayTarefas = allTarefas
        .filter((t) => t.equipe === equipeAtiva.info.id)
        .filter((t) => {
          if (mode === "disponiveis") {
            return t.responsavel === 0;
          } else if (mode == "minhas") {
            return t.responsavel === idUser;
          } else if (mode === "andamento") {
            return t.responsavel !== 0 && t.responsavel !== idUser;
          }
        });

      if (arrayTarefas.length > 0) {
        return arrayTarefas.map((t) => <CardTarefa key={t.id} tarefa={t} />);
      } else {
        return <div className="p-6">Não há tarefas</div>;
      }
    } else if (statusTarefas === "loading") {
      return <div className="p-6">Carregando Tarefas</div>;
    } else {
      return <div className="p-6">Erro ao carregar tarefas</div>;
    }
  };

  return (
    <Fragment>
      <section className="mb-2">
        <div className="nome-tabela">
          <h2>Tarefas Disponíveis</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
          {quadro("disponiveis")}
        </div>
      </section>
      <section className={`mb-2 ${display}`}>
        <div className="nome-tabela">
          <h2>Tarefas em Andamento</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
          {quadro("andamento")}
        </div>
      </section>
      <section>
        <div className="nome-tabela">
          <h2>Minhas Tarefas</h2>
        </div>
        <div className="tabela-tarefas d-flex flex-wrap justify-content-evenly">
          {quadro("minhas")}
        </div>
      </section>
    </Fragment>
  );
}
export default QuadroTarefas;
