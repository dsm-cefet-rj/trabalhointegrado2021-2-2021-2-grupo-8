import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsuarios = createAsyncThunk("usuarios/fetchUsuarios", async () => {
  try {
    let response = await fetch("http://localhost:5000/usuarios");
    return await response.json();
  } catch (error) {
    return [];
  }
});

export const usuarios = createSlice({
  name: "usuarios",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addUsuario: (state, { payload }) => {
      console.log(payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsuarios.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsuarios.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsuarios.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { addUsuario } = usuarios.actions;

export default usuarios.reducer;
