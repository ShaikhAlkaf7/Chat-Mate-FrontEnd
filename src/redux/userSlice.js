import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  selectedUser: null,
  onlineUser: null,
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
    setOnlineUsers: (state, action) => {
      state.onlineUser = action.payload;
    },
  },
});

export const { addUser, setSelectedUser, setOnlineUsers } = userReducer.actions;
// export default userReducer;
