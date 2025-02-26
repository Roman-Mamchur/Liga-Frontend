import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@/i18n/routing";
import {
  FaCrown,
  FaGear,
  FaMoneyBill,
  FaRightFromBracket,
  FaUser,
  FaWallet,
} from "react-icons/fa6";
import { TbAffiliateFilled } from "react-icons/tb";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/walletModalSlice";

export default function ProfileDropdown() {
  const t = useTranslations("Header.profileDropdown");

  const dispatch = useDispatch();

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
        <div className="text-nowrap py-1 font-semibold">
          <MenuItem>
            <Link
              href="/profile"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <span className="shrink-0">
                <FaUser />
              </span>
              <span>{t("profile")}</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <div
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
              onClick={() => dispatch(openModal())}
            >
              <span className="shrink-0">
                <FaWallet />
              </span>
              <span>{t("wallet")}</span>
            </div>
          </MenuItem>
          <MenuItem>
            <Link
              href="/vip"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <span className="shrink-0">
                <FaCrown />
              </span>
              <span>{t("vip")}</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/affiliate"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <span className="shrink-0">
                <TbAffiliateFilled />
              </span>
              <span>{t("affiliate")}</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/profile/history"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <span className="shrink-0">
                <FaMoneyBill />
              </span>
              <span>{t("transactions")}</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/profile/settings"
              className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-2 px-4 py-2 text-sm text-gray-700 duration-200 hover:bg-black/10"
            >
              <span className="shrink-0">
                <FaGear />
              </span>
              <span>{t("settings")}</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <div className="data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-red-500 duration-200 hover:bg-black/10">
              <span className="shrink-0">
                <FaRightFromBracket />
              </span>
              <span>{t("logout")}</span>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
