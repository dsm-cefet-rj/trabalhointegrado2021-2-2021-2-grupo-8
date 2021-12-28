import { createSlice } from "@reduxjs/toolkit";

export const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {
    id: 1061,
  },
  reducers: {},
});

export default loggedUser.reducer;
