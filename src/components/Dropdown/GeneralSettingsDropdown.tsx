"use client";

import { countryCodes } from "@/data/countryCodeData";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { MdTune } from "react-icons/md";

const GeneralSettingsDropdown = () => {
  const t = useTranslations("ProfilePage.Settings.General");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
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
          <MdTune />
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
          {/* Email Section */}
          <form className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="flex items-center gap-3 py-3">
                <h3 className="text-xl font-bold opacity-80">
                  {t("Email.label")}
                </h3>
                <span className="rounded-full bg-green-500 px-4 py-1 text-xs text-white">
                  {t("Email.verified")}
                </span>
              </div>
              <div className="flex flex-col gap-2 py-3">
                <label className="text-sm">{t("Email.emailInputLabel")}</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex justify-end py-3">
                <button className="w-full rounded bg-primary px-4 py-2 text-sm text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary md:w-auto">
                  {t("Email.button")}
                </button>
              </div>
            </div>
          </form>

          {/* Phone Number Section */}
          <form className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="flex flex-col gap-2 py-3">
                <h3 className="text-xl font-bold opacity-80">
                  {t("Phone.label")}
                </h3>
                <span className="text-xs opacity-60">
                  {t("Phone.description")}
                </span>
              </div>

              <div className="flex flex-col gap-4 py-3">
                {/* Country Code Select */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm">
                    {t("Phone.countryCodeInputLabel")}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                      className="w-full cursor-pointer appearance-none rounded border bg-white px-3 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          ({item.code}) {item.country}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <FaChevronDown className="size-3" />
                    </div>
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm">
                    {t("Phone.phoneInputLabel")}
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder={t("Phone.phoneInputPlaceholder")}
                    className="rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end py-3">
                <button className="w-full rounded bg-primary px-4 py-2 text-sm text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary md:w-auto">
                  {t("Phone.button")}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeneralSettingsDropdown;
