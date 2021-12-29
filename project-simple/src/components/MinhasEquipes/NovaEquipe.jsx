import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTeam } from "../../storeConfig/minhasEquipesSlice";

function NovaEquipe() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loggedUser);
  let newTeam = {
    id: 0,
    name: "",
    gerente: 0,
    descricao: "",
    dataCriacao: "",
  };

  const getMonthName = (month) => {
    const names = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return names[month - 1];
  };

  const handleNovaEquipe = () => {
    let data = new Date();
    let hoje =
      getMonthName(data.getMonth()) +
      " " +
      data.getDay() +
      ", " +
      data.getFullYear();
    newTeam.dataCriacao = hoje;
    newTeam.gerente = login.id;
    dispatch(addTeam(newTeam));
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
              onChange={(e) => {
                newTeam.name = e.target.value;
                console.log(newTeam.name);
              }}
            ></input>
          </label>

          <label>
            Descrição:
            <textarea
              className="input-descricao"
              name="descricao"
              placeholder="Digite uma breve descrição sobre a equipe e seus objetivos"
              onChange={(e) => {
                newTeam.descricao = e.target.value;
                console.log(newTeam.descricao);
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
              Criar Equipe
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default NovaEquipe;
