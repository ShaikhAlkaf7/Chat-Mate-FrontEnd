import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
};

export const socketReducer = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = socketReducer.actions;
