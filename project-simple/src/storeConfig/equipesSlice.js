import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEquipes = createAsyncThunk(
  "equipes/fetchEquipes",
  async (idUser) => {
    try {
      let response = await fetch("http://localhost:5000/equipes");
      return await response.json();
    } catch (error) {
      return [];
    }
  }
);

export const equipes = createSlice({
  name: "equipes",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addEquipe: (state, { payload }) => {
      console.log(payload);
    },
    deleteEquipe: (state, { payload }) => {
      console.log(payload);
    },
    addMebro: (state, { payload }) => {
      console.log(payload);
    },
    deleteMebro: (state, { payload }) => {
      console.log(payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEquipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEquipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEquipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//selectors

export const selectMinhasEquipes = (idUser) => (state) => {
  let outras = [];

  state.equipes.data.forEach((e) => {
    e.membros.forEach((m) => {
      if (m === idUser) {
        outras.push(e);
      }
    });
  });
  let gerenciadas = state.equipes.data.filter((e) => e.gerente === idUser);
  return { gerenciadas: gerenciadas, outras: outras };
};

export const { addEquipe, deleteEquipe, addMebro, deleteMebro } =
  equipes.actions;

export default equipes.reducer;
