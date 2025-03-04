"use client";

import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { dropdownMotion, motionVariants } from "@/utils/framerUtil";

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
    <div>
      <div className="flex w-full flex-col rounded bg-card shadow-md">
        <h3
          className="flex cursor-pointer items-center justify-between gap-3 rounded p-3 font-bold"
          onClick={onToggle}
        >
          <span className="text-sm">{question}</span>

          <span className="ml-2">
            <div
              className={`transition-transform duration-200 ${isOpen ? "rotate-0" : "rotate-90"}`}
            >
              <FaChevronDown />
            </div>
          </span>
        </h3>

        <motion.div
          {...motionVariants}
          variants={dropdownMotion(isOpen)}
          className="overflow-hidden"
        >
          <ul className="cursor-default border-t border-gray-300 p-3 text-sm opacity-80">
            <li className="w-full">
              <p className="text-sm opacity-80">{answer}</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqDropdown;
