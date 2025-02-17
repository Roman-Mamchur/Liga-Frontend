"use client";

import { totalBetsMockData } from "@/data/tableMockData";
import { useEffect, useState } from "react";
import SortByDropdown from "../Dropdown/SortByDropdown";
import Pagination from "../Layout/Pagination";
import { sortTotalBetsData } from "@/utils/tableSortingUtil";
import { FaBoxOpen } from "react-icons/fa6";
import DateRangeDropdown from "../Dropdown/DateRangeDropdown";

const TotalBetsTable = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("Transaction Date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleSortChange = (option: string) => {
    if (option === sortOption) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOption(option);
      setSortOrder("desc");
    }
  };

  // Mock existing or empty data
  const sortedRows = sortTotalBetsData(
    totalBetsMockData,
    sortOption,
    sortOrder,
  );
  // const sortedRows = sortTotalBetsData([], sortOption, sortOrder);

  // Filter by date range
  const filteredRows = sortedRows.filter((bets) => {
    if (!dateRange[0] || !dateRange[1]) return true;
    const date = new Date(bets.transactionDate);
    return date >= dateRange[0] && date <= dateRange[1];
  });

  const rowsPerPage = 5;
  const totalRows = filteredRows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const currentRows = filteredRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  // Options to be passed to the SortByDropdown component
  const sortOptions = ["Total Bets", "Total Win/Lose", "Transaction Date"];

  return (
    <div className="flex">
      <div className="flex w-0 flex-1 flex-col">
        {/* Sorting */}
        <div className="hidden justify-between gap-3 md:flex md:flex-col lg:flex-row">
          <div>
            {currentRows.length > 0 && (
              <SortByDropdown
                options={sortOptions}
                selectedOption={sortOption}
                sortOrder={sortOrder}
                setSortOption={handleSortChange}
              />
            )}
          </div>
          <div>
            <DateRangeDropdown
              dateInfo="Transaction Date"
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto pb-1">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="h-14 opacity-80">
                <th className="text-nowrap px-4 py-2 text-left">Total Bets</th>
                <th className="text-nowrap px-4 py-2">Total Win/Lose</th>
                <th className="text-nowrap px-4 py-2 text-right">
                  Transaction Date
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((bets) => (
                  <tr key={bets.id} className="h-14 odd:bg-card even:bg-white">
                    <td className="max-w-14 rounded-l px-4 py-2 text-left">
                      {bets.bet}
                    </td>
                    <td className="max-w-14 px-4 py-2 text-center font-semibold">
                      {bets.winLose >= 0 ? (
                        <span className="text-green-500">+{bets.winLose}%</span>
                      ) : (
                        <span className="text-red-500">{bets.winLose}%</span>
                      )}
                    </td>
                    <td className="max-w-14 whitespace-nowrap rounded-r px-4 py-2 text-right">
                      {bets.transactionDate}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-14 text-center odd:bg-card even:bg-white">
                  <td colSpan={3} className="rounded py-4">
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
                Total Bets:{" "}
                {filteredRows.length > 0
                  ? filteredRows.reduce((acc, row) => acc + row.bet, 0)
                  : sortedRows.reduce((acc, row) => acc + row.bet, 0)}
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

export default TotalBetsTable;
