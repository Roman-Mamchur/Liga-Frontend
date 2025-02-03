"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";

interface SortByDropdownProps {
  options: string[];
  selectedOption: string;
  sortOrder: "asc" | "desc";
  setSortOption: (option: string, order: "asc" | "desc") => void;
}

const SortByDropdown: React.FC<SortByDropdownProps> = ({
  options,
  selectedOption,
  sortOrder,
  setSortOption,
}) => {
  const handleOptionChange = (option: string) => {
    if (option !== selectedOption) {
      setSortOption(option, sortOrder);
    }
  };

  const toggleSortOrder = () => {
    setSortOption(selectedOption, sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <p className="mb-1 opacity-80">Sort By</p>
        <div className="flex items-center justify-between gap-1">
          <MenuButton className="inline-flex h-10 items-center justify-center gap-4 rounded bg-primary px-3 py-2 text-sm font-semibold text-white shadow-md">
            {selectedOption}
            <FaChevronDown aria-hidden="true" className="size-3" />
          </MenuButton>
          <button
            className="inline-flex h-10 items-center justify-center rounded bg-primary px-3 py-2 text-sm font-semibold text-white shadow-md"
            onClick={toggleSortOrder}
          >
            {sortOrder === "asc" ? (
              <TbSortAscending className="size-5" />
            ) : (
              <TbSortDescending className="size-5" />
            )}
          </button>
        </div>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 origin-top-left divide-y rounded bg-card shadow-md"
      >
        <div className="py-1 text-sm">
          {options.map((option) => (
            <MenuItem key={option}>
              <p
                className={`flex cursor-pointer items-center justify-between gap-4 text-nowrap px-4 py-2 duration-200 ${
                  selectedOption === option
                    ? "bg-gray-500/20"
                    : "hover:bg-gray-500/10"
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </p>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default SortByDropdown;
