import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown, FaWallet } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { currencies } from "@/data/currenciesData";
import { openModal } from "@/store/slices/walletModalSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import BalanceDropdownSkeleton from "../Skeleton/BalanceDropdownSkeleton";

export default function BalanceDropdown() {
  const t = useTranslations("Header");

  const dispatch = useDispatch();

  const [selectedBalance, setSelectedBalance] = useState(currencies[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <BalanceDropdownSkeleton />;

  return (
    <Menu as="div" className="relative">
      <MenuButton className="block">
        <div className="flex min-w-48">
          <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-l bg-card p-2.5 duration-200 hover:bg-black/20">
            <span className="font-semibold">0.00</span>
            <span className="flex gap-2">
              <selectedBalance.Icon />
              <FaChevronDown />
            </span>
          </div>
          <div
            className="flex cursor-pointer items-center justify-center rounded-r bg-primary p-2.5 text-white duration-200 hover:bg-secondary"
            onClick={() => dispatch(openModal())}
          >
            <span className="hidden lg:block">{t("wallet")}</span>
            <span className="lg:hidden">
              <FaWallet />
            </span>
          </div>
        </div>
      </MenuButton>

      <MenuItems
        transition
        className="focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in absolute left-1/2 z-50 mt-5 w-fit origin-top-right -translate-x-1/2 rounded bg-white shadow-md transition"
      >
        <div className="divide-y text-nowrap py-2">
          {currencies.map((currency) => (
            <MenuItem key={currency.name}>
              <div
                className="flex cursor-pointer items-center gap-14 p-3 duration-200 hover:bg-black/10"
                onClick={() => setSelectedBalance(currency)}
              >
                <span>0.00</span>
                <div className="flex items-center gap-2">
                  <span>
                    <currency.Icon />
                  </span>
                  <span>{currency.name}</span>
                </div>
              </div>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
