import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../api/baseUrl";
import { httpDelete, httpGet, httpPost, httpPut } from "../api/utils";

export const login = createAsyncThunk("loggedUser/login", async (user) => {
  return httpPost(baseUrl + "/login", user);
});

export const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {
    id: null,
    JWT: null,
    error: null,
    equipeAtiva: {
      equipe: {},
      isGerente: -1,
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
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        state.id = action.payload.id;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = "Usuário ou senha inválidos!";
      });
  },
});

//Selectors:

export const getEquipeAtiva = (state) => state.loggedUser.equipeAtiva;
export const getIsGerente = (state) => state.loggedUser.equipeAtiva.isGerente;
export const getIdUser = (state) => state.loggedUser.id;

export const { setEquipeAtiva, addMember, removeMember } = loggedUser.actions;

export default loggedUser.reducer;
