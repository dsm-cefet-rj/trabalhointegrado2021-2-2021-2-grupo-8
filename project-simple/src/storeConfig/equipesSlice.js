import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEquipes = createAsyncThunk(
  "equipes/fetchEquipes",
  async () => {
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

// Action creators are generated for each case reducer function
export const { addEquipe, deleteEquipe, addMebro, deleteMebro } =
  equipes.actions;

export default equipes.reducer;
