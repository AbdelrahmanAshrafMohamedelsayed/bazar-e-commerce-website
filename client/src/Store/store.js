import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userReducer from "./user";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "presist",
  version: 1,
  storage,
};
const bigReducer = combineReducers({
  cart: CartReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);
const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export let persistor = persistStore(store);
