import MedalIcon from "./MedalIcon";

const VipTable = () => {
  return (
    <div>
      {/* Table 1 */}
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
                <MedalIcon className="size-7 text-bronze" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Silver
                </span>
                <MedalIcon className="size-7 text-silver" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Gold
                </span>
                <MedalIcon className="size-7 text-gold" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Platinum
                </span>
                <MedalIcon className="size-7 text-platinum" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Black
                </span>
                <MedalIcon className="size-7 text-dark" />
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

      {/* Table 2 */}
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="h-14">
            <th className="w-full px-4 py-2 text-left text-xl font-bold opacity-80">
              Daily Cash Rebate
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Bronze
                </span>
                <MedalIcon className="size-7 text-bronze" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Silver
                </span>
                <MedalIcon className="size-7 text-silver" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Gold
                </span>
                <MedalIcon className="size-7 text-gold" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Platinum
                </span>
                <MedalIcon className="size-7 text-platinum" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Black
                </span>
                <MedalIcon className="size-7 text-dark" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Esports
            </td>
            <td className="px-4 py-2 text-sm opacity-60">0.50%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.60%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.70%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.80%</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">1%</td>
          </tr>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Live Casino
            </td>
            <td className="px-4 py-2 text-sm opacity-60">0.40%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.50%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.65%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.80%</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">1%</td>
          </tr>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Slot
            </td>
            <td className="px-4 py-2 text-sm opacity-60">0.50%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.60%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.70%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.85%</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">1%</td>
          </tr>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Sportsbook
            </td>
            <td className="px-4 py-2 text-sm opacity-60">0.50%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.60%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.70%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.80%</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">1%</td>
          </tr>
        </tbody>
      </table>

      {/* Table 3 */}
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="h-14">
            <th className="w-full px-4 py-2 text-left text-xl font-bold opacity-80">
              Level Up Requirements
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Bronze
                </span>
                <MedalIcon className="size-7 text-bronze" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Silver
                </span>
                <MedalIcon className="size-7 text-silver" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Gold
                </span>
                <MedalIcon className="size-7 text-gold" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Platinum
                </span>
                <MedalIcon className="size-7 text-platinum" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Black
                </span>
                <MedalIcon className="size-7 text-dark" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Accumulated Deposit (Monthly)
            </td>
            <td className="px-4 py-2 text-sm opacity-60">30,000</td>
            <td className="px-4 py-2 text-sm opacity-60">100,000</td>
            <td className="px-4 py-2 text-sm opacity-60">200,000</td>
            <td className="px-4 py-2 text-sm opacity-60">500,000</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">
              By Invitation
            </td>
          </tr>
        </tbody>
      </table>

      {/* Table 4 */}
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="h-14">
            <th className="w-full px-4 py-2 text-left text-xl font-bold opacity-80">
              Monthly Tier Retention Requirements
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Bronze
                </span>
                <MedalIcon className="size-7 text-bronze" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Silver
                </span>
                <MedalIcon className="size-7 text-silver" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Gold
                </span>
                <MedalIcon className="size-7 text-gold" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Platinum
                </span>
                <MedalIcon className="size-7 text-platinum" />
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="hidden font-medium opacity-60 md:block">
                  Black
                </span>
                <MedalIcon className="size-7 text-dark" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Membership Renewal
            </td>
            <td className="px-4 py-2 text-sm opacity-60">2 Months</td>
            <td className="px-4 py-2 text-sm opacity-60">2 Months</td>
            <td className="px-4 py-2 text-sm opacity-60">Lifetime</td>
            <td className="px-4 py-2 text-sm opacity-60">Lifetime</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">
              By Invitation
            </td>
          </tr>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Past Month Accumulated Deposit
            </td>
            <td className="px-4 py-2 text-sm opacity-60">1,000</td>
            <td className="px-4 py-2 text-sm opacity-60">3,000</td>
            <td className="px-4 py-2 text-sm opacity-60">-</td>
            <td className="px-4 py-2 text-sm opacity-60">-</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">-</td>
          </tr>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Slot
            </td>
            <td className="px-4 py-2 text-sm opacity-60">10,000</td>
            <td className="px-4 py-2 text-sm opacity-60">30,000</td>
            <td className="px-4 py-2 text-sm opacity-60">-</td>
            <td className="px-4 py-2 text-sm opacity-60">-</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">-</td>
          </tr>
          <tr className="h-14 text-center odd:bg-card even:bg-white">
            <td className="max-w-14 rounded-l px-4 py-2 text-left text-sm font-bold opacity-60">
              Sportsbook
            </td>
            <td className="px-4 py-2 text-sm opacity-60">0.50%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.60%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.70%</td>
            <td className="px-4 py-2 text-sm opacity-60">0.80%</td>
            <td className="rounded-r px-4 py-2 text-sm opacity-60">1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VipTable;
