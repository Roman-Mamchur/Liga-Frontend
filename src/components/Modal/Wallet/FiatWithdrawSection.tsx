import { currencies } from "@/data/currenciesData";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const FiatWithdrawSection = () => {
  const t = useTranslations("Modal.Wallet.Fiat.Withdraw");

  const [selectedBalance, setSelectedBalance] = useState(currencies[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedBank, setSelectedBank] = useState(
    selectedCurrency.banks.length > 0 ? selectedCurrency.banks[0] : null,
  );
  const [isBalanceDropdownOpen, setIsBalanceDropdownOpen] = useState(false);
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
        setIsBankDropdownOpen(false);
        setIsBalanceDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCurrencyDropdownOpen, isBankDropdownOpen, isBalanceDropdownOpen]);

  const handleCurrencyClick = () => {
    setIsCurrencyDropdownOpen((prev) => !prev);
    if (isBankDropdownOpen) {
      setIsBankDropdownOpen(false);
    }
    if (isBalanceDropdownOpen) {
      setIsBalanceDropdownOpen(false);
    }
  };

  const handleBlockchainClick = () => {
    setIsBankDropdownOpen((prev) => !prev);
    if (isCurrencyDropdownOpen) {
      setIsCurrencyDropdownOpen(false);
    }
    if (isBalanceDropdownOpen) {
      setIsBalanceDropdownOpen(false);
    }
  };

  const handleBalanceClick = () => {
    setIsBalanceDropdownOpen((prev) => !prev);
    if (isCurrencyDropdownOpen) {
      setIsCurrencyDropdownOpen(false);
    }
    if (isBankDropdownOpen) {
      setIsBankDropdownOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded bg-card p-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm">{t("availableBalanceLabel")}</label>
        <div className="relative" ref={dropdownRef}>
          {/* Custom Available Balance Dropdown */}
          <div
            className="flex min-h-14 cursor-pointer items-center justify-between gap-6 rounded bg-white px-3 py-2 shadow-md"
            onClick={handleBalanceClick}
          >
            <span className="flex w-full items-center gap-2 text-nowrap">
              <div className="flex w-full items-center justify-between gap-3">
                <span className="flex-1 truncate text-sm font-semibold">
                  0.00
                </span>
                <div>
                  <selectedBalance.Icon className="size-full" />
                </div>
              </div>
            </span>
            <div>
              {isBalanceDropdownOpen ? (
                <FaChevronDown className="rotate-180 duration-100" />
              ) : (
                <FaChevronDown className="rotate-0 duration-100" />
              )}
            </div>
          </div>

          {isBalanceDropdownOpen && (
            <ul className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md">
              {currencies.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setSelectedBalance(item);
                    setIsBalanceDropdownOpen(false);
                    setIsCurrencyDropdownOpen(false);
                    setIsBankDropdownOpen(false);
                  }}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="py-4 text-xs opacity-80">0.00</span>
                    <div>
                      <item.Icon />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm">{t("currencyLabel")}</label>
        <div className="relative" ref={dropdownRef}>
          {/* Custom Currency Dropdown */}
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

          {isCurrencyDropdownOpen && (
            <ul className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md">
              {currencies.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setSelectedCurrency(item);
                    setSelectedBalance(item);
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
                      <span className="text-sm font-semibold">{item.name}</span>
                      <span className="text-xs opacity-80">
                        {item.fullName}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {selectedCurrency.banks.length > 0 && (
        <div className="flex flex-col gap-1">
          <label className="text-sm">{t("bankLabel")}</label>
          <div className="relative">
            {/* Custom Blockchain Network Dropdown */}
            <div
              className="flex min-h-14 cursor-pointer items-center justify-between rounded bg-white px-3 py-2 shadow-md"
              onClick={handleBlockchainClick}
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

            {isBankDropdownOpen && (
              <ul className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md">
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
              </ul>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-sm">{t("accountNumberLabel")}</label>
        <input
          type="text"
          className="min-h-14 items-center justify-between truncate rounded bg-white px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

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

      <div className="mt-3">
        <button className="min-h-14 w-full rounded bg-primary px-3 py-2 font-semibold text-white shadow-md duration-200 hover:bg-secondary">
          {t("withdraw")}
        </button>
      </div>
    </div>
  );
};

export default FiatWithdrawSection;
