import MedalIcon from "./MedalIcon";

const VipTable = () => {
  return (
    <div className="flex overflow-x-auto pb-1">
      <div className="w-0 flex-1">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="h-14">
              <th className="w-full px-4 py-2 text-left text-xl font-bold opacity-80">
                VIP Benefits
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <span className="hidden font-medium opacity-60 md:block">
                    Bronze
                  </span>
                  <MedalIcon className="text-bronze size-7" />
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <span className="hidden font-medium opacity-60 md:block">
                    Silver
                  </span>
                  <MedalIcon className="text-silver size-7" />
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <span className="hidden font-medium opacity-60 md:block">
                    Gold
                  </span>
                  <MedalIcon className="text-gold size-7" />
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <span className="hidden font-medium opacity-60 md:block">
                    Platinum
                  </span>
                  <MedalIcon className="text-platinum size-7" />
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <span className="hidden font-medium opacity-60 md:block">
                    Black
                  </span>
                  <MedalIcon className="text-dark size-7" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Upgrade Bonus
              </td>
              <td className="px-4 py-2 text-sm opacity-60">128</td>
              <td className="px-4 py-2 text-sm opacity-60">288</td>
              <td className="px-4 py-2 text-sm opacity-60">688</td>
              <td className="px-4 py-2 text-sm opacity-60">1,288</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">1,888</td>
            </tr>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Daily Withdraw Amount
              </td>
              <td className="px-4 py-2 text-sm opacity-60">30,000</td>
              <td className="px-4 py-2 text-sm opacity-60">50,000</td>
              <td className="px-4 py-2 text-sm opacity-60">150,000</td>
              <td className="px-4 py-2 text-sm opacity-60">Unlimited</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">
                Unlimited
              </td>
            </tr>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Daily Withdraw Limit
              </td>
              <td className="px-4 py-2 text-sm opacity-60">5</td>
              <td className="px-4 py-2 text-sm opacity-60">10</td>
              <td className="px-4 py-2 text-sm opacity-60">20</td>
              <td className="px-4 py-2 text-sm opacity-60">Unlimited</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">
                Unlimited
              </td>
            </tr>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Birthday Bonus
              </td>
              <td className="px-4 py-2 text-sm opacity-60">188</td>
              <td className="px-4 py-2 text-sm opacity-60">388</td>
              <td className="px-4 py-2 text-sm opacity-60">588</td>
              <td className="px-4 py-2 text-sm opacity-60">888</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">2,888</td>
            </tr>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Weekly Rescue Bonus
              </td>
              <td className="px-4 py-2 text-sm opacity-60">888</td>
              <td className="px-4 py-2 text-sm opacity-60">1,888</td>
              <td className="px-4 py-2 text-sm opacity-60">2,888</td>
              <td className="px-4 py-2 text-sm opacity-60">3,888</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">6,888</td>
            </tr>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Referral Friend
              </td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">Yes</td>
            </tr>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Festival Cash
              </td>
              <td className="px-4 py-2 text-sm opacity-60">50</td>
              <td className="px-4 py-2 text-sm opacity-60">75</td>
              <td className="px-4 py-2 text-sm opacity-60">100</td>
              <td className="px-4 py-2 text-sm opacity-60">300</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">500</td>
            </tr>
            <tr className="h-14 text-center odd:bg-card even:bg-white">
              <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
                Special Birthday Gift
              </td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="px-4 py-2 text-sm opacity-60">Yes</td>
              <td className="rounded-r px-4 py-2 text-sm opacity-60">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VipTable;
