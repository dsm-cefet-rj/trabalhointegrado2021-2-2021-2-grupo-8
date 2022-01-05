import { createSlice } from "@reduxjs/toolkit";

export const equipes = createSlice({
  name: "equipes",
  initialState: {
    equipes: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addEquipe: (state, { payload }) => {
      console.log(payload);
    },
    deleteEquipe: (state, { payload }) => {
      console.log(payload);
    },
    addMebro: (state, { payload }) => {
      console.log(payload);
    },
    deleteMebro: (state, { payload }) => {
      console.log(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEquipe, deleteEquipe, addMebro, deleteMebro } =
  equipeAtiva.actions;

export default equipes.reducer;
