"use client";

import { pointsMockData } from "@/data/tableMockData";
import { useEffect, useState } from "react";
import SortByDropdown from "../Dropdown/SortByDropdown";
import Pagination from "../Layout/Pagination";
import { sortPointsData } from "@/utils/tableSortingUtil";
import { FaBoxOpen } from "react-icons/fa6";
import DateRangeDropdown from "../Dropdown/DateRangeDropdown";
import { useTranslations } from "next-intl";

const PointsTable = () => {
  const t = useTranslations("ProfilePage.Points.Table");

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
  const sortedRows = sortPointsData(pointsMockData, sortOption, sortOrder);
  // const sortedRows = sortPointsData([], sortOption, sortOrder);

  // Filter by date range
  const filteredRows = sortedRows.filter((points) => {
    if (!dateRange[0] || !dateRange[1]) return true;
    const date = new Date(points.transactionDate);
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
    { key: "points", label: t("points") },
    { key: "type", label: t("type") },
    { key: "turnover", label: t("turnover") },
    { key: "transactionDate", label: t("transactionDate") },
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
                <th className="px-4 py-2 text-left">{t("points")}</th>
                <th className="px-4 py-2">{t("type")}</th>
                <th className="px-4 py-2">{t("turnover")}</th>
                <th className="px-4 py-2 text-right">{t("transactionDate")}</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((points) => (
                  <tr
                    key={points.id}
                    className="h-14 text-nowrap odd:bg-card even:bg-white"
                  >
                    <td className="rounded-l px-4 py-2 text-left">
                      {points.amount}
                    </td>
                    <td className="px-4 py-2 text-center">{points.type}</td>
                    <td className="px-4 py-2 text-center">
                      {points.turnover}$
                    </td>
                    <td className="rounded-r px-4 py-2 text-right">
                      {points.transactionDate}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-14 text-center odd:bg-card even:bg-white">
                  <td colSpan={4} className="rounded py-4">
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

        {/* Total */}
        {currentRows.length > 0 && (
          <div className="flex justify-end">
            <div className="my-4 w-fit rounded bg-card p-2">
              <span className="text-sm font-semibold opacity-80">
                <span>{t("total")}: </span>
                {filteredRows.length > 0
                  ? filteredRows.reduce((acc, row) => acc + row.amount, 0)
                  : sortedRows.reduce((acc, row) => acc + row.amount, 0)}
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

export default PointsTable;
