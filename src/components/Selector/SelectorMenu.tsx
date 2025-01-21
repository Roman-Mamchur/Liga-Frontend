"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import {
  setActiveCasinoGame,
  setActiveCasinoLeaderboard,
} from "@/store/slices/categorySlice";
import { categories, leaderboards } from "@/data/selectorData";

interface SelectorMenuProps {
  display: "label" | "icon" | "both";
  type: "casino" | "leaderboards";
}

const SelectorMenu: React.FC<SelectorMenuProps> = ({ display, type }) => {
  const activeCasinoGame = useSelector(
    (state: RootState) => state.category.activeCasinoGame,
  );
  const activeCasinoLeaderboard = useSelector(
    (state: RootState) => state.category.activeCasinoLeaderboard,
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryClick = (category: string) => {
    if (type === "casino") {
      dispatch(setActiveCasinoGame(category));
    } else if (type === "leaderboards") {
      dispatch(setActiveCasinoLeaderboard(category));
    }
  };

  const items = type === "casino" ? categories : leaderboards;

  return (
    <div className="flex">
      <div className="mt-4 w-0 flex-1 overflow-x-auto">
        <div className="mb-2 w-max rounded-full bg-gradient-to-r from-primary to-secondary p-2 text-sm font-medium text-white">
          <div className="flex gap-3">
            {items.map((item) => (
              <div
                key={item.label}
                onClick={() => handleCategoryClick(item.label)}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 duration-200 hover:scale-105 hover:bg-white/30 ${
                  (type === "casino" && activeCasinoGame === item.label) ||
                  (type === "leaderboards" &&
                    activeCasinoLeaderboard === item.label)
                    ? "bg-white/20"
                    : ""
                }`}
              >
                {display === "icon" && item.icon && (
                  <item.icon className="text-lg" />
                )}
                {display === "label" && <span>{item.label}</span>}
                {display === "both" && item.icon && (
                  <>
                    <item.icon className="text-lg" />
                    <span>{item.label}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectorMenu;
