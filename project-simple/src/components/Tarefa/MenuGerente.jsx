import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MenuGerente({ tarefa, isGerente, excluirTarefa }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [isGerente]);

  const handleExcluirTarefa = () => {
    excluirTarefa(tarefa);
  };

  return (
    <section className={`menu ${display}`}>
      <button type="button" className="btn btn-primary" id="accept-task">
        Atribuir tarefa
      </button>
      <Link to={"/" + tarefa.idTeam + "/home"}>
        <button
          type="button"
          className="btn btn-danger"
          id="accept-task"
          onClick={handleExcluirTarefa}
        >
          Excluir tarefa
        </button>
      </Link>
      
    </section>
  );
}
export default MenuGerente;
