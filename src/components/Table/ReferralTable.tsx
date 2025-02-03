"use client";

import { referralsMockData } from "@/data/referralsMockData";
import { BiSolidDollarCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import SortByDropdown from "../Dropdown/SortByDropdown";
import Pagination from "../Layout/Pagination";
import { sortReferralData } from "@/utils/referralTableSortingUtil";

const ReferralTable = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("Username");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const rowsPerPage = 5;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const totalRows = referralsMockData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleSortChange = (option: string) => {
    if (option === sortOption) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOption(option);
      setSortOrder("asc");
    }
  };

  const sortedRows = sortReferralData(referralsMockData, sortOption, sortOrder);

  const currentRows = sortedRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div className="flex">
      <div className="flex w-0 flex-1 flex-col">
        {/* Sorting */}
        <div className="hidden md:flex">
          <SortByDropdown
            options={[
              "Username",
              "Registration",
              "Total Deposits",
              "Last Deposit",
              "Wagered",
              "Commission",
            ]}
            selectedOption={sortOption}
            sortOrder={sortOrder}
            setSortOption={handleSortChange}
          />
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
              {currentRows.map((referral) => (
                <tr
                  key={referral.id}
                  className="h-14 text-center odd:bg-card even:bg-white"
                >
                  <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-l px-4 py-2">
                    {referral.username}
                  </td>
                  <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 sm:table-cell">
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
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ReferralTable;
