import { createSlice } from "@reduxjs/toolkit";

export const tarefas = createSlice({
  name: "tarefas",
  initialState: {
    andamento: [],
    paradas: [],
    minhas: [],
  },
  reducers: {
    setTarefas: (state, { payload }) => {
      state.andamento = payload.andamento;
      state.paradas = payload.paradas;
      state.minhas = payload.minhas;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTarefas } = tarefas.actions;

export default tarefas.reducer;
