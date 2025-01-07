import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "../services/categoriesApi";
import wishlistReducer from "../features/wishlistSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,

    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});


setupListeners(store.dispatch);