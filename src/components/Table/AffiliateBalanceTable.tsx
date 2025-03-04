// FIXME: Use currencies from currencies data object. Update layout of the table to keep content visible with addition of scroll. Add mock amount randomizer function and simplify table.

import { useTranslations } from "next-intl";
import {
  SiBitcoin,
  SiDogecoin,
  SiEthereum,
  SiLitecoin,
  SiTether,
} from "react-icons/si";

const AffiliateBalanceTable = () => {
  const t = useTranslations("AffiliatePage.Funds.Table");

  return (
    <div className="flex">
      <div className="w-0 flex-1 overflow-x-auto pb-1">
        <table className="w-full min-w-96 table-auto text-sm">
          <thead>
            <tr className="h-14 opacity-80">
              <th className="px-4 py-2">{t("available")}</th>
              <th className="px-4 py-2">{t("commission")}</th>
              <th className="px-4 py-2">{t("withdrawn")}</th>
            </tr>
          </thead>
          <tbody>
            {/* BTC row */}
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiBitcoin className="shrink-0 text-[#F7931A]" />
                </div>
              </td>
              <td className="max-w-14 px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiBitcoin className="shrink-0 text-[#F7931A]" />
                </div>
              </td>
              <td className="max-w-14 rounded-r px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiBitcoin className="shrink-0 text-[#F7931A]" />
                </div>
              </td>
            </tr>
            {/* ETH row */}
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiEthereum className="shrink-0 text-[#627EEA]" />
                </div>
              </td>
              <td className="max-w-14 px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiEthereum className="shrink-0 text-[#627EEA]" />
                </div>
              </td>
              <td className="max-w-14 rounded-r px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiEthereum className="shrink-0 text-[#627EEA]" />
                </div>
              </td>
            </tr>
            {/* LTC row */}
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiLitecoin className="shrink-0 text-[#2EB67D]" />
                </div>
              </td>
              <td className="max-w-14 px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiLitecoin className="shrink-0 text-[#2EB67D]" />
                </div>
              </td>
              <td className="max-w-14 rounded-r px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiLitecoin className="shrink-0 text-[#2EB67D]" />
                </div>
              </td>
            </tr>
            {/* USDT row */}
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiTether className="shrink-0 text-[#26A17B]" />
                </div>
              </td>
              <td className="max-w-14 px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiTether className="shrink-0 text-[#26A17B]" />
                </div>
              </td>
              <td className="max-w-14 rounded-r px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiTether className="shrink-0 text-[#26A17B]" />
                </div>
              </td>
            </tr>
            {/* DOGE row */}
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiDogecoin className="shrink-0 text-[#C3A634]" />
                </div>
              </td>
              <td className="max-w-14 px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiDogecoin className="shrink-0 text-[#C3A634]" />
                </div>
              </td>
              <td className="max-w-14 rounded-r px-4 py-2">
                <div className="flex items-center justify-center gap-1">
                  <span>0.00000000</span>
                  <SiDogecoin className="shrink-0 text-[#C3A634]" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AffiliateBalanceTable;
