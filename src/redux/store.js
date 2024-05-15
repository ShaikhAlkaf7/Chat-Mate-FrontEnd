import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { socketReducer } from "./socketSlice";

const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    socket: socketReducer.reducer,
  },
});
export default store;
