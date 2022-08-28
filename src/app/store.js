import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertReducer from "../redux/alertRedux";
import userReducer from "../redux/authRedux";
import customerReducer from "../redux/customer";
import favoritesReducer from "../redux/favoriteRedux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['favorites'] 
};
const rootReducer = combineReducers({
  users: userReducer,
  customers : customerReducer,
  alerts: alertReducer,
  favorites: favoritesReducer,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);