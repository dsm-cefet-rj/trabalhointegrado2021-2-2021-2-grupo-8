import React from "react";

function MenuGerente({ isGerente }) {
  if (isGerente) {
    return (
      <section className="menu">
        <button type="button" className="btn btn-primary" id="accept-task">
          Editar tarefa
        </button>
        <button type="button" className="btn btn-primary" id="accept-task">
          Atribuir tarefa
        </button>
        <button type="button" className="btn btn-danger" id="accept-task">
          Excluir tarefa
        </button>
      </section>
    );
  } else {
      return <></>;
  }
}

export default MenuGerente;
