"use client";

import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaHeadset, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/supportModalSlice";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import CoverScreen from "./CoverScreen";
import ChatScreen from "./ChatScreen";
import {
  coverPageMotion,
  modalMotion,
  overlayMotion,
} from "@/utils/framerUtil";

const SupportModal = () => {
  const t = useTranslations("Modal.Support");
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.supportModal.isOpen);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleEscPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isOpen, handleEscPress]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center md:items-end md:justify-end md:bg-black/80 md:p-4"
          key="overlay"
          {...overlayMotion}
        >
          <motion.div
            className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[80vh] md:w-96 md:rounded-lg"
            key="modal"
            {...modalMotion}
          >
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
            <AnimatePresence mode="wait">
              {isChatOpen ? (
                <ChatScreen />
              ) : (
                <motion.div
                  key="cover"
                  {...coverPageMotion}
                  className="overflow-auto"
                >
                  <CoverScreen onStartChat={() => setIsChatOpen(true)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SupportModal;
