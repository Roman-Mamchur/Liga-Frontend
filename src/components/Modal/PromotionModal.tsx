"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/index";
import { closeModal } from "@/store/slices/promotionModalSlice";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useRef, useCallback } from "react";

const PromotionModal = () => {
  const dispatch = useDispatch();
  const { isOpen, promotion } = useSelector(
    (state: RootState) => state.promotionModal,
  );
  const modalRef = useRef<HTMLDivElement | null>(null);

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

  if (!isOpen || !promotion) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative max-h-[90vh] w-10/12 overflow-hidden rounded-lg bg-white shadow-lg md:w-8/12 lg:w-6/12"
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-500 duration-200 hover:text-gray-800"
            onClick={() => dispatch(closeModal())}
          >
            <FaXmark className="size-5" />
          </button>
        </div>
        <div className="w-full border ring-gray-500"></div>

        <div className="container mb-1 flex max-h-[80vh] flex-col gap-2.5 overflow-y-auto px-8 py-2 md:py-8">
          <Image
            src={promotion.image}
            alt={promotion.title}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full rounded object-cover"
          />
          <p className="mt-4 text-xs opacity-60">{promotion.date}</p>
          <h2 className="text-2xl font-bold">{promotion.title}</h2>
          <p className="text-justify opacity-80 md:text-left">
            {promotion.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
