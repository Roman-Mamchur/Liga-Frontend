import { createSlice } from "@reduxjs/toolkit";

interface MessageModalState {
  isOpen: boolean;
  selectedMessage: null | { title: string; description: string; date: string };
}

const initialState: MessageModalState = {
  isOpen: false,
  selectedMessage: null,
};

const messageModalSlice = createSlice({
  name: "messageModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedMessage = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedMessage = null;
    },
  },
});

export const { openModal, closeModal } = messageModalSlice.actions;

export default messageModalSlice.reducer;
