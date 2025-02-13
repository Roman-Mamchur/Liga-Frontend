"use client";

import { sessionsMockData } from "@/data/tableMockData";
import { useEffect, useState } from "react";
import SortByDropdown from "../Dropdown/SortByDropdown";
import Pagination from "../Layout/Pagination";
import { sortSessionsData } from "@/utils/tableSortingUtil";
import { FaBoxOpen } from "react-icons/fa6";

const SessionsTable = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("Last Used");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // FIXME: Mocking logic as if there is only one "Current" session at a time. To be removed once backend added.
  const sanitizedData = (() => {
    const sortedByDate = [...sessionsMockData].sort(
      (a, b) => new Date(b.usedDate).getTime() - new Date(a.usedDate).getTime(),
    );

    let hasCurrent = false;
    return sortedByDate.map((session) => {
      if (session.action === "Current") {
        if (hasCurrent) {
          return { ...session, action: "Removed" };
        }
        hasCurrent = true;
      }
      return session;
    });
  })();

  const sortedRows = sortSessionsData(sanitizedData, sortOption, sortOrder);

  const rowsPerPage = 5;
  const totalRows = sortedRows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const currentRows = sortedRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const handleSortChange = (option: string) => {
    if (option === sortOption) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOption(option);
      setSortOrder("desc");
    }
  };

  return (
    <div className="flex">
      <div className="flex w-0 flex-1 flex-col">
        {/* Sorting */}
        <div className="hidden justify-between gap-3 md:flex md:flex-col lg:flex-row">
          <div>
            {currentRows.length > 0 && (
              <SortByDropdown
                options={[
                  "Browser",
                  "Near",
                  "IP Address",
                  "Last Used",
                  "Action",
                ]}
                selectedOption={sortOption}
                sortOrder={sortOrder}
                setSortOption={handleSortChange}
              />
            )}
          </div>
        </div>

        {/* Table */}
        <div className="my-4 overflow-x-auto pb-1">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="h-14 text-nowrap opacity-80">
                <th className="px-4 py-2 text-left">Browser</th>
                <th className="px-4 py-2 text-center">Near</th>
                <th className="px-4 py-2 text-center">IP Address</th>
                <th className="px-4 py-2 text-center">Last Used</th>
                <th className="px-4 py-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((session) => (
                  <tr key={session.id} className="h-14 text-nowrap odd:bg-card">
                    <td className="rounded-l px-4 py-2 text-left">
                      {session.browser}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {session.location}
                    </td>
                    <td className="px-4 py-2 text-center">{session.ip}</td>
                    <td className="px-4 py-2 text-center">
                      {session.usedDate}
                    </td>
                    <td
                      className={`rounded-r px-4 py-2 text-right ${session.action === "Current" ? "text-green-500" : session.action === "Remove Session" ? "cursor-pointer text-red-500 hover:underline" : "text-black/60"}`}
                      onClick={() => {
                        if (session.action === "Remove Session") {
                          //FIXME: Mocking session removal logic. To be removed once backend added.
                          console.log(`Removing session ${session.id}`);
                        }
                      }}
                    >
                      {session.action}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-14 text-center odd:bg-card">
                  <td colSpan={5} className="rounded py-4">
                    <div className="flex items-center justify-center gap-3 opacity-60">
                      <FaBoxOpen className="size-8" />
                      <span className="text-sm">Nothing in here yet!</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {currentRows.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default SessionsTable;
