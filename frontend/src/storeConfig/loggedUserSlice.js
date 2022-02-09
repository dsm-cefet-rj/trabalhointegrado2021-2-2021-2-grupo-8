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
    token: null,
    error: null,
    equipeAtiva: {
      equipe: {},
      isGerente: -1,
    },
  },
  reducers: {
    setEquipeAtiva: (state, { payload }) => {
      state.equipeAtiva.equipe = payload;
      if (payload.gerente.id === state.id) {
        state.equipeAtiva.isGerente = 1;
      } else {
        state.equipeAtiva.isGerente = 0;
      }
    },
    addMember: (state, { payload }) => {
      state.equipeAtiva.equipe.membros.push(payload);
    },
    removeMember: (state, { payload }) => {
      state.equipeAtiva.equipe.membros.splice(
        state.equipeAtiva.equipe.membros.findIndex((m) => m.id === payload),
        1
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.token = action.payload.token;
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
