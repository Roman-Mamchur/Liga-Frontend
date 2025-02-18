import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import promotionModalReducer from "./slices/promotionModalSlice";
import authModalReducer from "./slices/authModalSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    promotionModal: promotionModalReducer,
    authModal: authModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
