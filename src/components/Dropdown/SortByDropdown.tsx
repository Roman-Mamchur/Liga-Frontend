"use client";

import { headlessUiMotion } from "@/utils/framerUtil";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaChevronDown } from "react-icons/fa6";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";

interface SortByDropdownProps {
  options: { key: string; label: string }[];
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
  const t = useTranslations("ProfilePage.Components");

  const handleOptionChange = (optionKey: string) => {
    if (optionKey !== selectedOption) {
      setSortOption(optionKey, sortOrder);
    }
  };

  const toggleSortOrder = () => {
    setSortOption(selectedOption, sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <p className="mb-1 opacity-80">{t("sortingLabel")}</p>
        <div className="flex items-center justify-between gap-1">
          <MenuButton className="inline-flex h-10 items-center justify-center gap-4 rounded bg-primary px-3 py-2 text-sm font-semibold text-white shadow-md">
            {options.find((o) => o.key === selectedOption)?.label || ""}
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

      <AnimatePresence>
        <MenuItems
          className="absolute left-0 z-10 mt-2 origin-top-left divide-y rounded bg-card shadow-md"
          as={motion.div}
          key="menu-items"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headlessUiMotion}
        >
          <div className="py-1 text-sm">
            {options.map((option) => (
              <MenuItem key={option.key}>
                <p
                  className={`flex cursor-pointer items-center justify-between gap-4 text-nowrap px-4 py-2 duration-200 ${
                    selectedOption === option.key
                      ? "bg-gray-500/20"
                      : "hover:bg-gray-500/10"
                  }`}
                  onClick={() => handleOptionChange(option.key)}
                >
                  {option.label}
                </p>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </AnimatePresence>
    </Menu>
  );
};

export default SortByDropdown;
