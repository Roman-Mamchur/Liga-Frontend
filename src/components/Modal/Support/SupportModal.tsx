"use client";

import { useState } from "react";
import { FaChevronLeft, FaHeadset, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/supportModalSlice";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";
import CoverScreen from "./CoverScreen";
import ChatScreen from "./ChatScreen";

const SupportModal = () => {
  const t = useTranslations("Modal.Support");
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.supportModal.isOpen);

  const [isChatOpen, setIsChatOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/80 md:items-end md:justify-end md:p-4">
      <div className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[80vh] md:w-96 md:rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-3">
            {isChatOpen && (
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setIsChatOpen(false)}
              >
                <FaChevronLeft className="size-4" />
              </button>
            )}
            <FaHeadset />
            <span className="font-bold">{t("label")}</span>
          </div>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => dispatch(closeModal())}
          >
            <FaXmark className="size-5" />
          </button>
        </div>

        {/* Screen Switching */}
        {!isChatOpen ? (
          <CoverScreen onStartChat={() => setIsChatOpen(true)} />
        ) : (
          <ChatScreen />
        )}
      </div>
    </div>
  );
};

export default SupportModal;
