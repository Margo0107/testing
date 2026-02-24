import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import productsReducer from "./productSlice";
import { pokemonApi } from "./pokemonAPI";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,

    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, api.middleware),
});
