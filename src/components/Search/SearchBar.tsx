"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ActiveSearch from "./ActiveSearch";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  return (
    <div className="relative mx-auto">
      <form
        onSubmit={handleSearch}
        className="mx-auto flex items-center justify-center"
      >
        <div className="relative w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your game"
            className="w-full rounded-full px-4 py-2 pr-10 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-primary"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      <ActiveSearch />
    </div>
  );
};

export default SearchBar;
