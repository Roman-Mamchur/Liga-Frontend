"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import FaqSection from "@/components/Affiliate/FaqSection";

const CoverScreen = ({ onStartChat }: { onStartChat: () => void }) => {
  const t = useTranslations("Modal.Support");

  const mockUsername = "John Doe";

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-8 pb-4 pt-3">
      {/* Greetings */}
      <div className="text-2xl font-bold">
        <h1 className="text-primary opacity-80">
          {t("greeting", { username: mockUsername })}
        </h1>
        <h3 className="opacity-60">{t("message")}</h3>
      </div>

      {/* General FAQ */}
      <FaqSection defaultCategory="General" />

      {/* Send Message Button */}
      <div
        className="flex cursor-pointer items-center justify-between gap-3 rounded bg-primary px-4 py-3 text-white shadow-md duration-200 hover:bg-secondary"
        onClick={onStartChat}
      >
        <p>{t("sendMessage")}</p>
        <span>
          <FaPaperPlane />
        </span>
      </div>
    </div>
  );
};

export default CoverScreen;
