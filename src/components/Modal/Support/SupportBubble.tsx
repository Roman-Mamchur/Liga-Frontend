"use client";

import { openModal } from "@/store/slices/supportModalSlice";
import { FaHeadset } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

const SupportBubble = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.supportModal.isOpen);

  if (isOpen) return null;

  return (
    <div className="absolute bottom-5 right-5 z-50 hidden md:block">
      <div
        className="h-fit w-fit cursor-pointer rounded-full bg-primary p-4 text-white shadow-md duration-200 hover:bg-secondary hover:shadow-lg"
        onClick={() => dispatch(openModal())}
      >
        <FaHeadset className="size-7" />
      </div>
    </div>
  );
};

export default SupportBubble;
