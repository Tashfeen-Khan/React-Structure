import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import todoreducer from "../Features/todo/todoSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
// const rootReducer = combineReducers(todoreducer);
const persistedReducer = persistReducer(persistConfig, todoreducer);

export const store = configureStore({
  reducer: persistedReducer,
});
