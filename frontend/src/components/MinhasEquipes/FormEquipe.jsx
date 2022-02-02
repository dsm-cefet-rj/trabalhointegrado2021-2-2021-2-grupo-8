import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addEquipeServer,
  selectEquipeIds,
  updateEquipeServer,
} from "../../storeConfig/equipesSlice";
import { equipeSchema } from "./EquipeSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function FormEquipe() {
  const navigate = useNavigate();
  const location = useLocation();
  const { equipe } = location.state;

  const dispatch = useDispatch();
  const equipesIds = useSelector(selectEquipeIds);
  const userId = useSelector((state) => state.loggedUser.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(equipeSchema),
  });

  const [novaEquipe] = useState(
    equipe.id !== undefined ? equipe : equipeSchema.cast({})
  );

  const onSubmit = (data) => {
    novaEquipe.nome = data.nome;
    novaEquipe.descricao = data.descricao;
    if (novaEquipe.id === -1) {
      console.log(equipesIds);
      novaEquipe.id = equipesIds.length === 0 ? 0 : equipesIds.at(-1) + 1;
      novaEquipe.gerente = userId;
      dispatch(addEquipeServer(novaEquipe));
      navigate(-1);
    } else {
      dispatch(updateEquipeServer(novaEquipe));
      navigate(-3);
    }
  };

  return (
    <div className="corpo">
      <header className="cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>

      <main className="container">
        <h3 className="text-center my-3">Nova Equipe</h3>

        <form
          className="form-horizontal mx-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group mb-3">
            <label className="col-md-4 control-label" htmlFor="nome">
              Nome da Equipe
            </label>

            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite um nome para sua equipe"
              className="form-control input-md"
              defaultValue={equipe.nome}
              {...register("nome")}
            />
            <span className="help-block">{errors.nome?.message}</span>
            <label className="col-md-4 control-label" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              rows="6"
              className="form-control"
              id="descricao"
              name="descricao"
              placeholder="Digite uma descrição para sua equipe"
              defaultValue={equipe.descricao}
              {...register("descricao")}
            />
            <span className="help-block">{errors.descricao?.message}</span>
          </div>

          <section className="menu">
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
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
        </form>
      </main>
    </div>
  );
}

export default FormEquipe;
