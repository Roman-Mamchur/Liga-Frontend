import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthModalState = {
  modalType: "login" | "register" | null;
};

const initialState: AuthModalState = {
  modalType: null,
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<"login" | "register">) => {
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = authModalSlice.actions;
export default authModalSlice.reducer;
