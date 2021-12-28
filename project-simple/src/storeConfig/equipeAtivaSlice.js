import { createSlice } from "@reduxjs/toolkit";

export const equipeAtiva = createSlice({
  name: "equipeAtiva",
  initialState: {
    eventos: [],
    gerente: {},
    info: {},
    isGerente: -1,
    membros: [],
    tarefas: [],
  },
  reducers: {
    setEquipeAtiva: (state, { payload }) => {
      state.eventos = payload.eventos;
      state.gerente = payload.gerente;
      state.info = payload.info;
      state.isGerente = payload.isGerente;
      state.membros = payload.membros;
      state.tarefas = payload.tarefas;
    },
    devolverTarefa: (state, { payload }) => {
      state.tarefas[state.tarefas.findIndex(t => payload.idTask == t.idTask)].idResponsavel = 0; 
    },
    excluirTarefa: (state, { payload }) => {
      state.tarefas.splice(state.tarefas.findIndex(t => payload.idTask == t.idTask),1);
    },
    atribuirTarefa: (state, { payload }) => {
      state.tarefas.splice(state.tarefas.findIndex(t => payload.idTask == t.idTask),1);
      state.tarefas.push(payload);
    },
    addTarefa: (state, { payload }) => {
      state.tarefas.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEquipeAtiva, atribuirTarefa, devolverTarefa, excluirTarefa, addTarefa } = equipeAtiva.actions;

export default equipeAtiva.reducer;
