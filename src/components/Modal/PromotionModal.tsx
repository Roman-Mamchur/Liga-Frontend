"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/index";
import { closeModal } from "@/store/slices/promotionModalSlice";
import Image from "next/image";
import { FaGift, FaXmark } from "react-icons/fa6";
import { useEffect, useRef, useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { modalMotion, overlayMotion } from "@/utils/framerUtil";
import PromotionImageSkeleton from "../Skeleton/PromotionImageSkeleton";

const PromotionModal = () => {
  const t = useTranslations("Modal");

  const dispatch = useDispatch();
  const { isOpen, promotion } = useSelector(
    (state: RootState) => state.promotionModal,
  );
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Close modal on ESC key press
  const handleEscPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    },
    [dispatch],
  );

  // Close modal when overlay is clicked (outside of modal)
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    // Add keydown event listener to close on ESC key
    window.addEventListener("keydown", handleEscPress);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isOpen, handleEscPress]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center md:bg-black/80"
          onClick={handleOverlayClick}
          key="overlay"
          {...overlayMotion}
        >
          <motion.div
            ref={modalRef}
            className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[90vh] md:w-8/12 md:rounded-lg lg:w-6/12"
            key="modal"
            {...modalMotion}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span>
                  <FaGift />
                </span>
                <span className="font-bold">{t("Promotion.label")}</span>
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
            {promotion && (
              <div className="flex flex-col gap-2.5 overflow-y-auto p-4 md:p-8">
                {!isImageLoaded && <PromotionImageSkeleton />}
                <Image
                  src={promotion.image}
                  alt={promotion.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  onLoad={() => setIsImageLoaded(true)}
                  className="h-full w-full rounded object-cover"
                />
                <p className="mt-4 text-xs opacity-60">{promotion.date}</p>
                <h2 className="text-2xl font-bold">{promotion.title}</h2>
                <p className="text-justify opacity-80 md:text-left">
                  {promotion.description}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromotionModal;
