import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@/i18n/routing";
import {
  FaCrown,
  FaGear,
  FaHeadset,
  FaMoneyBill,
  FaRightFromBracket,
  FaUser,
  FaWallet,
} from "react-icons/fa6";
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
              href="/profile"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaUser />
              <span>Profile</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/wallet"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaWallet />
              <span>Wallet</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/vip"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaCrown />
              <span>VIP</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/affiliate"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <TbAffiliateFilled />
              <span>Affiliate</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/profile/history"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaMoneyBill />
              <span>Transactions</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/profile/settings"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaGear />
              <span>Settings</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="support"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <FaHeadset />
              <span>Live Support</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/logout"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-red-500 duration-200 hover:bg-black/10"
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
