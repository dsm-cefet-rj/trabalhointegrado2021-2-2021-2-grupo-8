import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  isAnyOf,
} from "@reduxjs/toolkit";
import { baseUrl } from "../api/baseUrl";
import { httpDelete, httpGet, httpPost, httpPut } from "../api/utils";

const tarefasAdapter = createEntityAdapter();

const initialState = tarefasAdapter.getInitialState({
  status: "idle",
  error: null,
});

//async thunks

const authHeader = (token) => {
  return { headers: { Authorization: "Bearer " + token } };
};

export const fetchTarefas = createAsyncThunk(
  "tarefas/fetchTarefas",
  async (token) => {
    return httpGet(baseUrl + "/tarefas", authHeader(token));
  }
);

export const deleteTarefaServer = createAsyncThunk(
  "tarefas/deleteTarefaServer",
  async ({tarefa, token}) => {
    await httpDelete(baseUrl + "/tarefas/" + tarefa.id, authHeader(token));
    return tarefa.id;
  }
);

export const addTarefaServer = createAsyncThunk(
  "tarefas/addTarefaServer",
  async (tarefa, token) => {
    return httpPost(baseUrl + "/tarefas", tarefa, authHeader(token));
  }
);

export const updateTarefaServer = createAsyncThunk(
  "tarefas/updateTarefaServer",
  async (tarefa, token) => {
    return httpPut(baseUrl + "/tarefas/" + tarefa.id, tarefa, authHeader(token));
  }
);

export const tarefas = createSlice({
  name: "tarefas",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTarefas.fulfilled, (state, action) => {
        state.status = "succeeded";
        tarefasAdapter.setAll(state, action.payload);
      })
      .addCase(deleteTarefaServer.fulfilled, (state, action) => {
        state.status = "updated";
        tarefasAdapter.removeOne(state, action.payload);
      })
      .addMatcher(
        isAnyOf(updateTarefaServer.fulfilled, addTarefaServer.fulfilled),
        (state, action) => {
          state.status = "updated";
          tarefasAdapter.upsertOne(state, action.payload);
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTarefas.pending,
          updateTarefaServer.pending,
          addTarefaServer.pending,
          deleteTarefaServer.pending
        ),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTarefas.rejected,
          updateTarefaServer.rejected,
          addTarefaServer.rejected,
          deleteTarefaServer.rejected
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
  selectAll: selectAllTarefas,
  selectById: selectTarefaById,
  selectIds: selectTarefaIds,
} = tarefasAdapter.getSelectors((state) => state.tarefas);

export default tarefas.reducer;
