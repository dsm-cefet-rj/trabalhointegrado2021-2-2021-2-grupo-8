import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NovaTarefa({ addTarefa, idTeam }) {
  const navigate = useNavigate();

  let novaTarefa = {
    idTask: 0,
    idTeam: 0,
    name: "",
    dataPrazo: "",
    horaPrazo: "",
    descricao: "",
    urgencia: "",
    idResponsavel: 0,
  };

  const timeConvert = (time) => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
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

  const handleDate = (date) => {
    let ano = date.substring(0, 4);

    let mes = date.substring(5, 7);
    mes = getMonthName(mes);

    let dia = date.substring(8, 10);

    let data = mes + " " + dia + ", " + ano;
    novaTarefa.dataPrazo = data;

    let hora = date.substring(11, 16);
    novaTarefa.horaPrazo = timeConvert(hora);
  };

  const handleAddTarefa = () => {
    addTarefa(novaTarefa);
  };

  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Nova Tarefa</h3>

        <section className="d-flex flex-column">
          <label className="mb-4">
            Nome da Tarefa:
            <input
              type="text"
              className="input-novo w-50"
              placeholder="Digite o nome da tarefa"
              onChange={(e) => {
                novaTarefa.name = e.target.value;
              }}
            />
          </label>

          <label className="mb-4">
            Prazo:
            <input
              className="input-novo"
              type="datetime-local"
              name="prazo"
              id="prazo"
              onChange={(e) => {
                handleDate(e.target.value);
              }}
            />
          </label>

          <label className="mb-4">
            Urgência:
            <select
              className="input-novo"
              name="urgencia"
              id="urgencia"
              onChange={(e) => {
                novaTarefa.urgencia = e.target.value;
              }}
            >
              <option value="#"></option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baixa">Baixa</option>
            </select>
          </label>
          <label>
            Descrição:
            <textarea
              className="input-descricao"
              name="descricao"
              placeholder="Digite a descrição da tarefa"
              onChange={(e) => {
                novaTarefa.descricao = e.target.value;
              }}
            />
          </label>
        </section>

        <section className="menu">
          <Link to={"/" + idTeam + "/novaTarefa"}>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddTarefa}
            >
              Criar Tarefa
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

export default NovaTarefa;
