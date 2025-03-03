"use client";

import { headlessUiMotion } from "@/utils/framerUtil";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

interface RowsDropdownProps {
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

const RowsDropdown: React.FC<RowsDropdownProps> = ({
  rowsPerPage,
  setRowsPerPage,
}) => {
  const options = [0, 10, 20, 30, 40];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm">
          {rowsPerPage}
          <FaChevronDown aria-hidden="true" className="size-3" />
        </MenuButton>
      </div>

      <AnimatePresence>
        <MenuItems
          className="absolute right-0 z-10 mt-2 w-14 origin-top-right divide-y rounded bg-card shadow-md"
          as={motion.div}
          key="menu-items"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headlessUiMotion}
        >
          <div className="py-1 text-sm">
            {options.map((option) => (
              <MenuItem key={option}>
                <p
                  className={`cursor-pointer px-4 py-2 duration-200 ${
                    rowsPerPage === option
                      ? "bg-gray-500/20"
                      : "hover:bg-gray-500/10"
                  }`}
                  onClick={() => setRowsPerPage(option)}
                >
                  {option}
                </p>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </AnimatePresence>
    </Menu>
  );
};

export default RowsDropdown;
