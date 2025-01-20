"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setActiveCategory } from "@/store/slices/categorySlice";
import { categories } from "@/data/selectorData";

interface SelectorMenuProps {
  display: "label" | "icon" | "both";
}

const SelectorMenu: React.FC<SelectorMenuProps> = ({ display }) => {
  const activeCategory = useSelector(
    (state: RootState) => state.category.activeCategory,
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryClick = (category: string) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div className="flex">
      <div className="mt-4 w-0 flex-1 overflow-x-auto">
        <div className="mb-2 w-max rounded-full bg-gradient-to-r from-primary to-secondary p-2 text-sm font-medium text-white">
          <div className="flex gap-3">
            {categories.map((category) => (
              <div
                key={category.label}
                onClick={() => handleCategoryClick(category.label)}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 duration-200 hover:scale-105 hover:bg-white/30 ${
                  activeCategory === category.label ? "bg-white/20" : ""
                }`}
              >
                {display === "icon" && <category.icon className="text-lg" />}
                {display === "label" && <span>{category.label}</span>}
                {display === "both" && (
                  <>
                    <category.icon className="text-lg" />
                    <span>{category.label}</span>
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
