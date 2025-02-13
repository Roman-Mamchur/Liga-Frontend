"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { CgOptions } from "react-icons/cg";
import { Switch } from "@headlessui/react";

const PreferencesSettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGhostMode, setIsGhostMode] = useState(false);
  const [isHideStats, setIsHideStats] = useState(false);
  const [isHideRaceStats, setIsHideRaceStats] = useState(false);
  const [isReceiveEmail, setIsReceiveEmail] = useState(false);
  const [isReceiveSMS, setIsReceiveSMS] = useState(false);

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
          <CgOptions />
          <h3 className="text-sm font-bold">Preferences</h3>
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
          {/* Privacy Section */}
          <div className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="flex flex-col gap-2 py-3">
                <h3 className="text-xl font-bold opacity-80">Privacy</h3>
                <span className="text-xs opacity-60">
                  User privacy is one of the core values of Fafa878. These
                  settings allow you to be completely anonymous from the rest of
                  the players.
                </span>
              </div>

              {/* Toggle Switches */}
              <div className="flex flex-col gap-8 py-3">
                {/* Enable Ghost Mode */}
                <div className="flex gap-4">
                  <Switch
                    checked={isGhostMode}
                    onChange={setIsGhostMode}
                    className={`${
                      isGhostMode ? "bg-primary" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        isGhostMode ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>

                  <div className="flex flex-col gap-1 text-sm">
                    <h4>Enable Ghost Mode</h4>
                    <p className="opacity-60">
                      Your username will not appear in public bet feed and bet
                      preview.
                    </p>
                  </div>
                </div>

                {/* Hide All Statistics */}
                <div className="flex gap-4">
                  <Switch
                    checked={isHideStats}
                    onChange={setIsHideStats}
                    className={`${
                      isHideStats ? "bg-primary" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        isHideStats ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>

                  <div className="flex flex-col gap-1 text-sm">
                    <h4>Hide all your statistics</h4>
                    <p className="opacity-60">
                      Other users won&apos;t be able to view your wins, losses,
                      and wagered statistics.
                    </p>
                  </div>
                </div>

                {/* Hide Race Statistics */}
                <div className="flex gap-4">
                  <Switch
                    checked={isHideRaceStats}
                    onChange={setIsHideRaceStats}
                    className={`${
                      isHideRaceStats ? "bg-primary" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        isHideRaceStats ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>

                  <div className="flex flex-col gap-1 text-sm">
                    <h4>Hide all your race statistics</h4>
                    <p className="opacity-60">
                      Other users won&apos;t be able to view your race
                      statistics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3 py-3 text-sm md:flex-row md:items-center">
                <p className="opacity-60">
                  Please allow up to 30 seconds for update to take effect.
                </p>
                <button className="rounded bg-primary px-4 py-2 text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Marketing Section */}
          <div className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="py-3">
                <h3 className="text-xl font-bold opacity-80">Marketing</h3>
              </div>

              {/* Toggle Switches */}
              <div className="flex flex-col gap-8 py-3">
                {/* Receive Email */}
                <div className="flex gap-4">
                  <Switch
                    checked={isReceiveEmail}
                    onChange={setIsReceiveEmail}
                    className={`${
                      isReceiveEmail ? "bg-primary" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        isReceiveEmail ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>

                  <div className="flex flex-col gap-1 text-sm">
                    <h4>Receive email offers from us</h4>
                    <p className="opacity-60">
                      Choose if you wish to hear from us via email
                    </p>
                  </div>
                </div>

                {/* Receive SMS */}
                <div className="flex gap-4">
                  <Switch
                    checked={isReceiveSMS}
                    onChange={setIsReceiveSMS}
                    className={`${
                      isReceiveSMS ? "bg-primary" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        isReceiveSMS ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>

                  <div className="flex flex-col gap-1 text-sm">
                    <h4>Receive SMS offers from us</h4>
                    <p className="opacity-60">
                      Choose if you wish to hear from us via SMS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3 py-3 text-sm md:flex-row md:items-center">
                <p className="opacity-60">
                  Please allow up to 30 seconds for update to take effect.
                </p>
                <button className="rounded bg-primary px-4 py-2 text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreferencesSettingsDropdown;
