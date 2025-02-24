"use client";

import { BiSolidDollarCircle } from "react-icons/bi";
import SelectorMenu from "../Selector/SelectorMenu";
import RowsDropdown from "../Dropdown/TableRowsDropdown";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { leaderboardData } from "@/data/leaderboardsData";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const LeaderboardTable = () => {
  const activeCasinoLeaderboard = useSelector(
    (state: RootState) => state.category.activeCasinoLeaderboard,
  );

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations("Leaderboards");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const selectedLeaderboard = leaderboardData.find(
    (leaderboard) => leaderboard.set === activeCasinoLeaderboard,
  ) || { data: [] };

  const displayedRows = selectedLeaderboard.data.slice(0, rowsPerPage);

  return (
    <div className="flex">
      <div className="w-0 flex-1">
        <div>
          <div className="flex items-center justify-between gap-10">
            <div className="w-0 flex-1">
              <SelectorMenu display="label" type="leaderboards" />
            </div>
            <div className="hidden md:block">
              <RowsDropdown
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
              />
            </div>
          </div>

          <table className="w-full table-auto text-sm">
            <thead>
              {rowsPerPage > 0 && (
                <tr className="h-14 opacity-80">
                  {activeCasinoLeaderboard === "Race Leaderboard" ? (
                    <>
                      <th className="px-4 py-2 text-start">{t("rank")}</th>
                      <th className="px-4 py-2 text-start">{t("user")}</th>
                      <th className="px-4 py-2 text-end">{t("wagered")}</th>
                      <th className="px-4 py-2 text-end">{t("prize")}</th>
                    </>
                  ) : (
                    <>
                      <th className="px-4 py-2 text-start">{t("game")}</th>
                      <th className="hidden px-4 py-2 sm:table-cell">
                        {t("user")}
                      </th>
                      <th className="hidden px-4 py-2 md:table-cell">
                        {t("time")}
                      </th>
                      <th className="hidden px-4 py-2 md:table-cell">
                        {t("betAmount")}
                      </th>
                      <th className="hidden px-4 py-2 sm:table-cell">
                        {t("multiplier")}
                      </th>
                      <th className="px-4 py-2 text-end">{t("payout")}</th>
                    </>
                  )}
                </tr>
              )}
            </thead>
            <tbody>
              {displayedRows.map((row, index) => (
                <tr
                  key={index}
                  className="h-14 text-center odd:bg-card even:bg-white"
                >
                  {activeCasinoLeaderboard === "Race Leaderboard" ? (
                    <>
                      <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-l px-4 py-2 text-start font-medium">
                        {row.rank}
                      </td>
                      <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 text-start">
                        {row.user}
                      </td>
                      <td className="max-w-14 overflow-hidden px-4 py-2">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-ellipsis whitespace-nowrap">
                            {row.wagered}
                          </span>
                          <BiSolidDollarCircle
                            className="flex-shrink-0 text-green-600"
                            size={14}
                          />
                        </div>
                      </td>
                      <td className="max-w-14 overflow-hidden rounded-r px-4 py-2">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-ellipsis whitespace-nowrap">
                            {row.prize}
                          </span>
                          <BiSolidDollarCircle
                            className="flex-shrink-0 text-green-600"
                            size={14}
                          />
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-l px-4 py-2 text-start">
                        {row.game}
                      </td>
                      <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 sm:table-cell">
                        {row.user}
                      </td>
                      <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 md:table-cell">
                        {row.time}
                      </td>
                      <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 md:table-cell">
                        <div className="flex items-center justify-center gap-1">
                          <span>{row.bet}</span>
                          <BiSolidDollarCircle
                            className="text-green-600"
                            size={14}
                          />
                        </div>
                      </td>
                      <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 sm:table-cell">
                        {row.multiplier}&#215;
                      </td>
                      <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-r px-4 py-2">
                        <div className="flex items-center justify-end gap-1">
                          <span>{row.payout}</span>
                          <BiSolidDollarCircle
                            className="text-green-600"
                            size={14}
                          />
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
