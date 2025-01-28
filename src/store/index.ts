import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import promotionModalReducer from "./slices/promotionModalSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    promotionModal: promotionModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
