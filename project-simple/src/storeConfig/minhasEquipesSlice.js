import { createSlice } from "@reduxjs/toolkit";

export const minhasEquipesSlice = createSlice({
  name: "minhasEquipes",
  initialState: {
    gerenciadas: [],
    outras: [],
  },
  reducers: {
    setMyTeams: (state, { payload }) => {
      state.gerenciadas = payload.gerenciadas;
      state.outras = payload.outras;
    },
    addTeam: (state, { payload }) => {
     state.gerenciadas.push(payload);
    },
    deleteTeam: (state, { payload }) => {
      state.gerenciadas.splice(state.gerenciadas.findIndex(e => payload.info.id == e.id),1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMyTeams, addTeam, deleteTeam } = minhasEquipesSlice.actions;

export default minhasEquipesSlice.reducer;
