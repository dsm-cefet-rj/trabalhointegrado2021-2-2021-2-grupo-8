import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../assets/notfound.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <div className="d-flex justify-content-center my-4">
          <img src={notFoundImg} alt="not found" />
        </div>
        <section className="menu">
          <button
            className="btn btn-primary w-50"
            onClick={() => {
              navigate("/minhasEquipes");
            }}
          >
            Voltar
          </button>
        </section>
      </main>
    </div>
  );
}
export default NotFound;
