import { createSlice } from "@reduxjs/toolkit";

interface SupportModalState {
  isOpen: boolean;
}

const initialState: SupportModalState = {
  isOpen: false,
};

const supportModalSlice = createSlice({
  name: "supportModal",
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

export const { openModal, closeModal } = supportModalSlice.actions;

export default supportModalSlice.reducer;
