import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEventos = createAsyncThunk(
  "eventos/fetchEventos",
  async (equipe) => {
    try {
      let response = await fetch("http://localhost:5000/eventos");
      return await response.json();
    } catch (error) {
      return [];
    }
  }
);

export const eventos = createSlice({
  name: "eventos",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addEvento: (state, { payload }) => {
      console.log(payload);
    },
    deleteEvento: (state, { payload }) => {
      console.log(payload);
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchEventos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEventos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEventos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectEventosByTeam = (equipe) => (state) => {
  return state.eventos.data.filter(e=>equipe.info.id === e.equipe)
}

export const { addEvento, deleteEvento } = eventos.actions;

export default eventos.reducer;
