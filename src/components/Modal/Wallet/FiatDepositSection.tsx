import { currencies } from "@/data/currenciesData";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { absoluteDropdownMotion } from "@/utils/framerUtil";

const FiatDepositSection = () => {
  const t = useTranslations("Modal.Wallet.Fiat.Deposit");

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedBank, setSelectedBank] = useState(
    selectedCurrency.banks.length > 0 ? selectedCurrency.banks[0] : null,
  );
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCurrencyDropdownOpen(false);
        if (isBankDropdownOpen) {
          setIsBankDropdownOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isBankDropdownOpen]);

  const handleCurrencyClick = () => {
    setIsCurrencyDropdownOpen((prev) => !prev);
    if (isBankDropdownOpen) {
      setIsBankDropdownOpen(false);
    }
  };

  const handleBankClick = () => {
    setIsBankDropdownOpen((prev) => !prev);
    if (isCurrencyDropdownOpen) {
      setIsCurrencyDropdownOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded bg-card p-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm">{t("currencyLabel")}</label>
        <div className="relative" ref={dropdownRef}>
          {/* Currency Dropdown */}
          <div
            className="flex min-h-14 cursor-pointer items-center justify-between rounded bg-white px-3 py-2 shadow-md"
            onClick={handleCurrencyClick}
          >
            <span className="flex items-center gap-2 text-nowrap">
              <div className="size-8">
                <selectedCurrency.Icon className="size-full" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">
                  {selectedCurrency.name}
                </span>
                <span className="text-xs opacity-80">
                  {selectedCurrency.fullName}
                </span>
              </div>
            </span>
            <div>
              {isCurrencyDropdownOpen ? (
                <FaChevronDown className="rotate-180 duration-100" />
              ) : (
                <FaChevronDown className="rotate-0 duration-100" />
              )}
            </div>
          </div>

          {/* Animated Currency Dropdown List */}
          <AnimatePresence>
            {isCurrencyDropdownOpen && (
              <motion.ul
                className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md"
                {...absoluteDropdownMotion}
              >
                {currencies.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setSelectedCurrency(item);
                      setSelectedBank(
                        item.banks.length > 0 ? item.banks[0] : null,
                      );
                      setIsCurrencyDropdownOpen(false);
                      setIsBankDropdownOpen(false);
                    }}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-8">
                        <item.Icon className="size-full" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">
                          {item.name}
                        </span>
                        <span className="text-xs opacity-80">
                          {item.fullName}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bank Dropdown */}
      {selectedCurrency.banks.length > 0 && (
        <div className="flex flex-col gap-1">
          <label className="text-sm">{t("bankLabel")}</label>
          <div className="relative">
            <div
              className="flex min-h-14 cursor-pointer items-center justify-between rounded bg-white px-3 py-2 shadow-md"
              onClick={handleBankClick}
            >
              <span className="flex items-center gap-2 text-nowrap">
                <div className="text-sm font-semibold">
                  {selectedBank?.name}
                </div>
              </span>
              {isBankDropdownOpen ? (
                <FaChevronDown className="rotate-180 duration-100" />
              ) : (
                <FaChevronDown className="rotate-0 duration-100" />
              )}
            </div>

            {/* Animated Bank Dropdown List */}
            <AnimatePresence>
              {isBankDropdownOpen && (
                <motion.ul
                  key="bank-dropdown"
                  className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md"
                  {...absoluteDropdownMotion}
                >
                  {selectedCurrency.banks.map((bank) => (
                    <li
                      key={bank.name}
                      onClick={() => {
                        setSelectedBank(bank);
                        setIsBankDropdownOpen(false);
                      }}
                      className="cursor-pointer px-3 py-4 hover:bg-gray-100"
                    >
                      <div className="text-sm">{bank.name}</div>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Amount Input */}
      <div className="flex flex-col gap-1">
        <label className="text-sm">{t("amountLabel")}</label>
        <div className="flex justify-between gap-2">
          <div className="group relative flex flex-1 items-center">
            <input
              type="number"
              min={0}
              className="min-h-14 w-full truncate rounded bg-white py-2 pl-3 pr-14 shadow-md [appearance:textfield] focus:outline-none focus:ring-2 focus:ring-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <div className="absolute right-3 flex items-center justify-center">
              <selectedCurrency.Icon />
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Button */}
      <div className="mt-3">
        <button className="min-h-14 w-full rounded bg-primary px-3 py-2 font-semibold text-white shadow-md duration-200 hover:bg-secondary">
          {t("deposit")}
        </button>
      </div>
    </div>
  );
};

export default FiatDepositSection;
