import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },

    removeUser: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userReducer.actions;
// export default userReducer;
