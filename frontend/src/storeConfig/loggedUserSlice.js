import { createSlice } from "@reduxjs/toolkit";

export const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {
    id: "61fc311a671c0e928cfdc63f",
    equipeAtiva: {
      info: {},
      gerente: {},
      isGerente: -1,
      membros: [],
    },
  },
  reducers: {
    setEquipeAtiva: {
      reducer(state, { payload }) {
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
    addMember: (state, { payload }) => {
      state.equipeAtiva.membros.push(payload);
    },
    removeMember: (state, { payload }) => {
      console.log(payload, state.equipeAtiva.membros);
      state.equipeAtiva.membros.splice(
        state.equipeAtiva.membros.findIndex((m) => m.id === payload),
        1
      );
      console.log(payload, state.equipeAtiva.membros);
    },
  },
});

//Selectors:

export const getEquipeAtiva = (state) => state.loggedUser.equipeAtiva;
export const getIsGerente = (state) => state.loggedUser.equipeAtiva.isGerente;
export const getIdUser = (state) => state.loggedUser.id;

export const { setEquipeAtiva, addMember, removeMember } = loggedUser.actions;

export default loggedUser.reducer;
