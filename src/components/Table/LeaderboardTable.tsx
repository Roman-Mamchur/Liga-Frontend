import SelectorMenu from "../Selector/SelectorMenu";
import RowsDropdown from "./RowsDropdown";

const LeaderboardTable = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-10">
        <div className="flex-1">
          <SelectorMenu display="label" type="leaderboards" />
        </div>
        <div className="hidden md:block">
          <RowsDropdown />
        </div>
      </div>

      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="h-14 opacity-80">
            <th className="px-4 py-2 text-start">Game</th>
            <th className="hidden px-4 py-2 sm:table-cell">User</th>
            <th className="hidden px-4 py-2 md:table-cell">Time</th>
            <th className="hidden px-4 py-2 md:table-cell">Bet Amount</th>
            <th className="hidden px-4 py-2 sm:table-cell">Multiplier</th>
            <th className="px-4 py-2 text-end">Payout</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-14 text-center odd:bg-secondBackground even:bg-white">
            <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-l px-4 py-2 text-start font-medium">
              Game A
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 sm:table-cell">
              User A
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 md:table-cell">
              4:00 PM
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 md:table-cell">
              300 USDT
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 sm:table-cell">
              4.00&#215;
            </td>
            <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-r px-4 py-2 text-end opacity-80">
              1,200 USDT
            </td>
          </tr>
          <tr className="h-14 text-center odd:bg-secondBackground even:bg-white">
            <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-l px-4 py-2 text-start font-medium">
              Game A
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 sm:table-cell">
              User A
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 md:table-cell">
              4:00 PM
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 md:table-cell">
              300 USDT
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 sm:table-cell">
              4.00&#215;
            </td>
            <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-r px-4 py-2 text-end opacity-80">
              1,200 USDT
            </td>
          </tr>
          <tr className="h-14 text-center odd:bg-secondBackground even:bg-white">
            <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-l px-4 py-2 text-start font-medium">
              Game A
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 sm:table-cell">
              User A
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 md:table-cell">
              4:00 PM
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 md:table-cell">
              300 USDT
            </td>
            <td className="hidden max-w-14 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 opacity-80 sm:table-cell">
              4.00&#215;
            </td>
            <td className="max-w-14 overflow-hidden text-ellipsis whitespace-nowrap rounded-r px-4 py-2 text-end opacity-80">
              1,200 USDT
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default LeaderboardTable;
