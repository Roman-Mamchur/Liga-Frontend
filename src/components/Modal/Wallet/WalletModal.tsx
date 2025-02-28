"use client";

import { useEffect, useCallback } from "react";
import { FaWallet, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/walletModalSlice";
import { RootState } from "@/store";
import WalletContentSection from "./WalletContentSection";
import { useTranslations } from "next-intl";

const WalletModal = () => {
  const t = useTranslations("Modal");

  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.walletModal.isOpen);

  const handleEscPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isOpen, handleEscPress]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(event) =>
        event.target === event.currentTarget && dispatch(closeModal())
      }
    >
      <div className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[90vh] md:w-8/12 md:rounded-lg lg:w-6/12">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <span>
              <FaWallet />
            </span>
            <span className="font-bold">{t("Wallet.label")}</span>
          </div>
          <button
            className="text-gray-500 duration-200 hover:text-gray-800"
            onClick={() => dispatch(closeModal())}
          >
            <span className="hidden md:block">{t("exit")}</span>
            <FaXmark className="size-5 md:hidden" />
          </button>
        </div>
        <div className="w-full border ring-gray-500"></div>
        <div className="flex-1 overflow-y-auto p-8">
          <WalletContentSection />
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
