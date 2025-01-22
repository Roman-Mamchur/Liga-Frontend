import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  activeCasinoGame: string;
  // activeSportsGame: string;
  activeCasinoLeaderboard: string;
}

const initialState: CategoryState = {
  activeCasinoGame: "Lobby",
  activeCasinoLeaderboard: "High Rollers",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCasinoGame(state, action: PayloadAction<string>) {
      state.activeCasinoGame = action.payload;
    },
    setActiveCasinoLeaderboard(state, action: PayloadAction<string>) {
      state.activeCasinoLeaderboard = action.payload;
    },
  },
});

export const { setActiveCasinoGame, setActiveCasinoLeaderboard } =
  categorySlice.actions;
export default categorySlice.reducer;
