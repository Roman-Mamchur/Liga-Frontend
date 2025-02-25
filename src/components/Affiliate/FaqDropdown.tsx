"use client";

import { FaChevronDown } from "react-icons/fa6";

interface FaqDropdownProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqDropdown = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqDropdownProps) => {
  return (
    <div className="flex flex-col rounded shadow-md">
      <div
        className={`flex cursor-pointer items-center justify-between gap-3 rounded bg-card px-6 py-3 ${isOpen && "rounded-b-none border-b border-black/20"}`}
        onClick={onToggle}
      >
        <h3 className="text-sm font-bold">{question}</h3>
        <div
          className={`transition-transform ${isOpen ? "rotate-0" : "rotate-90"}`}
        >
          <FaChevronDown />
        </div>
      </div>
      {isOpen && (
        <div className="rounded-b bg-card px-6 py-2">
          <p className="text-sm opacity-80">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqDropdown;
