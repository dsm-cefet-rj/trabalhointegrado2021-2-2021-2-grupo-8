import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  isAnyOf,
} from "@reduxjs/toolkit";
import { baseUrl } from "../api/baseUrl";
import { httpDelete, httpGet, httpPost, httpPut } from "../api/utils";

const equipesAdapter = createEntityAdapter();

const initialState = equipesAdapter.getInitialState({
  status: "idle",
  error: null,
});

//async thunks

const authHeader = (token) => {
  return { headers: { Authorization: "Bearer " + token } };
};

export const fetchEquipes = createAsyncThunk(
  "equipes/fetchEquipes",
  async (payload, {getState}) => {
    return httpGet(baseUrl + "/equipes", authHeader(getState().loggedUser.token));
  }
);

export const deleteEquipeServer = createAsyncThunk(
  "equipes/deleteEquipeServer",
  async (equipeId, {getState}) => {
    await httpDelete(baseUrl + "/equipes/" + equipeId, authHeader(getState().loggedUser.token));
    return equipeId;
  }
);

export const addEquipeServer = createAsyncThunk(
  "equipes/addEquipeServer",
  async (equipe, {getState}) => {
    return httpPost(baseUrl + "/equipes", equipe, authHeader(getState().loggedUser.token));
  }
);

export const updateEquipeServer = createAsyncThunk(
  "equipes/updateEquipeServer",
  async (equipe, {getState}) => {
    return httpPut(baseUrl + "/equipes/" + equipe.id, equipe, authHeader(getState().loggedUser.token));
  }
);

export const equipes = createSlice({
  name: "equipes",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchEquipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        equipesAdapter.setAll(state, action.payload);
      })
      .addCase(deleteEquipeServer.fulfilled, (state, action) => {
        state.status = "updated";
        equipesAdapter.removeOne(state, action.payload);
      })
      .addMatcher(
        isAnyOf(updateEquipeServer.fulfilled, addEquipeServer.fulfilled),
        (state, action) => {
          state.status = "updated";
          equipesAdapter.upsertOne(state, action.payload);
        }
      )
      .addMatcher(
        isAnyOf(
          fetchEquipes.pending,
          updateEquipeServer.pending,
          addEquipeServer.pending,
          deleteEquipeServer.pending
        ),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        isAnyOf(
          fetchEquipes.rejected,
          updateEquipeServer.rejected,
          addEquipeServer.rejected,
          deleteEquipeServer.rejected
        ),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

//selectors

export const {
  selectAll: selectAllEquipes,
  selectById: selectEquipeById,
  selectIds: selectEquipeIds,
} = equipesAdapter.getSelectors((state) => state.equipes);

export default equipes.reducer;
