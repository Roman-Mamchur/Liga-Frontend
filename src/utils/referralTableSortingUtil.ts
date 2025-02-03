type Referral = {
  id: number;
  username: string;
  registered: string;
  totalDeposits?: number;
  lastDeposit?: number;
  wagered?: number;
  commission?: number;
};

export const sortReferralData = (
  data: Referral[],
  sortOption: string,
  sortOrder: "asc" | "desc",
): Referral[] => {
  return data.sort((a, b) => {
    let result = 0;

    if (sortOption === "Username") {
      result = a.username?.localeCompare(b.username ?? "") ?? 0;
    } else if (sortOption === "Registration") {
      result =
        new Date(a.registered).getTime() - new Date(b.registered).getTime();
    } else if (sortOption === "Total Deposits") {
      result = (a.totalDeposits ?? 0) - (b.totalDeposits ?? 0);
    } else if (sortOption === "Last Deposit") {
      result = (a.lastDeposit ?? 0) - (b.lastDeposit ?? 0);
    } else if (sortOption === "Wagered") {
      result = (a.wagered ?? 0) - (b.wagered ?? 0);
    } else if (sortOption === "Commission") {
      result = (a.commission ?? 0) - (b.commission ?? 0);
    }

    return sortOrder === "asc" ? result : -result;
  });
};
