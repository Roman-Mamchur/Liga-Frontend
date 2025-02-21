"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { CgOptions } from "react-icons/cg";
import { Switch } from "@headlessui/react";
import { useTranslations } from "next-intl";

const PreferencesSettingsDropdown = () => {
  const t = useTranslations("ProfilePage.Settings.Preferences");

  const [isOpen, setIsOpen] = useState(false);
  const [isGhostMode, setIsGhostMode] = useState(false);
  const [isHideStats, setIsHideStats] = useState(false);
  const [isHideRaceStats, setIsHideRaceStats] = useState(false);
  const [isReceiveEmail, setIsReceiveEmail] = useState(false);
  const [isReceiveSMS, setIsReceiveSMS] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      isGhostMode,
      isHideStats,
      isHideRaceStats,
      isReceiveEmail,
      isReceiveSMS,
    };
    console.log("Form Submitted:", formData);
  };

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
          <CgOptions />
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-b bg-card p-6"
        >
          {/* Privacy Section */}
          <div className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="flex flex-col gap-2 py-3">
                <h3 className="text-xl font-bold opacity-80">
                  {t("Privacy.label")}
                </h3>
                <span className="text-xs opacity-60">
                  {t("Privacy.description")}
                </span>
              </div>

              {/* Toggle Switches */}
              {[
                {
                  state: isGhostMode,
                  setState: setIsGhostMode,
                  label: t("Privacy.ghostModeLabel"),
                  description: t("Privacy.ghostModeDescription"),
                },
                {
                  state: isHideStats,
                  setState: setIsHideStats,
                  label: t("Privacy.hideStatsLabel"),
                  description: t("Privacy.hideStatsDescription"),
                },
                {
                  state: isHideRaceStats,
                  setState: setIsHideRaceStats,
                  label: t("Privacy.hideRaceStatsLabel"),
                  description: t("Privacy.hideRaceStatsDescription"),
                },
              ].map(({ state, setState, label, description }, index) => (
                <div key={index} className="flex gap-4 py-2">
                  <Switch
                    checked={state}
                    onChange={setState}
                    className={`${state ? "bg-primary" : "bg-gray-300"} relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition`}
                  >
                    <span
                      className={`${state ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                  <div className="flex flex-col gap-1 text-sm">
                    <h4>{label}</h4>
                    <p className="opacity-60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Section */}
          <div className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="py-3">
                <h3 className="text-xl font-bold opacity-80">
                  {t("Marketing.label")}
                </h3>
              </div>
              {[
                {
                  state: isReceiveEmail,
                  setState: setIsReceiveEmail,
                  label: t("Marketing.receiveEmailLabel"),
                  description: t("Marketing.receiveEmailDescription"),
                },
                {
                  state: isReceiveSMS,
                  setState: setIsReceiveSMS,
                  label: t("Marketing.receiveSMSLabel"),
                  description: t("Marketing.receiveSMSDescription"),
                },
              ].map(({ state, setState, label, description }, index) => (
                <div key={index} className="flex gap-4 py-2">
                  <Switch
                    checked={state}
                    onChange={setState}
                    className={`${state ? "bg-primary" : "bg-gray-300"} relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition`}
                  >
                    <span
                      className={`${state ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                  <div className="flex flex-col gap-1 text-sm">
                    <h4>{label}</h4>
                    <p className="opacity-60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex flex-col justify-between gap-3 py-3 text-sm md:flex-row md:items-center">
            <p className="text-center opacity-60 sm:text-left">{t("notice")}</p>
            <button
              type="submit"
              className="rounded bg-primary px-4 py-2 text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary"
            >
              {t("button")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PreferencesSettingsDropdown;
