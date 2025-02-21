const getRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomStatus = (type: number) => {
  const statusMap: Record<number, string[]> = {
    1: ["Completed", "Processing", "Declined"],
    2: ["Claimed", "Pending"],
    3: ["Current", "Removed", "Remove Session"],
  };

  const statuses = statusMap[type] || [];
  return statuses.length
    ? statuses[Math.floor(Math.random() * statuses.length)]
    : "Unknown";
};

export const referralsMockData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  username: `User ${index + 1}`,
  registrationDate: getRandomDate(),
  totalDeposits: getRandomNumber(500, 5000),
  lastDeposit: getRandomNumber(100, 1000),
  wagered: getRandomNumber(5000, 10000),
  commission: getRandomNumber(50, 500),
}));

export const historyMockData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  amount: getRandomNumber(50, 500),
  channel: `Channel ${index + 1}`,
  bankAccount: getRandomNumber(500, 5000),
  depositDate: getRandomDate(),
  status: getRandomStatus(1),
  statusDate: getRandomDate(),
}));

export const rebateAndCashbackMockData = Array.from(
  { length: 6 },
  (_, index) => ({
    id: index + 1,
    amount: getRandomNumber(50, 500),
    transactionDate: getRandomDate(),
  }),
);

export const totalBetsMockData = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  bet: getRandomNumber(50, 500),
  winLose: getRandomNumber(-100, 100),
  transactionDate: getRandomDate(),
}));

export const redeemsMockData = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  number: index + 1,
  transactionDate: getRandomDate(),
  rewardType: `Reward Type ${index + 1}`,
  reward: `Reward ${index + 1}`,
  status: getRandomStatus(2),
  points: getRandomNumber(1, 200),
  spins: getRandomNumber(0, 50),
}));

export const pointsMockData = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  amount: getRandomNumber(1, 1000),
  type: `Type ${index + 1}`,
  turnover: getRandomNumber(1, 1000),
  transactionDate: getRandomDate(),
}));

export const sessionsMockData = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  browser: `Chrome`,
  location: `Location ${index + 1}`,
  ip: `192.168.1.${index + 1}`,
  usedDate: getRandomDate(),
  action: getRandomStatus(3),
}));
