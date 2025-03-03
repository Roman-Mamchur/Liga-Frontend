import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown, FaWallet } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { currencies } from "@/data/currenciesData";
import { openModal } from "@/store/slices/walletModalSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import BalanceDropdownSkeleton from "../Skeleton/BalanceDropdownSkeleton";
import { AnimatePresence, motion } from "framer-motion";
import { headlessUiMotion } from "@/utils/framerUtil";

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
      <div className="flex">
        <MenuButton className="block">
          <div className="flex cursor-pointer items-center justify-between gap-16 rounded-l bg-card px-3 py-2.5 duration-200 hover:bg-black/20">
            <span className="font-semibold">0.00</span>
            <span className="flex gap-2">
              <selectedBalance.Icon />
              <FaChevronDown />
            </span>
          </div>
        </MenuButton>

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
      <AnimatePresence>
        <motion.div>
          <MenuItems
            className="focus:outline-hidden absolute left-0 z-50 mt-5 rounded bg-white shadow-md"
            as={motion.div}
            key="menu-items"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={headlessUiMotion}
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
        </motion.div>
      </AnimatePresence>
    </Menu>
  );
}
