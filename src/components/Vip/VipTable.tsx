import { getTextColorClass } from "@/utils/vipTierColorUtil";
import MedalIcon from "./MedalIcon";

interface VipTableProps {
  title: string;
  tiers: string[];
  rawTiers: string[];
  data: {
    name: string;
    values: string[];
  }[];
}

const VipTable: React.FC<VipTableProps> = ({
  title,
  tiers,
  rawTiers,
  data,
}) => (
  <div className="flex">
    <div className="w-0 flex-1 overflow-x-auto pb-1">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="h-14">
            <th className="w-full text-nowrap px-4 py-2 text-left text-lg font-bold opacity-80 md:text-xl">
              {title}
            </th>
            {tiers.map((tier, index) => (
              <th key={tier} className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <span className="hidden text-nowrap font-medium capitalize opacity-60 md:block">
                    {tier}
                  </span>
                  <MedalIcon
                    className={`size-7 ${getTextColorClass(rawTiers[index])}`}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="h-14 text-center odd:bg-card even:bg-white"
            >
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                {row.name}
              </td>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={`px-4 py-2 text-sm opacity-60 ${i === row.values.length - 1 ? "rounded-r" : ""}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default VipTable;
