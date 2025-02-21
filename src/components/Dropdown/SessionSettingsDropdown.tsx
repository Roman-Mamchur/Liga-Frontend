"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import SessionsTable from "../Table/SessionsTable";
import { useTranslations } from "next-intl";

const SessionSettingsDropdown = () => {
  const t = useTranslations("ProfilePage.Settings.Sessions");

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col rounded shadow-md">
      {/* Header */}
      <div
        className={`flex cursor-pointer items-center justify-between rounded bg-card px-6 py-3 ${
          isOpen ? "rounded-b-none border-b border-black/20" : ""
        }`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-3">
          <LuClock4 />
          <h3 className="text-sm font-bold">{t("label")}</h3>
        </div>
        <div
          className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <FaChevronDown />
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="flex flex-col gap-6 rounded-b bg-card p-6">
          {/* Sessions Section */}
          <div className="rounded bg-white/50 px-1 py-3 sm:px-3 md:px-6">
            <SessionsTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionSettingsDropdown;
