import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MenuGerente({ tarefa, isGerente, excluirTarefa }) {
  const navigate = useNavigate();
  
  const [display, setDisplay] = useState("");

  useEffect(() => {
    isGerente ? setDisplay("") : setDisplay("hide");
  }, [isGerente]);

  const handleExcluirTarefa = () => {
    excluirTarefa(tarefa);
  };

  return (
    <section className={`menu ${display}`}>
      <Link
        to={"/" + tarefa.idTeam + "/task/" + tarefa.idTask + "/atribuir"}
        state={{ tarefa, isGerente }}
      >
        <button type="button" className="btn btn-primary">
          Atribuir tarefa
        </button>
      </Link>
      <Link to={"/" + tarefa.idTeam + "/home"}>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleExcluirTarefa}
        >
          Excluir tarefa
        </button>
      </Link>
    </section>
  );
}
export default MenuGerente;
