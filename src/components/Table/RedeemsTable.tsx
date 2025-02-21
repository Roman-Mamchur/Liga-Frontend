"use client";

import { redeemsMockData } from "@/data/tableMockData";
import { useEffect, useState } from "react";
import SortByDropdown from "../Dropdown/SortByDropdown";
import Pagination from "../Layout/Pagination";
import { sortRedeemsData } from "@/utils/tableSortingUtil";
import { FaBoxOpen } from "react-icons/fa6";
import DateRangeDropdown from "../Dropdown/DateRangeDropdown";
import { useTranslations } from "next-intl";

const RedeemsTable = () => {
  const t = useTranslations("ProfilePage.Redeems.Table");

  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("transactionDate");
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

  const handleSortChange = (optionKey: string) => {
    if (optionKey === sortOption) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOption(optionKey);
      setSortOrder("desc");
    }
  };

  // Mock existing or empty data
  const sortedRows = sortRedeemsData(redeemsMockData, sortOption, sortOrder);
  // const sortedRows = sortRedeemsData([], sortOption, sortOrder);

  // Filter by date range
  const filteredRows = sortedRows.filter((redeem) => {
    if (!dateRange[0] || !dateRange[1]) return true;
    const date = new Date(redeem.transactionDate);
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
    { key: "number", label: t("number") },
    { key: "transactionDate", label: t("transactionDate") },
    { key: "rewardType", label: t("rewardType") },
    { key: "reward", label: t("reward") },
    { key: "status", label: t("status") },
    { key: "usedPoints", label: t("usedPoints") },
    { key: "freeSpins", label: t("freeSpins") },
  ];

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
              dateInfo={t("transactionDate")}
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto pb-1">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="h-14 text-nowrap opacity-80">
                <th className="px-4 py-2">{t("number")}</th>
                <th className="px-4 py-2">{t("transactionDate")}</th>
                <th className="px-4 py-2">{t("rewardType")}</th>
                <th className="px-4 py-2">{t("reward")}</th>
                <th className="px-4 py-2">{t("status")}</th>
                <th className="px-4 py-2">{t("usedPoints")}</th>
                <th className="px-4 py-2">{t("freeSpins")}</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((redeem) => (
                  <tr
                    key={redeem.id}
                    className="h-14 text-nowrap text-center odd:bg-card even:bg-white"
                  >
                    <td className="rounded-l px-4 py-2">{redeem.number}</td>
                    <td className="px-4 py-2">{redeem.transactionDate}</td>
                    <td className="px-4 py-2">{redeem.rewardType}</td>
                    <td className="px-4 py-2">{redeem.reward}</td>
                    <td className="px-4 py-2">{redeem.status}</td>
                    <td className="px-4 py-2">{redeem.points}</td>
                    <td className="rounded-r px-4 py-2">{redeem.spins}</td>
                  </tr>
                ))
              ) : (
                <tr className="h-14 text-center odd:bg-card even:bg-white">
                  <td colSpan={7} className="rounded py-4">
                    <div className="flex items-center justify-center gap-3 opacity-60">
                      <FaBoxOpen className="size-8" />
                      <span className="text-sm">{t("empty")}</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        {sortedRows.length > 0 && (
          <div className="my-4 flex flex-col gap-3">
            <div className="rounded bg-card p-2">
              <div className="flex justify-between gap-3 text-sm font-semibold opacity-80">
                <span>{t("allRewards")}:</span>
                <span>
                  {filteredRows.length > 0
                    ? filteredRows.length
                    : sortedRows.length}
                </span>
              </div>
            </div>
            <div className="rounded bg-card p-2">
              <div className="flex justify-between gap-3 text-sm font-semibold opacity-80">
                <span>{t("totalUsedPoints")}:</span>
                <span>
                  {filteredRows.length > 0
                    ? filteredRows.reduce((acc, row) => acc + row.points, 0)
                    : sortedRows.reduce((acc, row) => acc + row.points, 0)}
                </span>
              </div>
            </div>
            <div className="rounded bg-card p-2">
              <div className="flex justify-between gap-3 text-sm font-semibold opacity-80">
                <span>{t("totalFreeSpins")}:</span>
                <span>
                  {filteredRows.length > 0
                    ? filteredRows.reduce((acc, row) => acc + row.spins, 0)
                    : sortedRows.reduce((acc, row) => acc + row.spins, 0)}
                </span>
              </div>
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

export default RedeemsTable;
