import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/authRedux";
import customerReducer from "../redux/customer";

export const store = configureStore({
  reducer: {
    users: userReducer,
    customers : customerReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
  
    }),
});
