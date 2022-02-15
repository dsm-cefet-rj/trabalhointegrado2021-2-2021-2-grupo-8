import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../api/baseUrl";
import { httpDelete, httpGet, httpPost, httpPut } from "../api/utils";

export const login = createAsyncThunk("loggedUser/login", async (user) => {
  return httpPost(baseUrl + "/login", user);
});

export const signup = createAsyncThunk("loggedUser/signup", async (user) => {
  return httpPost(baseUrl + "/signup", user);
});

const initialState = {
  id: null,
  token: null,
  signupMsg: "",
  loginError: "",
  equipeAtiva: {
    equipe: {},
    isGerente: -1, 
  }};

export const getInitialState = (state) => initialState;

export const loggedUser = createSlice({
  name: "loggedUser",
  initialState: initialState,
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
    resetErrors: (state, action) => {
      console.log("entrei");
      state.signupMsg = "";
      state.loginError = "";
    },
    
    logout: (state, action) => {
      console.log("logout");
      state = initialState;
    },

  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.token = action.payload.token;
        state.loginError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = "Usuário ou senha inválidos!";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signupMsg = action.payload.status + " Redirecting...";
      })
      .addCase(signup.rejected, (state, action) => {
        state.signupMsg = action.error.message;
      });
  },
  
});

//Selectors:

export const getEquipeAtiva = (state) => state.loggedUser.equipeAtiva;
export const getIsGerente = (state) => state.loggedUser.equipeAtiva.isGerente;
export const getIdUser = (state) => state.loggedUser.id;

export const { setEquipeAtiva, addMember, removeMember, resetErrors, logout } =
  loggedUser.actions;

export default loggedUser.reducer;
