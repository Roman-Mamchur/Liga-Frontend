"use client";

import { useEffect, useCallback } from "react";
import { FaHeadset, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/supportModalSlice";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";

const SupportModal = () => {
  const t = useTranslations("Modal.Support");

  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.supportModal.isOpen);
  const selectedMessage = useSelector((state: RootState) => state.supportModal);

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

  if (!isOpen || !selectedMessage) return null;

  const mockUsername = "John Doe";

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/80 md:items-end md:justify-end md:p-4"
      onClick={(event) =>
        event.target === event.currentTarget && dispatch(closeModal())
      }
    >
      <div className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[80vh] md:w-96 md:rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-3">
            <FaHeadset />
            <span className="font-bold">{t("label")}</span>
          </div>
          <button
            className="text-gray-500 duration-200 hover:text-gray-800"
            onClick={() => dispatch(closeModal())}
          >
            <FaXmark className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-8 pb-4 pt-3">
          <div className="text-2xl font-bold">
            <h1 className="text-primary opacity-80">
              {t("greeting", { username: mockUsername })}
            </h1>
            <h3 className="opacity-60">{t("message")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
