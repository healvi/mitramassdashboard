import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../redux/alertRedux";
import userReducer from "../redux/authRedux";
import customerReducer from "../redux/customer";

export const store = configureStore({
  reducer: {
    users: userReducer,
    customers : customerReducer,
    alerts: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});