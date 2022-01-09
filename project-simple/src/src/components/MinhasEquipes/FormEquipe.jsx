import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addEquipeServer, selectEquipeIds, updateEquipeServer } from "../../storeConfig/equipesSlice";
import { selectAllUsuarios } from "../../storeConfig/usuariosSlice";

function FormEquipe() {
  const navigate = useNavigate();
  const location = useLocation();
  const { equipe } = location.state;

  const dispatch = useDispatch();
  const equipesIds = useSelector(selectEquipeIds);
  const userId = useSelector((state) => state.loggedUser.id);

  let novaEquipe = { ...equipe };

  const handleNovaEquipe = () => {
    if (equipe.id === undefined) {
      let data = new Date();
      novaEquipe.id = equipesIds.at(-1) + 1;
      novaEquipe.gerente = userId;
      novaEquipe.dataCriacao = data.getFullYear()+"-"+('0'+data.getMonth()+1).slice(-2)+"-"+("0" + data.getDate()).slice(-2);
      novaEquipe.membros = [];
      dispatch(addEquipeServer(novaEquipe));
    } else {
      dispatch(updateEquipeServer(novaEquipe));
    }
  };

  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Nova Equipe</h3>

        <section className="d-flex flex-column">
          <label className="mb-4">
            Nome da Equipe:
            <input
              type="text"
              className="input-novo w-50"
              placeholder="Digite o nome da Equipe"
              defaultValue={equipe.nome}
              onChange={(e) => {
                novaEquipe.nome = e.target.value;
              }}
            ></input>
          </label>

          <label>
            Descrição:
            <textarea
              className="input-descricao"
              name="descricao"
              placeholder="Digite uma breve descrição sobre a equipe e seus objetivos"
              defaultValue={equipe.descricao}
              onChange={(e) => {
                novaEquipe.descricao = e.target.value;
              }}
            />
          </label>
        </section>

        <section className="menu">
          <Link to={"/"}>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleNovaEquipe}
            >
              Enviar
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Voltar
          </button>
        </section>
      </main>
    </div>
  );
}

export default FormEquipe;
