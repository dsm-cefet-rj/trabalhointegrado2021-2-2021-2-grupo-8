import React from "react";
import CardEvento from "./CardEvento";

function Eventos() {
  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Próximos Eventos</h3>
        <section className="d-flex flex-wrap justify-content-evenly">

        <CardEvento/>
        <CardEvento/>
        <CardEvento/>

        </section>
      </main>
    </div>
  );
}

export default Eventos;
