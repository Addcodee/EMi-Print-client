"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducers = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
