import { configureStore } from '@reduxjs/toolkit';
import  userReducer from "../store/slice/user/user.slice";

export const store = configureStore({
  reducer: {
    userReducer

  },
});