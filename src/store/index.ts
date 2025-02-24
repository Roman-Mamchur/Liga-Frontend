import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import promotionModalReducer from "./slices/promotionModalSlice";
import authModalReducer from "./slices/authModalSlice";
import walletModalReducer from "./slices/walletModalSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    promotionModal: promotionModalReducer,
    authModal: authModalReducer,
    walletModal: walletModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
