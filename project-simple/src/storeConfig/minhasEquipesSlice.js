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
    addTeam: (state, action) => {
      state.gerenciadas.push(action.payload.newTeam);
    },
    deleteTeam: (state, action) => {
      state.splice(state.gerenciadas.indexOf(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMyTeams, addTeam, deleteTeam } = minhasEquipesSlice.actions;

export default minhasEquipesSlice.reducer;
