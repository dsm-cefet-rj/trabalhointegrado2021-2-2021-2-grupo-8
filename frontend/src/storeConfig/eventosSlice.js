import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  isAnyOf,
} from "@reduxjs/toolkit";
import { baseUrl } from "../api/baseUrl";
import { httpDelete, httpGet, httpPost, httpPut } from "../api/utils";

const eventosAdapter = createEntityAdapter();

const initialState = eventosAdapter.getInitialState({
  status: "idle",
  error: null,
});

//async thunks

const authHeader = (token) => {
  return { headers: { Authorization: "Bearer " + token } };
};

export const fetchEventos = createAsyncThunk(
  "eventos/fetchEventos",
  async (payload, {getState}) => {
    return httpGet(baseUrl + "/eventos", authHeader(getState().loggedUser.token));
  }
);

export const deleteEventoServer = createAsyncThunk(
  "eventos/deleteEventoServer",
  async (evento, {getState}) => {
    await httpDelete(baseUrl + "/eventos/" + evento.id, authHeader(getState().loggedUser.token));
    return evento.id;
  }
);

export const addEventoServer = createAsyncThunk(
  "eventos/addEventoServer",
  async (evento, {getState}) => {
    return httpPost(baseUrl + "/eventos", evento, authHeader(getState().loggedUser.token));
  }
);

export const updateEventoServer = createAsyncThunk(
  "eventos/updateEventoServer",
  async (evento, {getState}) => {
    return httpPut(baseUrl + "/eventos/" + evento.id, evento, authHeader(getState().loggedUser.token));
  }
);

export const eventos = createSlice({
  name: "eventos",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchEventos.fulfilled, (state, action) => {
        state.status = "succeeded";
        eventosAdapter.setAll(state, action.payload);
      })
      .addCase(deleteEventoServer.fulfilled, (state, action) => {
        state.status = "updated";
        eventosAdapter.removeOne(state, action.payload);
      })
      .addMatcher(
        isAnyOf(updateEventoServer.fulfilled, addEventoServer.fulfilled),
        (state, action) => {
          state.status = "updated";
          eventosAdapter.upsertOne(state, action.payload);
        }
      )
      .addMatcher(
        isAnyOf(
          fetchEventos.pending,
          updateEventoServer.pending,
          addEventoServer.pending,
          deleteEventoServer.pending
        ),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        isAnyOf(
          fetchEventos.rejected,
          updateEventoServer.rejected,
          addEventoServer.rejected,
          deleteEventoServer.rejected
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
  selectAll: selectAllEventos,
  selectById: selectEventoById,
  selectIds: selectEventoIds,
} = eventosAdapter.getSelectors((state) => state.eventos);

export default eventos.reducer;
