type Referral = {
  id: number;
  username: string;
  registered: string;
  totalDeposits?: number;
  lastDeposit?: number;
  wagered?: number;
  commission?: number;
};

type History = {
  id: number;
  amount: number;
  channel: string;
  bankAccount: number;
  depositDate: string;
  status: string;
  statusDate: string;
};

type Rebate = {
  id: number;
  amount: number;
  transactionDate: string;
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

export const sortHistoryData = (
  data: History[],
  sortOption: string,
  sortOrder: "asc" | "desc",
): History[] => {
  return data.sort((a, b) => {
    let result = 0;

    if (sortOption === "Amount") {
      result = a.amount - b.amount;
    } else if (sortOption === "Channel") {
      result = a.channel.localeCompare(b.channel);
    } else if (sortOption === "Bank Account") {
      result = a.bankAccount - b.bankAccount;
    } else if (sortOption === "Deposit Date") {
      result =
        new Date(a.depositDate).getTime() - new Date(b.depositDate).getTime();
    } else if (sortOption === "Status") {
      result = a.status.localeCompare(b.status);
    } else if (sortOption === "Status Date") {
      result =
        new Date(a.statusDate).getTime() - new Date(b.statusDate).getTime();
    }

    return sortOrder === "asc" ? result : -result;
  });
};

export const sortRebateData = (
  data: Rebate[],
  sortOption: string,
  sortOrder: "asc" | "desc",
): Rebate[] => {
  return data.sort((a, b) => {
    let result = 0;

    if (sortOption === "Rebate Amount") {
      result = a.amount - b.amount;
    } else if (sortOption === "Transaction Date") {
      result =
        new Date(a.transactionDate).getTime() -
        new Date(b.transactionDate).getTime();
    }

    return sortOrder === "asc" ? result : -result;
  });
};
