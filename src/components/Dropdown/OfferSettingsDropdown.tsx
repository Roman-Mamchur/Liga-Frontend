"use client";

import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";

const OfferSettingsDropdown = () => {
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
          <BiSolidOffer />
          <h3 className="text-sm font-bold">Offers</h3>
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
          <form className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="flex flex-col gap-2 py-3">
                <h3 className="text-xl font-bold opacity-80">Welcome offer</h3>
                <span className="text-xs opacity-60">
                  To claim your welcome offer, please enter your code within 24
                  hours of signing up.
                </span>
              </div>

              <div className="flex flex-col gap-4 py-3">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Code</label>
                  <input
                    type="text"
                    className="rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end py-3">
                <button className="w-full rounded bg-primary px-4 py-2 text-sm text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary md:w-auto">
                  Submit
                </button>
              </div>
            </div>
          </form>

          <form className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="flex flex-col gap-2 py-3">
                <h3 className="text-xl font-bold opacity-80">
                  Claim bonus drop
                </h3>
                <span className="text-xs opacity-60">
                  Find bonus drop codes on our social media&apos;s such as Line,
                  WeChat & Telegram.
                </span>
              </div>

              <div className="flex flex-col gap-4 py-3">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Code</label>
                  <input
                    type="text"
                    className="rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end py-3">
                <button className="w-full rounded bg-primary px-4 py-2 text-sm text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary md:w-auto">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OfferSettingsDropdown;
