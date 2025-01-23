import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import {
  FaCrown,
  FaGear,
  FaHeadset,
  FaMoneyBill,
  FaRightFromBracket,
  FaTicket,
  FaUser,
  FaVault,
  FaWallet,
} from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { TbAffiliateFilled } from "react-icons/tb";

export default function ProfileDropdown() {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="block">
        <div className="rounded-full p-3 duration-200 hover:bg-card">
          <FaUser className="opacity-80" />
        </div>
      </MenuButton>

      <MenuItems
        transition
        className="focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in absolute right-0 z-50 mt-5 w-fit origin-top-right rounded bg-white shadow-md transition"
      >
        <div className="py-1 font-semibold">
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaWallet />
              <span>Wallet</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaVault />
              <span>Vault</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaCrown />
              <span>VIP</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <TbAffiliateFilled />
              <span>Affiliate</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <IoStatsChart />
              <span>Statistics</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaMoneyBill />
              <span>Transactions</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaTicket />
              <span>My Bets</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaGear />
              <span>Settings</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaHeadset />
              <span>Live Support</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaRightFromBracket />
              <span>Logout</span>
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
