import { useEffect, useState } from "react";
import CryptoDepositSection from "./CryptoDepositSection";
import CryptoWithdrawSection from "./CryptoWithdrawSection";
import FiatDepositSection from "./FiatDepositSection";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaBitcoin, FaMoneyBillWave } from "react-icons/fa6";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import FiatWithdrawSection from "./FiatWithdrawSection";

interface WalletContentSectionProps {
  mode: string;
  setMode: (mode: string) => void;
}

const WalletContentSection = ({ mode, setMode }: WalletContentSectionProps) => {
  const t = useTranslations("Modal.Wallet");
  const [hasRendered, setHasRendered] = useState(false);

  const toggleMode = (newMode: string) => {
    setMode(newMode);
  };

  useEffect(() => {
    setHasRendered(true);
  }, []);

  return (
    <>
      {/* Fiat/Crypto Buttons */}
      <div className="mb-3 flex w-full gap-1 rounded bg-card p-1">
        <button
          className={`${mode.startsWith("fiat") && "bg-background shadow-md"} flex-1 cursor-pointer rounded-sm p-1 text-center text-sm font-semibold duration-200`}
          onClick={() =>
            toggleMode(
              mode.includes("deposit") ? "fiat-deposit" : "fiat-withdraw",
            )
          }
        >
          <div className="flex items-center justify-center gap-2">
            <FaMoneyBillWave />
            {t("fiat")}
          </div>
        </button>
        <button
          className={`${mode.startsWith("crypto") && "bg-background shadow-md"} flex-1 cursor-pointer rounded-sm p-1 text-center text-sm font-semibold duration-200`}
          onClick={() =>
            toggleMode(
              mode.includes("deposit") ? "crypto-deposit" : "crypto-withdraw",
            )
          }
        >
          <div className="flex items-center justify-center gap-2">
            <FaBitcoin />
            {t("crypto")}
          </div>
        </button>
      </div>

      {/* Deposit/Withdraw Buttons */}
      <div className="mb-3 flex w-full gap-1 rounded bg-card p-1">
        <button
          className={`${mode.includes("deposit") && "bg-background shadow-md"} flex-1 cursor-pointer rounded-sm p-1 text-center text-sm font-semibold duration-200`}
          onClick={() =>
            toggleMode(
              mode.startsWith("crypto") ? "crypto-deposit" : "fiat-deposit",
            )
          }
        >
          <div className="flex items-center justify-center gap-2">
            <FaArrowCircleDown />
            {t("deposit")}
          </div>
        </button>
        <button
          className={`${!mode.includes("deposit") && "bg-background shadow-md"} flex-1 cursor-pointer rounded-sm p-1 text-center text-sm font-semibold duration-200`}
          onClick={() =>
            toggleMode(
              mode.startsWith("crypto") ? "crypto-withdraw" : "fiat-withdraw",
            )
          }
        >
          <div className="flex items-center justify-center gap-2">
            <FaArrowCircleUp />
            {t("withdraw")}
          </div>
        </button>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={
              hasRendered
                ? { opacity: 0, x: mode.includes("withdraw") ? 20 : -20 }
                : { opacity: 1, x: 0 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: mode.includes("withdraw") ? -20 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {mode === "crypto-deposit" && <CryptoDepositSection />}
            {mode === "crypto-withdraw" && <CryptoWithdrawSection />}
            {mode === "fiat-deposit" && <FiatDepositSection />}
            {mode === "fiat-withdraw" && <FiatWithdrawSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default WalletContentSection;
