"use client";

import { messages } from "@/data/messagesMockData";
import { useState } from "react";
import { FaBoxOpen, FaMessage } from "react-icons/fa6";
import Pagination from "@/components/Layout/Pagination";
import { useTranslations } from "next-intl";

const ProfileMessagesPage = () => {
  const t = useTranslations("ProfilePage.Messages");

  const [currentPage, setCurrentPage] = useState(1);
  // const [activeTab, setActiveTab] = useState<"Inbox" | "Sent">("Inbox");

  const rowsPerPage = 5;
  const totalRows = messages.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  // Corrected Pagination Logic
  const currentRows = messages.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaMessage />
        <h1>{t("label")}</h1>
      </div>

      {/* Tabs */}
      {/* <div className="flex items-center gap-4 text-sm font-bold">
        <button
          className={`rounded px-11 py-2 shadow-md ring-2 duration-200 hover:scale-105 ${
            activeTab === "Inbox"
              ? "bg-primary text-white ring-stroke"
              : "bg-card ring-black/30"
          }`}
          onClick={() => setActiveTab("Inbox")}
        >
          Inbox
        </button>
        <button
          className={`rounded px-11 py-2 shadow-md ring-2 duration-200 hover:scale-105 ${
            activeTab === "Sent"
              ? "bg-primary text-white ring-stroke"
              : "bg-card ring-black/30"
          }`}
          onClick={() => setActiveTab("Sent")}
        >
          Sent
        </button>
      </div> */}

      {/* Messages Table */}
      <div className="rounded bg-card py-2">
        {currentRows.length > 0 ? (
          <ul className="divide-y-2 divide-white">
            {currentRows.map((message) => (
              <li
                key={message.id}
                className={`cursor-pointer px-6 py-3 duration-200 ${message.seen ? "hover:bg-gray-300" : "hover:bg-accentOpacity"}`}
              >
                <div className="flex items-center gap-1">
                  <h4
                    className={`${!message.seen ? "font-bold text-primary" : "font-medium"}`}
                  >
                    {message.title}
                  </h4>
                  {!message.seen && (
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  )}
                </div>
                <p
                  className={`text-sm text-gray-600 ${!message.seen && "font-bold"}`}
                >
                  {message.description}
                </p>
                <p
                  className={`text-xs text-gray-400 ${!message.seen && "font-bold"}`}
                >
                  {message.date}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center gap-3 opacity-60">
            <FaBoxOpen className="size-8" />
            <span className="text-sm">{t("empty")}</span>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalRows > rowsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProfileMessagesPage;
