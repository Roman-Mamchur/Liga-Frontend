import { useTranslations } from "next-intl";
import { cryptoCurrencies } from "@/data/currenciesData";
import { FaBoxOpen } from "react-icons/fa6";

// Function to generate a random balance amount
const getRandomAmount = () => (Math.random() * 2).toFixed(8);

const AffiliateBalanceTable = () => {
  const t = useTranslations("AffiliatePage.Funds.Table");

  return (
    <div className="flex w-full overflow-x-auto pb-1">
      <div className="w-0 flex-1">
        <div className="w-full min-w-max">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="h-14 opacity-80">
                <th className="whitespace-nowrap px-4 py-2">
                  {t("available")}
                </th>
                <th className="whitespace-nowrap px-4 py-2">
                  {t("commission")}
                </th>
                <th className="whitespace-nowrap px-4 py-2">
                  {t("withdrawn")}
                </th>
              </tr>
            </thead>
            <tbody>
              {cryptoCurrencies.length > 0 ? (
                cryptoCurrencies.map((currency) => (
                  <tr
                    key={currency.name}
                    className="h-14 text-center odd:bg-card even:bg-white"
                  >
                    {/* Available Balance */}
                    <td className="whitespace-nowrap rounded-l px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <span>{getRandomAmount()}</span>
                        <currency.Icon
                          className="size-4 shrink-0"
                          style={{ color: currency.color }}
                        />
                      </div>
                    </td>

                    {/* Commission Earned */}
                    <td className="whitespace-nowrap px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <span>{getRandomAmount()}</span>
                        <currency.Icon
                          className="size-4 shrink-0"
                          style={{ color: currency.color }}
                        />
                      </div>
                    </td>

                    {/* Withdrawn Amount */}
                    <td className="whitespace-nowrap rounded-r px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <span>{getRandomAmount()}</span>
                        <currency.Icon
                          className="size-4 shrink-0"
                          style={{ color: currency.color }}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-14 text-center odd:bg-card even:bg-white">
                  <td colSpan={3} className="rounded py-4">
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
      </div>
    </div>
  );
};

export default AffiliateBalanceTable;
