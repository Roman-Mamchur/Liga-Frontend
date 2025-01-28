import { createSlice } from "@reduxjs/toolkit";

interface PromotionModalState {
  isOpen: boolean;
  promotion: {
    title: string;
    date: string;
    image: string;
    description: string;
  } | null;
}

const initialState: PromotionModalState = {
  isOpen: false,
  promotion: null,
};

const promotionModalSlice = createSlice({
  name: "promotionModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.promotion = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.promotion = null;
    },
  },
});

export const { openModal, closeModal } = promotionModalSlice.actions;

export default promotionModalSlice.reducer;
