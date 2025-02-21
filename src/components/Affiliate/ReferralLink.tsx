"use client";

import { useTranslations } from "next-intl";
import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";

interface ReferralLinkProps {
  type: 1 | 2;
  desc: string;
}

const ReferralLink = ({ type, desc }: ReferralLinkProps) => {
  const t = useTranslations("AffiliatePage.ReferralLink");
  const toastT = useTranslations("Toast");

  const referralLink = "fafa.com/?c=GjsUVhQJ";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    toast(
      <div className="flex items-center gap-2 font-semibold text-primary">
        <FaCopy />
        <span>{toastT("referralLinkCopied")}</span>
      </div>,
      {
        className: "primary-toast",
        closeButton: false,
      },
    );
  };

  return (
    <div className="flex">
      <div className="w-0 flex-1">
        <div
          className={`flex flex-col items-center ${type === 1 ? "gap-6 p-4" : "gap-1"}`}
        >
          <p className="w-full opacity-80">{desc}</p>
          {type === 1 ? (
            <div className="flex w-full items-center gap-3">
              <input
                type="text"
                value={referralLink}
                readOnly
                onClick={handleCopy}
                className="h-fit min-w-24 max-w-40 flex-1 cursor-pointer truncate rounded px-4 py-2 text-sm shadow-md"
              />
              <button
                onClick={handleCopy}
                className="rounded bg-primary px-4 py-2 text-sm font-bold text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary"
              >
                {t("button")}
              </button>
            </div>
          ) : (
            <div className="relative w-full">
              <input
                type="text"
                value={referralLink}
                readOnly
                onClick={handleCopy}
                className="h-fit w-full cursor-pointer truncate rounded px-4 py-2 pr-10 text-sm shadow-md"
              />
              <FaCopy
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
                onClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
