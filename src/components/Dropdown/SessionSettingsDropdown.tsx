"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import SessionsTable from "../Table/SessionsTable";
import { useTranslations } from "next-intl";
import { dropdownMotion } from "@/utils/framerUtil";
import { motion } from "framer-motion";

const SessionSettingsDropdown = () => {
  const t = useTranslations("ProfilePage.Settings.Sessions");

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col rounded bg-card shadow-md">
      {/* Header */}
      <div
        className="flex cursor-pointer items-center justify-between px-6 py-3"
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
      <motion.div {...dropdownMotion(isOpen)}>
        <div className="flex flex-col gap-6 border-t border-gray-300 p-6">
          {/* Sessions Section */}
          <div className="rounded bg-white/50 px-1 py-3 sm:px-3 md:px-6">
            <SessionsTable />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SessionSettingsDropdown;
