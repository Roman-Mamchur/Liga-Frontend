"use client";

import { BiSolidDollarCircle } from "react-icons/bi";
import SelectorMenu from "../Selector/SelectorMenu";
import RowsDropdown from "../Dropdown/TableRowsDropdown";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { leaderboardData } from "@/data/mockData/leaderboardsData";
import { useState, useEffect } from "react";

const LeaderboardTable = () => {
  const activeCasinoLeaderboard = useSelector(
    (state: RootState) => state.category.activeCasinoLeaderboard,
  );

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const selectedLeaderboard = leaderboardData.find(
    (leaderboard) => leaderboard.set === activeCasinoLeaderboard,
  ) || { data: [] };

  const displayedRows = selectedLeaderboard.data.slice(0, rowsPerPage);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-10">
        <div className="flex-1">
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
                  <th className="px-4 py-2 text-start">Rank</th>
                  <th className="px-4 py-2 text-start">User</th>
                  <th className="px-4 py-2 text-end">Wagered</th>
                  <th className="px-4 py-2 text-end">Prize</th>
                </>
              ) : (
                <>
                  <th className="px-4 py-2 text-start">Game</th>
                  <th className="hidden px-4 py-2 sm:table-cell">User</th>
                  <th className="hidden px-4 py-2 md:table-cell">Time</th>
                  <th className="hidden px-4 py-2 md:table-cell">Bet Amount</th>
                  <th className="hidden px-4 py-2 sm:table-cell">Multiplier</th>
                  <th className="px-4 py-2 text-end">Payout</th>
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
    </>
  );
};

export default LeaderboardTable;
