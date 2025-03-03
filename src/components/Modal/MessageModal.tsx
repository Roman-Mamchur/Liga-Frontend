"use client";

import { useEffect, useCallback } from "react";
import { FaMessage, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/messageModalSlice";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { modalMotion, overlayMotion } from "@/utils/framerUtil";

const MessageModal = () => {
  const t = useTranslations("Modal");

  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.messageModal.isOpen);
  const selectedMessage = useSelector(
    (state: RootState) => state.messageModal.selectedMessage,
  );

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
          className="fixed inset-0 z-50 flex items-center justify-center md:bg-black/80"
          onClick={(event) =>
            event.target === event.currentTarget && dispatch(closeModal())
          }
          key="overlay"
          {...overlayMotion}
        >
          <div
            className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[90vh] md:w-8/12 md:rounded-lg lg:w-6/12"
            key="modal"
            {...modalMotion}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span>
                  <FaMessage />
                </span>
                <span className="font-bold">{t("Message.label")}</span>
              </div>
              <button
                className="text-gray-500 duration-200 hover:text-gray-800"
                onClick={() => dispatch(closeModal())}
              >
                <span className="hidden md:block">{t("exit")}</span>
                <FaXmark className="size-5 md:hidden" />
              </button>
            </div>
            <div className="w-full border ring-gray-500"></div>
            {selectedMessage && (
              <div className="flex flex-col gap-3 overflow-y-auto p-4 md:p-8">
                <p className="font-bold">{selectedMessage.title}</p>
                <p className="text-justify">{selectedMessage.description}</p>
                <p className="text-xs text-gray-400">{selectedMessage.date}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageModal;
