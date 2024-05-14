import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  selectedUser: null,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { addUser, setSelectedUser } = userReducer.actions;
// export default userReducer;
