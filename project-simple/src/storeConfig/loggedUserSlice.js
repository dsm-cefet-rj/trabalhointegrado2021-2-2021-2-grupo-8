import { createSlice } from "@reduxjs/toolkit";

export const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {
    id: 36,
    equipes: {
      gerenciadas: [],
      outras: [],
    },
    equipeAtiva: {
      gerente: {},
      info: {},
      isGerente: -1,
      membros: [],
    },
  },
  reducers: {
    setEquipes: (state, { payload }) => {
      let gerenciadas = payload.filter((e) => {
        return e.gerente === state.id;
      });

      let outras = [];

      payload.forEach((e) => {
        e.membros.forEach((m) => {
          if (m === state.id) {
            outras.push(e);
          }
        });
      });

      state.equipes.gerenciadas = gerenciadas;
      state.equipes.outras = outras;
    },
    setEquipeAtiva: {
      reducer(state, { payload }) {
        console.log(payload);
        state.equipeAtiva.info = payload.equipe;
        state.equipeAtiva.membros = payload.membros;
        state.equipeAtiva.gerente = payload.gerente;
        payload.gerente.id === state.id
          ? (state.equipeAtiva.isGerente = 1)
          : (state.equipeAtiva.isGerente = 0);
      },
      prepare(equipe, membros, gerente) {
        return {
          payload: {
            equipe: equipe,
            membros: membros,
            gerente: gerente,
          },
        };
      },
    },
  },
});

export const { setEquipes, setEquipeAtiva } = loggedUser.actions;

export default loggedUser.reducer;
