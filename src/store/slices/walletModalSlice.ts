import { createSlice } from "@reduxjs/toolkit";

interface WalletModalState {
  isOpen: boolean;
}

const initialState: WalletModalState = {
  isOpen: false,
};

const walletModalSlice = createSlice({
  name: "walletModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = walletModalSlice.actions;

export default walletModalSlice.reducer;
