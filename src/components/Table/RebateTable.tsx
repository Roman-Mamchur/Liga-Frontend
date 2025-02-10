"use client";

import { rebateMockData } from "@/data/tableMockData";
import { useEffect, useState } from "react";
import SortByDropdown from "../Dropdown/SortByDropdown";
import Pagination from "../Layout/Pagination";
import { sortRebateData } from "@/utils/tableSortingUtil";
import { FaBoxOpen } from "react-icons/fa6";

const RebateTable = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("Transaction Date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const rowsPerPage = 5;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const totalRows = rebateMockData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleSortChange = (option: string) => {
    if (option === sortOption) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOption(option);
      setSortOrder("desc");
    }
  };

  // Mock existing data
  const sortedRows = sortRebateData(rebateMockData, sortOption, sortOrder);

  // Mock empty data
  // const sortedRows = sortRebateData([], sortOption, sortOrder);

  const currentRows = sortedRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  // Options to be passed to the SortByDropdown component
  const sortOptions = ["Rebate Amount", "Transaction Date"];

  return (
    <div className="flex">
      <div className="flex w-0 flex-1 flex-col">
        {/* Sorting */}
        {currentRows.length > 0 && (
          <div className="hidden md:flex">
            <SortByDropdown
              options={sortOptions}
              selectedOption={sortOption}
              sortOrder={sortOrder}
              setSortOption={handleSortChange}
            />
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto pb-1">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="h-14 opacity-80">
                <th className="text-nowrap px-4 py-2 text-left">
                  Rebate Amount
                </th>
                <th className="text-nowrap px-4 py-2 text-right">
                  Transaction Date
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((rebate) => (
                  <tr
                    key={rebate.id}
                    className="h-14 odd:bg-card even:bg-white"
                  >
                    <td className="max-w-14 rounded-l px-4 py-2 text-left">
                      {rebate.amount}
                    </td>
                    <td className="max-w-14 whitespace-nowrap rounded-r px-4 py-2 text-right">
                      {rebate.transactionDate}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-14 text-center odd:bg-card even:bg-white">
                  <td colSpan={2} className="rounded py-4">
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

        {/* Total */}
        {currentRows.length > 0 && (
          <div className="flex justify-end">
            <div className="my-4 w-fit rounded bg-card p-2">
              <span className="text-sm font-semibold opacity-80">
                Total Rebate:{" "}
                {sortedRows.reduce((acc, row) => acc + row.amount, 0)}
              </span>
            </div>
          </div>
        )}

        {/* Pagination */}
        {currentRows.length > 0 && (
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RebateTable;
