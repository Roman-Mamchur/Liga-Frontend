"use client";

import { useTranslations } from "next-intl";
import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";

interface AddressCopyProps {
  address: string;
  currency: string;
}

const AddressCopy = ({ address, currency }: AddressCopyProps) => {
  const t = useTranslations("Toast");

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    toast(
      <div className="flex items-center gap-2 font-semibold text-primary">
        <FaCopy />
        <span>{t("walletAddressCopied", { currency })}</span>
      </div>,
      {
        className: "primary-toast",
        closeButton: false,
      },
    );
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          value={address}
          readOnly
          onClick={handleCopy}
          className="min-h-14 w-full cursor-pointer truncate rounded border px-3 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <FaCopy
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
          onClick={handleCopy}
        />
      </div>
    </>
  );
};

export default AddressCopy;
