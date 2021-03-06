import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import localForage from "localforage";
import logger from "redux-logger";

import { authSlice } from "./slices/auth";
import { modalSlice } from "./slices/modal";
import { postSlice } from "./slices/post";
import { userSlice } from "./slices/user";

const persistConfig = {
  key: "root",
  storage: localForage,
  timeout: 0,
};

const combinedReducers = combineReducers({
  auth: authSlice.reducer,
  modal: modalSlice.reducer,
  post: postSlice.reducer,
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "post/upload",
        ],
        ignoredActionPaths: ["payload"],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
