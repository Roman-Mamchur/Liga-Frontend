import { cryptoCurrencies } from "@/data/currenciesData";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { absoluteDropdownMotion, motionVariants } from "@/utils/framerUtil";

const CryptoWithdrawSection = () => {
  const t = useTranslations("Modal.Wallet.Crypto.Withdraw");

  const [selectedBalance, setSelectedBalance] = useState(cryptoCurrencies[0]);
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState(
    cryptoCurrencies[0],
  );
  const [selectedBlockchain, setSelectedBlockchain] = useState(
    selectedCryptocurrency.blockchains.length > 0
      ? selectedCryptocurrency.blockchains[0]
      : null,
  );
  const [isBalanceDropdownOpen, setIsBalanceDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isBlockchainDropdownOpen, setIsBlockchainDropdownOpen] =
    useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCurrencyDropdownOpen(false);
        setIsBlockchainDropdownOpen(false);
        setIsBalanceDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCurrencyDropdownOpen, isBlockchainDropdownOpen, isBalanceDropdownOpen]);

  const handleCurrencyClick = () => {
    setIsCurrencyDropdownOpen((prev) => !prev);
    if (isBlockchainDropdownOpen) {
      setIsBlockchainDropdownOpen(false);
    }
    if (isBalanceDropdownOpen) {
      setIsBalanceDropdownOpen(false);
    }
  };

  const handleBlockchainClick = () => {
    setIsBlockchainDropdownOpen((prev) => !prev);
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
    if (isBlockchainDropdownOpen) {
      setIsBlockchainDropdownOpen(false);
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
                  0.00000000
                </span>
                <div>
                  <selectedBalance.Icon
                    className="size-full"
                    style={{ color: selectedBalance.color }}
                  />
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

          <AnimatePresence>
            {isBalanceDropdownOpen && (
              <motion.ul
                className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md"
                {...motionVariants}
                variants={absoluteDropdownMotion}
              >
                {cryptoCurrencies.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setSelectedBalance(item);
                      setIsBalanceDropdownOpen(false);
                      setIsCurrencyDropdownOpen(false);
                      setIsBlockchainDropdownOpen(false);
                    }}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="py-4 text-xs opacity-80">
                        0.00000000
                      </span>
                      <div>
                        <item.Icon style={{ color: item.color }} />
                      </div>
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
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
                <selectedCryptocurrency.Icon
                  className="size-full"
                  style={{ color: selectedCryptocurrency.color }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">
                  {selectedCryptocurrency.name}
                </span>
                <span className="text-xs opacity-80">
                  {selectedCryptocurrency.fullName}
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

          <AnimatePresence>
            {isCurrencyDropdownOpen && (
              <motion.ul
                className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md"
                {...motionVariants}
                variants={absoluteDropdownMotion}
              >
                {cryptoCurrencies.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setSelectedCryptocurrency(item);
                      setSelectedBalance(item);
                      setSelectedBlockchain(
                        item.blockchains.length > 0
                          ? item.blockchains[0]
                          : null,
                      );
                      setIsCurrencyDropdownOpen(false);
                      setIsBlockchainDropdownOpen(false);
                    }}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-8">
                        <item.Icon
                          className="size-full"
                          style={{ color: item.color }}
                        />
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

      {selectedCryptocurrency.blockchains.length > 0 && (
        <div className="flex flex-col gap-1">
          <label className="text-sm">{t("networkLabel")}</label>
          <div className="relative">
            {/* Custom Blockchain Network Dropdown */}
            <div
              className="flex min-h-14 cursor-pointer items-center justify-between rounded bg-white px-3 py-2 shadow-md"
              onClick={handleBlockchainClick}
            >
              <span className="flex items-center gap-2 text-nowrap">
                <div className="text-sm font-semibold">
                  {selectedBlockchain?.networkName}
                </div>
              </span>
              {isBlockchainDropdownOpen ? (
                <FaChevronDown className="rotate-180 duration-100" />
              ) : (
                <FaChevronDown className="rotate-0 duration-100" />
              )}
            </div>

            <AnimatePresence>
              {isBlockchainDropdownOpen && (
                <motion.ul
                  className="absolute z-10 mt-1 w-full divide-y rounded bg-white py-2 shadow-md"
                  {...motionVariants}
                  variants={absoluteDropdownMotion}
                >
                  {selectedCryptocurrency.blockchains.map((blockchain) => (
                    <li
                      key={blockchain.networkName}
                      onClick={() => {
                        setSelectedBlockchain(blockchain);
                        setIsBlockchainDropdownOpen(false);
                      }}
                      className="cursor-pointer px-3 py-4 hover:bg-gray-100"
                    >
                      <div className="text-sm">
                        {blockchain.networkName} - {blockchain.fullName} (
                        {blockchain.name})
                      </div>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-sm">
          {t("addressLabel", { currency: selectedCryptocurrency.name })}
        </label>
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
              <selectedCryptocurrency.Icon
                style={{ color: selectedCryptocurrency.color }}
              />
            </div>
          </div>
          <button className="min-h-14 rounded bg-primary px-6 py-2 text-sm text-white shadow-md duration-200 hover:bg-secondary focus:outline-none group-focus:ring-2 group-focus:ring-primary">
            {t("max")}
          </button>
        </div>
      </div>

      <div className="my-3">
        <button className="min-h-14 w-full rounded bg-primary px-3 py-2 font-semibold text-white shadow-md duration-200 hover:bg-secondary">
          {t("withdraw")}
        </button>
      </div>
    </div>
  );
};

export default CryptoWithdrawSection;
