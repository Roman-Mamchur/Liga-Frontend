"use client";

import { referralsMockData } from "@/data/tableMockData";
import { BiSolidDollarCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import SortByDropdown from "../Dropdown/SortByDropdown";
import Pagination from "../Layout/Pagination";
import { sortReferralData } from "@/utils/tableSortingUtil";
import { FaBoxOpen } from "react-icons/fa6";
import DateRangeDropdown from "../Dropdown/DateRangeDropdown";

const ReferralTable = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("Registration");
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
  const sortedRows = sortReferralData(referralsMockData, sortOption, sortOrder);
  // const sortedRows = sortReferralData([], sortOption, sortOrder);

  // Filter by date range
  const filteredRows = sortedRows.filter((referral) => {
    if (!dateRange[0] || !dateRange[1]) return true;
    const date = new Date(referral.registered);
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
  const sortOptions = [
    "Username",
    "Registration",
    "Total Deposits",
    "Last Deposit",
    "Wagered",
    "Commission",
  ];

  return (
    <div className="flex">
      <div className="flex w-0 flex-1 flex-col">
        {/* Sorting */}
        <div className="hidden mb-4 justify-between gap-3 md:flex md:flex-col lg:flex-row">
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
              dateInfo="Registration Date"
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
                <th className="px-4 py-2">Username</th>
                <th className="hidden px-4 py-2 sm:table-cell">Registered</th>
                <th className="hidden px-4 py-2 md:table-cell">
                  Total Deposits
                </th>
                <th className="hidden px-4 py-2 md:table-cell">Last Deposit</th>
                <th className="hidden px-4 py-2 sm:table-cell">Wagered</th>
                <th className="px-4 py-2">Commission</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((referral) => (
                  <tr
                    key={referral.id}
                    className="h-14 text-center odd:bg-card even:bg-white"
                  >
                    <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-l px-4 py-2">
                      {referral.username}
                    </td>
                    <td className="hidden max-w-14 text-nowrap px-4 py-2 sm:table-cell">
                      {referral.registered}
                    </td>
                    <td className="hidden max-w-14 px-4 py-2 md:table-cell">
                      <div className="flex items-center justify-center gap-1">
                        <span>{referral.totalDeposits ?? "N/A"}</span>
                        <BiSolidDollarCircle
                          className="text-green-600"
                          size={14}
                        />
                      </div>
                    </td>
                    <td className="hidden max-w-14 px-4 py-2 md:table-cell">
                      <div className="flex items-center justify-center gap-1">
                        <span>{referral.lastDeposit ?? "N/A"}</span>
                        <BiSolidDollarCircle
                          className="text-green-600"
                          size={14}
                        />
                      </div>
                    </td>
                    <td className="hidden max-w-14 px-4 py-2 sm:table-cell">
                      <div className="flex items-center justify-center gap-1">
                        <span>{referral.wagered ?? "N/A"}</span>
                        <BiSolidDollarCircle
                          className="text-green-600"
                          size={14}
                        />
                      </div>
                    </td>
                    <td className="max-w-14 rounded-r px-4 py-2">
                      <div className="flex items-center justify-center gap-1">
                        <span>{referral.commission ?? "N/A"}</span>
                        <BiSolidDollarCircle
                          className="text-green-600"
                          size={14}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-14 text-center odd:bg-card even:bg-white">
                  <td colSpan={6} className="rounded py-4">
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
          <div className="mt-4">
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

export default ReferralTable;
