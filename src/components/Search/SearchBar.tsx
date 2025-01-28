"use client";

import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import SearchResults from "./SearchResults";

interface SearchBarProps {
  triggerType: "header" | "page" | "mobile";
  onClose?: () => void;
}

const SearchBar = ({ triggerType, onClose }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(triggerType === "header");
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle outside click
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      closeSearch();
    }
  };

  // Handle ESC key press
  const handleEscPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeSearch();
    }
  };

  // Close the search, clear input, and unfocus
  const closeSearch = () => {
    setSearchTerm("");
    setIsActive(false);
    inputRef.current?.blur();
    onClose?.();
  };

  useEffect(() => {
    if (!isActive) return;

    // Add listeners for outside click and ESC key
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscPress);

    // Clean up listeners
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleEscPress);
    };
  });

  return (
    <>
      {/* Overlay */}
      {isActive && triggerType !== "mobile" && (
        <div
          className={`fixed inset-0 bg-black/30 ${
            triggerType === "page" ? "z-[3]" : "z-20"
          }`}
        />
      )}

      <div
        ref={searchContainerRef}
        className={`relative mx-auto ${
          triggerType === "page" || triggerType === "mobile"
            ? "z-[4] block"
            : "z-20 hidden md:block"
        }`}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative mx-auto flex items-center justify-center"
        >
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onFocus={() => setIsActive(true)}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your game or sports"
              className="w-full rounded-full px-10 py-2 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {isActive && (
              <button
                type="button"
                onClick={closeSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500 hover:text-primary"
              >
                <FaXmark />
              </button>
            )}
          </div>
        </form>

        {isActive && <SearchResults query={searchTerm} />}
      </div>
    </>
  );
};

export default SearchBar;
