"use client";

import { Message, messages } from "@/data/messagesMockData";
import { useState } from "react";
import { FaBoxOpen, FaMessage } from "react-icons/fa6";
import Pagination from "@/components/Layout/Pagination";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/messageModalSlice";

const ProfileMessagesPage = () => {
  const t = useTranslations("ProfilePage.Messages");

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;
  const totalRows = messages.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const currentRows = messages.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const handleMessageClick = (message: Message) => {
    dispatch(openModal(message));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaMessage />
        <h1>{t("label")}</h1>
      </div>

      {/* Messages Table */}
      <div className="rounded bg-card py-2">
        {currentRows.length > 0 ? (
          <ul className="divide-y-2 divide-white">
            {currentRows.map((message) => (
              <li
                key={message.id}
                className={`relative cursor-pointer py-3 pl-10 pr-6 duration-200 ${message.seen ? "hover:bg-gray-300" : "hover:bg-accentOpacity"}`}
                onClick={() => handleMessageClick(message)}
              >
                <div className="flex items-center gap-1">
                  <div className="w-0 flex-1">
                    <h4
                      className={`truncate ${!message.seen ? "font-bold text-primary" : "font-medium"}`}
                    >
                      {message.title}
                    </h4>
                  </div>
                  {!message.seen && (
                    <div className="absolute left-5 h-2 w-2 rounded-full bg-primary"></div>
                  )}
                </div>
                <div className="flex">
                  <div className="w-0 flex-1">
                    <p
                      className={`truncate text-sm text-gray-600 ${!message.seen && "font-bold"}`}
                    >
                      {message.description}
                    </p>
                  </div>
                </div>
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
