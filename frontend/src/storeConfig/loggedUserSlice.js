import { createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "eventos/fetchEventos",
  async () => {
    return httpGet(baseUrl + "/eventos");
  }
);

export const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {
    id: null,
    error: null,
    equipeAtiva: {
      equipe: {},
      isGerente: -1,
    },
  },
  reducers: {
    setUser: {
      reducer(state, {payload}) {
        
      },
    },
    setEquipeAtiva: {
      reducer(state, { payload }) {
        state.equipeAtiva.equipe = payload;
        if (payload.gerente.id === state.id) {
          state.equipeAtiva.isGerente = 1;
        } else {
          state.equipeAtiva.isGerente = 0;
        }
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
