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
  async (token) => {
    return httpGet(baseUrl + "/equipes", authHeader(token));
  }
);

export const deleteEquipeServer = createAsyncThunk(
  "equipes/deleteEquipeServer",
  async ({equipeId, token}) => {
    await httpDelete(baseUrl + "/equipes/" + equipeId, authHeader(token));
    return equipeId;
  }
);

export const addEquipeServer = createAsyncThunk(
  "equipes/addEquipeServer",
  async ({equipe, token}) => {
    return httpPost(baseUrl + "/equipes", equipe, authHeader(token));
  }
);

export const updateEquipeServer = createAsyncThunk(
  "equipes/updateEquipeServer",
  async ({equipe, token}) => {
    console.log(equipe,token)
    return httpPut(baseUrl + "/equipes/" + equipe.id, equipe, authHeader(token));
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
