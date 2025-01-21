import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";

const RowsDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm">
          10
          <FaChevronDown aria-hidden="true" className="size-3" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-14 origin-top-right divide-y rounded bg-secondBackground shadow-md transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <p className="cursor-pointer px-4 py-2 text-sm">0</p>
          </MenuItem>
          <MenuItem>
            <p className="cursor-pointer bg-gray-500/20 px-4 py-2 text-sm">
              10
            </p>
          </MenuItem>
          <MenuItem>
            <p className="cursor-pointer px-4 py-2 text-sm">20</p>
          </MenuItem>
          <MenuItem>
            <p className="cursor-pointer px-4 py-2 text-sm">30</p>
          </MenuItem>
          <MenuItem>
            <p className="cursor-pointer px-4 py-2 text-sm">40</p>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default RowsDropdown;
