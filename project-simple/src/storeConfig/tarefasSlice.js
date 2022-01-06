import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTarefas = createAsyncThunk(
  "tarefas/fetchTarefas",
  async () => {
    try {
      let response = await fetch("http://localhost:5000/tarefas");
      return await response.json();
    } catch (error) {
      return [];
    }
  }
);

export const tarefas = createSlice({
  name: "tarefas",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addTarefa: (state, { payload }) => {
      console.log(payload);
    },
    deleteTarefa: (state, { payload }) => {
      console.log(payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTarefas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTarefas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTarefas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//selectors

export const selectTarefasByTeam = (equipe) => (state) => {
  let disponiveis = [];
  let minhas = [];
  let andamento = [];

  let minhasTarefas = state.tarefas.data.filter((t) => {
    return t.equipe === equipe.info.id;
  });

  minhasTarefas.forEach((t) => {
    if (t.responsavel === 0) {
      disponiveis.push(t);
    } else if (t.responsavel === state.loggedUser.id) {
      minhas.push(t);
    } else {
      andamento.push(t);
    }
  });

  return { disponiveis: disponiveis, minhas: minhas, andamento: andamento };
};

export const { addTarefa, deleteTarefa } = tarefas.actions;

export default tarefas.reducer;
